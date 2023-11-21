import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  Animated,
} from 'react-native';
import allMessagesStyle from './allMessagesStyle';
import filter from 'lodash.filter';
import InputComponent from 'components/input/CustomInput';
import {colors} from 'colors';
import AllCards from 'components/cards/AllCards';
import ButtonComponent from 'components/button/button';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_ENDPOINT = 'https://randomuser.me/api/?results=30';
export interface propsDataCard {
  author: string;
  title: string;
  description: string;
  time: string;
  picture: string;
}

const dataCard: propsDataCard[] = [
  {
    author: 'Servicios escolares',
    title: 'Recoger credencial',
    description:
      'Ya puedes pasar a recoger tu credencial a partir de el día de hoy',
    time: '11:30 pm',
    picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
  },
  {
    author: 'Servicios escolares',
    title: 'Suspensión de clases',
    description: 'Se les avisa que el dia de hoy no tendremo... ',
    time: '11:30 pm',
    picture: 'https://randomuser.me/api/portraits/thumb/women/10.jpg',
  },
  {
    author: 'Servicios escolares',
    title: 'Tarea',
    description: 'Estas son las actividades que deberan realizar el d',
    time: '11:30 pm',
    picture: 'https://randomuser.me/api/portraits/thumb/men/10.jpg',
  },
  {
    author: 'Servicios escolares',
    title: 'Suspensión de clases',
    description: 'Se les avisa que el dia de hoy no tendremo... ',
    time: '11:30 pm',
    picture: 'https://randomuser.me/api/portraits/thumb/women/19.jpg',
  },
  {
    author: 'Servicios escolares',
    title: 'Tarea',
    description: 'Estas son las actividades que deberan realizar el d',
    time: '11:30 pm',
    picture: 'https://randomuser.me/api/portraits/thumb/men/10.jpg',
  },
];
const AllMessage = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>([]);
  const [fullData, setFullData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showButton, setShowButton] = useState<boolean>(false);
  const scrollY = new Animated.Value(0);
  const translateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    setIsLoading(true);
    fetchData(API_ENDPOINT);
  }, []);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const user = await AsyncStorage.getItem('userName');
        if (user === 'Profe') {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      } catch (err) {
        console.error('Error fetching userName from AsyncStorage:', err);
      }
    };
    fetchUserName();
  }, []);

  const fetchData = async (url: string) => {
    try {
      const res = await fetch(url);
      const json: any = await res.json();
      setData(json.results);
      setFullData(json.results);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    console.log('data', data);
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();
    const filteredData = filter(fullData, (user: any) => {
      return contains(user, formattedQuery);
    });
    setData(filteredData);
  };

  const contains = ({name, email}: any, query: string) => {
    const {first, last} = name;
    const keywords = query.split(' ');

    // Verifica si todas las palabras clave se encuentran en el nombre o el apellido
    return keywords.every(
      keyword =>
        first.includes(keyword) ||
        last.includes(keyword) ||
        email.includes(keyword),
    );
  };

  if (isLoading) {
    return (
      <View style={allMessagesStyle.containerLoading}>
        <ActivityIndicator size={'large'} color={'red'} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={allMessagesStyle.containerError}>
        <Text>Error in Fetching data</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={allMessagesStyle.container}>
      <FlatList
        data={dataCard}
        ListHeaderComponent={
          <Animated.View
            style={[allMessagesStyle.viewSearch, {transform: [{translateY}]}]}>
            <InputComponent
              style={allMessagesStyle.searchBox}
              placeholder="Buscar anuncio"
              value={searchQuery}
              onChange={query => handleSearch(query)}
              placeholderColor={colors.neutral60}
            />
          </Animated.View>
        }
        keyExtractor={(item: propsDataCard, index) => `${item.author}+${index}`}
        renderItem={({item}) => <AllCards item={item} />}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={16}
      />
      {showButton && (
        <ButtonComponent
          onPress={() => navigation.navigate('CreateCard' as never)}
          styleButton={allMessagesStyle.buttonStyle}
          buttonText={'Nuevo anuncio'}
          styleText={allMessagesStyle.buttonText}
        />
      )}
    </SafeAreaView>
  );
};

export default AllMessage;
