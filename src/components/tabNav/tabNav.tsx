import {colors} from 'colors';
import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  View,
  Dimensions,
  Animated,
  Text,
  TouchableOpacity,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {normalize} from 'utils/normalize';
import AllMessage from './tabsContainer/allMessages/allMessages';
import DirectMessage from './tabsContainer/directMessage/directMessages';
import GroupMessage from './tabsContainer/groupMessages/groupMessages';
import styles from './tabNavStyles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'router/RootStackParams';

const {width: widthScreen} = Dimensions.get('screen');

type TabData = {
  key: string;
  title: string;
  ref: React.RefObject<View>;
  children: any;
};

const dataTabs: any = {
  Todos: <AllMessage />,
  // Individual: <DirectMessage />,
  // Grupo: <GroupMessage />,
};

const data: TabData[] = Object.keys(dataTabs).map(key => ({
  key,
  title: key,
  ref: createRef(),
  children: dataTabs[key],
}));

type TabProps = {
  item: TabData;
  onItemPress: () => void;
  isSelected: boolean;
};

const Tab: React.FC<TabProps> = ({item, onItemPress, isSelected}) => {
  return (
    <TouchableOpacity onPress={onItemPress}>
      <View ref={item.ref}>
        <Text
          style={[
            styles.tabText,
            {color: isSelected ? colors.primary : colors.grayText},
          ]}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

type IndicatorProps = {
  measures: Array<{x: number; y: number; width: number; height: number}>;
  scrollX: Animated.Value;
};

const Indicator: React.FC<IndicatorProps> = ({measures, scrollX}) => {
  const inputRange = data.map((_, i) => i * widthScreen);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map(measure => measure.width),
  });
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map(measure => measure.x),
  });
  return (
    <Animated.View
      style={[
        styles.indicator,
        {width: indicatorWidth, transform: [{translateX}]},
      ]}
    />
  );
};

type TabsProps = {
  scrollX: Animated.Value;
  data: TabData[];
  onItemPress: (itemIndex: number) => void;
  selectedTabIndex: number;
};

const Tabs: React.FC<TabsProps> = ({
  scrollX,
  data: data2,
  onItemPress,
  selectedTabIndex,
}) => {
  const [measures, setMeasures] = useState<
    Array<{x: number; y: number; width: number; height: number}>
  >([]);

  const containerRef = useRef<View>(null);

  useEffect(() => {
    const newMeasures: Array<{
      x: number;
      y: number;
      width: number;
      height: number;
    }> = [];

    const onMeasure = (x: number, y: number, width: number, height: number) => {
      newMeasures.push({x, y, width, height});

      if (newMeasures.length === data2.length) {
        setMeasures(newMeasures);
      }
    };

    data2.forEach(item => {
      if (containerRef.current) {
        item.ref.current?.measureLayout(containerRef.current, onMeasure);
      }
    });
  }, [data2]);

  return (
    <View style={styles.tabsContainer}>
      <View ref={containerRef} style={styles.tabs}>
        {data.map((item, index) => {
          return (
            <Tab
              key={item.key}
              item={item}
              onItemPress={() => onItemPress(index)}
              isSelected={selectedTabIndex === index}
            />
          );
        })}
      </View>
      {measures.length > 0 && (
        <Indicator measures={measures} scrollX={scrollX} />
      )}
    </View>
  );
};

export default function TabNavs() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<TabData> | null>(null);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const onItemPress = useCallback(
    (itemIndex: number) => {
      flatListRef?.current?.scrollToOffset({
        offset: itemIndex * widthScreen,
        animated: true,
      });
      setSelectedTabIndex(itemIndex);
    },
    [flatListRef],
  );

  return (
    <View style={styles.container}>
      {/* <View style={{paddingVertical: normalize(10)}}>
        <Tabs
          scrollX={scrollX}
          data={data}
          onItemPress={onItemPress}
          selectedTabIndex={selectedTabIndex}
        />
      </View> */}
      <Animated.FlatList
        data={data}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event<NativeSyntheticEvent<NativeScrollEvent>>(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        onMomentumScrollEnd={event => {
          const currentIndex = Math.floor(
            event.nativeEvent.contentOffset.x / widthScreen,
          );
          setSelectedTabIndex(currentIndex);
        }}
        bounces={false}
        ref={flatListRef}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>{item.children}</View>
        )}
      />
    </View>
  );
}
