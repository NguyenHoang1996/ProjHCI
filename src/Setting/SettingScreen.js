import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from "react-navigation";

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');
const WidthItem = 48;

const Space = () => {
  return (
    <View style={{ height: 5, width: "100%", backgroundColor: '#D3D3D3' }}></View>
  )
}

export default class SettingScreen extends React.Component {
  static navigationOptions = {
    headerBackTitle: null,
    header: null,
    tabBarLabel: 'Cài Đặt',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../img/settings-work-tool-64.png')}
        style={[{ height: 24, width: 24 }, { tintColor: tintColor }]}
      />
    ),
  };

  constructor() {
    super();
    this.state = {
      switch1Value: false,
      switchDongBohoa: false,
      switchTai3G: true,
    }
  }
  toggleswitchDongBohoa = (value) => {
    this.setState({ switchDongBohoa: value })
  }
  toggleswitchTai3G = (value) => {
    this.setState({ switchTai3G: value })
  }

  toggleSwitch1 = (value) => {
    this.setState({ switch1Value: value })
    console.log('Switch 1 is: ' + value)
  }

  render() {
    return (
      <View style={{ backgroundColor: "white" }}>
        <View style={{
          paddingTop: 20, backgroundColor: "#2582BE", width: "100%", alignItems: "center",
          flexDirection: "row", justifyContent: "center", height: 64
        }}>
          {/* <TouchableOpacity onPress={() => goBack()} style={{
            marginLeft: 0, height: 32, width: 48,
            justifyContent: "center", alignItems: "center"
          }}>
            <Icon name="ios-arrow-back" size={24} color="white"
              style={{ backgroundColor: "transparent" }} />
          </TouchableOpacity> */}
          <Text numberOfLines={1} style={{ fontSize: 20, color: "white" }}>Cài Đặt</Text>

          {/* <TouchableOpacity onPress={() => this.toSearch()} style={{ height: 32, width: 48, justifyContent: "center", alignItems: "center" }}>
            <Icon name="ios-search" size={24} color="white"
              style={{ backgroundColor: "transparent" }} />
          </TouchableOpacity> */}
        </View>
        <View >

        </View>
        <ScrollView style={{ height: 455 }}>
          <Space />
          <Text style={{ marginLeft: 16, marginTop: 8, marginBottom: 8, fontSize: 16, fontWeight: "bold" }}>Cài đặt</Text>
          <TouchableOpacity >
            <View style={{
              width: "100%", alignItems: "center",
              flexDirection: "row", justifyContent: "space-between", height: 50,
              paddingLeft: 16, paddingRight: 16
            }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="ios-list-box" size={24} color="skyblue" />
                <Text numberOfLines={1} style={{ marginLeft: 16, fontSize: 16, color: "black" }}>Chất lượng nhạc</Text>
              </View>
              <View>
                <Icon name="ios-arrow-forward" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{
              width: "100%", alignItems: "center",
              flexDirection: "row", justifyContent: "space-between", height: 50,
              paddingLeft: 16, paddingRight: 16, borderWidth: 0
            }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="ios-radio" size={24} color="skyblue" />
                <Text numberOfLines={1} style={{ marginLeft: 16, fontSize: 16, color: "black" }}>Chất lượng MV</Text>
              </View>
              <View>
                <Icon name="ios-arrow-forward" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>

          <View style={{
            width: "100%", alignItems: "center",
            flexDirection: "row", justifyContent: "space-between", height: 50,
            paddingLeft: 16, paddingRight: 16
          }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="ios-list-box" size={24} color="skyblue" />
              <Text numberOfLines={1} style={{ marginLeft: 16, fontSize: 16, color: "black" }}>Đồng bộ hóa</Text>
            </View>
            <View>
              {/* <Icon name="ios-arrow-forward" size={24} color="black" /> */}
              <Switch
                onValueChange={this.toggleswitchDongBohoa}
                value={this.state.switchDongBohoa}
                // thumbTintColor="red"
                tintColor="skyblue"
                onTintColor="skyblue" />
            </View>
          </View>

          <View style={{
            width: "100%", alignItems: "center",
            flexDirection: "row", justifyContent: "space-between", height: 50,
            paddingLeft: 16, paddingRight: 16
          }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="ios-list-box" size={24} color="skyblue" />
              <Text numberOfLines={1} style={{ marginLeft: 16, fontSize: 16, color: "black" }}>Tải qua băng thông 3Gs</Text>
            </View>
            <View>
              {/* <Icon name="ios-arrow-forward" size={24} color="black" /> */}
              <Switch
                onValueChange={this.toggleswitchTai3G}
                value={this.state.switchTai3G}
                // thumbTintColor="red"
                tintColor="skyblue"
                onTintColor="skyblue" />
            </View>
          </View>
          <Space />
          <Text style={{ marginLeft: 16, marginTop: 8, marginBottom: 8, fontSize: 16, fontWeight: "bold" }}>Thông tin khác</Text>

          <View style={{
            width: "100%", alignItems: "center",
            flexDirection: "row", justifyContent: "space-between", height: 50,
            paddingLeft: 16, paddingRight: 16, borderWidth: 0
          }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="ios-radio" size={24} color="skyblue" />
              <Text numberOfLines={1} style={{ marginLeft: 16, fontSize: 16, color: "black" }}>Phiên bản</Text>
            </View>
            <View>
              <Text numberOfLines={1} style={{ marginLeft: 16, fontSize: 16, color: "skyblue" }}>Beta 1.0</Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={{
              width: "100%", alignItems: "center",
              flexDirection: "row", justifyContent: "space-between", height: 50,
              paddingLeft: 16, paddingRight: 16, borderWidth: 0
            }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="ios-radio" size={24} color="skyblue" />
                <Text numberOfLines={1} style={{ marginLeft: 16, fontSize: 16, color: "black" }}>Nhóm tác giả</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text numberOfLines={1} style={{ marginRight: 8, fontSize: 16, color: "skyblue" }}>Nhóm 6</Text>
                {/* <Icon name="ios-arrow-forward" size={24} color="black" /> */}
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
