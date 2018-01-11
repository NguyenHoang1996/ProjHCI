import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, TouchableHighlight } from 'react-native';
import Swiper from 'react-native-swiper';

import { NavigationActions, StackNavigator, TabNavigator } from "react-navigation";
const HEIGHT_SWIPE_TOP = 150;

export default class HeaderSwiper extends React.Component {
  constructor(props) {
    super(props);
    let songs = [
      {
        "id": 1,
        "luotNghe": "166.2k",
        "songName": "Người Ta Nói",
        "composer": "Trúc Nhân",
        "img": "https://avatar-nct.nixcdn.com/playlist/2017/07/21/f/6/f/8/1500613111340.jpg",
        "poster": "https://i.ytimg.com/vi/gyWUazuJBak/maxresdefault.jpg",
      },
      {
        "id": 2,
        "luotNghe": "144k",
        "songName": "Năm Ấy (Single)",
        "composer": "Đức Phúc",
        "img": "https://avatar-nct.nixcdn.com/playlist/2017/12/09/b/1/3/a/1512815888999.jpg",
        "poster": "https://i.ytimg.com/vi/01bUWWIGZ18/maxresdefault.jpg"
      },
      {
        "id": 3,
        "luotNghe": "68.5k",
        "songName": "Cánh Hoa Tàn Phai",
        "composer": "Hương Tràm",
        "img": "https://avatar-nct.nixcdn.com/playlist/2017/12/01/4/b/f/0/1512120282650.jpg",
        "poster": "https://i.ytimg.com/vi/7WJI7JU5Fek/maxresdefault.jpg"
      },
    ];

    console.log(JSON.stringify(this.props.navigation));
    this.state = { songs };
  };

  static navigationOptions = {
    headerBackTitle: null,
    header: null,
    tabBarLabel: 'HOMIE',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../img/home-button-64.png')}
        style={[{ height: 24, width: 24 }, { tintColor: tintColor }]}
      />
    ),
  };

  toSearch(name, img, composer) {
    const toSearch = NavigationActions.navigate({
      routeName: "Sub",
      params: { name: name, image: img, composer: composer }
    })
    this.props.navigation.dispatch(toSearch);
    console.log(JSON.stringify(this.props.navigation));
  }

  render() {
    let test = this.state.songs.map(item => {
      return (
        <TouchableOpacity key={item.id} onPress={() => { this.toSearch(item.songName, item.img, item.composer) }}>
          <View style={styles.slide2}>
            <Image
              style={{ height: HEIGHT_SWIPE_TOP, width: "100%" }}
              source={{ uri: item.poster }}
            />
            <View style={{ marginLeft: 0, height: 150, position: 'absolute', width: "100%", backgroundColor: 'black', opacity: 0.4 }} />

            <View style={{ marginLeft: 8, marginTop: HEIGHT_SWIPE_TOP - 60 - 8, position: 'absolute', flexDirection: "row" }}>
              <Image
                style={{ borderRadius: 2, height: 60, width: 60 }}
                source={{ uri: item.img }}
              />

              <View style={{ flexDirection: "column", marginLeft: 12 }}>
                <Text style={{ marginTop: 16, color: '#fff', fontSize: 16, backgroundColor: 'rgba(0,0,0,0)', }}>{item.songName}</Text>
                <Text style={{ marginTop: 4, color: '#fff', fontSize: 13, backgroundColor: 'rgba(0,0,0,0)', }}>{item.composer}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )
    })

    return (
      <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false} autoplay={false} autoplayTimeout={4}>
        {test}
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: HEIGHT_SWIPE_TOP,
    marginTop: 0,
    marginBottom: 0,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    flexGrow: 1,
    height: null,
    width: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    textAlign: 'center',
  },
});
