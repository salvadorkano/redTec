import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  TextInput,
  FlatList,
  Image,
  Animated,
} from 'react-native';
import allMessagesStyle from './allMessagesStyle';
import filter from 'lodash.filter';

const API_ENDPOINT = 'https://randomuser.me/api/?results=30';

const AllMessage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>([]);
  const [fullData, setFullData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
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
        data={data}
        ListHeaderComponent={
          <Animated.View
            style={[allMessagesStyle.searchBox, {transform: [{translateY}]}]}>
            <TextInput
              placeholder="Search"
              clearButtonMode="always"
              autoCapitalize="none"
              autoCorrect={false}
              value={searchQuery}
              onChangeText={query => handleSearch(query)}
            />
          </Animated.View>
        }
        keyExtractor={(item: any) => item.login.username}
        renderItem={({item}) => (
          <View style={allMessagesStyle.itemContainer}>
            <Image
              source={{uri: item.picture.thumbnail}}
              style={allMessagesStyle.image}
            />
            <View>
              <Text style={allMessagesStyle.textName}>
                {item.name.first} {item.name.last}
              </Text>
              <Text style={allMessagesStyle.textEmail}>{item.email}</Text>
            </View>
          </View>
        )}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={16}
      />
    </SafeAreaView>
  );
};

export default AllMessage;
