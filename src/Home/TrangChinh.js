import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, StatusBar } from 'react-native';

import HeaderSwiper from './HeaderSwiper';
import NgheGiHomNay from './NgheGiHomNay';
import AlbumHot from './AlbumHot';
import HomeScreenBXH from './HomeScreenBXH';
import HomeScreenBXHMV from './HomeScreenBXHMV';


const HEIGHT_SWIPE_TOP = 150;
const Space = () => {
  return (
    <View style={{ height: 5, width: "100%", backgroundColor: '#D3D3D3' }}></View>
  )
}

export default class TrangChinh extends React.Component {
  static navigationOptions = {
    headerBackTitle: null,
    header: null,
    tabBarLabel: 'Trang chủ',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../img/home-button-64.png')}
        style={[{ height: 24, width: 24 }, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <ScrollView style={{ height: HEIGHT_SWIPE_TOP, marginTop: 20, backgroundColor: "white" }}>
        <StatusBar
          backgroundColor="blue"
          barStyle="dark-content"
        />
        <HeaderSwiper navigation={this.props.navigation} />
        <Space />
        <NgheGiHomNay navigation={this.props.navigation} />
        <Space />
        <AlbumHot navigation={this.props.navigation} />
        <Space />
        <HomeScreenBXH navigation={this.props.navigation} />
        <Space />
        <HomeScreenBXHMV navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}
