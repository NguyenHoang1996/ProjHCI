import React from 'react';
import { StyleSheet, Text, View, Easing, Animated } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import TrangChinh from './Home/TrangChinh';
import HomeScreenGridAlbum from './Home/HomeScreenGridAlbum';
import HomeScreenListSongs from './Home/HomeScreenListSongs';
import AlbumHotMore from './Home/AlbumHotMore';
import HomeScreenBXHMore from './Home/HomeScreenBXHMore';
import HomeScreenBXHMVMore from './Home/HomeScreenBXHMVMore';

import Parallax from './Parallax';

import SettingScreen from './Setting/SettingScreen';

import SearchScreen from './Search/SearchScreen';
import SearchScreenDetail from './Search/SearchScreenDetail';

import PersonalScreen from './Personal/PersonalScreen';
import PlayList from './Personal/PlayList';
import MVList from './Personal/MVList';

import Player from "./Player";
import Login from "./Login";
import VideoPlayer from "./VideoPlayer";

const StackHome = StackNavigator({
  TrangChinh: {
    screen: TrangChinh,
  },
  TrangAlbums: {
    screen: HomeScreenGridAlbum,
  },
  TrangNhac: {
    screen: HomeScreenListSongs,
  },
  TrangAlbumsHotMore:{
    screen: AlbumHotMore,
  },
  TrangHomeScreenBXHMore:{
    screen: HomeScreenBXHMore,
  },
  TrangHomeScreenBXHMVMore:{
    screen: HomeScreenBXHMVMore,
  }
});

const StackSearch = StackNavigator({
  TrangSearchScreen: {
    screen: SearchScreen,
  },
  TrangTimKiem: {
    screen: SearchScreenDetail,
  },
});

const StackPersonal = StackNavigator({
  TrangPersonalScreen: {
    screen: PersonalScreen,
  },
  TrangPlayList: {
    screen: PlayList,
  },
  TrangMVList: {
    screen: MVList,
  },
});

export const MyTabNavigator = TabNavigator({
  Home: { screen: StackHome },
  Search: { screen: StackSearch },
  Personal: { screen: StackPersonal },
  Setting: { screen: SettingScreen },
});


const MainStack = StackNavigator({
  Main: {
    screen: MyTabNavigator,
  },
  Sub: {
    screen: Player,
  },
  Login:{
    screen: Login,
  },
  VideoPlayer:{
    screen: VideoPlayer,
  }  
  }, {
    headerMode: 'none',
    mode: 'card',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  }
);

export default MainStack;
// export default Parallax;
// export default Player;