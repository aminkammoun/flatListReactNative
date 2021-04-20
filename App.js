import React from "react";
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from "react-native";
import faker from "faker";
const { height, width } = Dimensions.get("screen");

var Data = [...Array(30).keys()].map((_, i) => {
  return {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    image: `https://randomuser.me/portraits/${faker.helpers.randomize([
      "men",
      "women",
    ])}/${faker.random.number(50)}.jpg`,
    jobTitle: faker.name.jobTitle().slice(0, 10),
    email: faker.internet.email(),
  };
});
const SPACING = 20;
const AVATAR_SIZE = 70;
const BG_IMG = "./assets/BG3.jpg";
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

export default function App() {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Image
        blurRadius={80}
        style={{
          ...StyleSheet.absoluteFillObject,
          width: width,
          height: height,
        }}
        source={require(BG_IMG)}
      />
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight,
        }}
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];
          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + .5),
          ];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });

          return (
            <Animated.View
              style={{
                flexDirection: "row",
                padding: SPACING,
                marginBottom: SPACING,
                backgroundColor: "rgb(255,255,255)",
                borderRadius: 12,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.0,

                elevation: 24,
                opacity,
                transform: [{ scale }],
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  height: AVATAR_SIZE,
                  width: AVATAR_SIZE,
                  borderRadius: AVATAR_SIZE,
                  marginRight: SPACING / 2,
                }}
              />
              <View>
                <Text style={{ fontSize: 22, fontWeight: "700" }}>
                  {item.name}
                </Text>
                <Text style={{ fontSize: 18, opacity: 0.7 }}>
                  {item.jobTitle}
                </Text>
                <Text style={{ fontSize: 12, opacity: 0.7 }}>{item.email}</Text>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
