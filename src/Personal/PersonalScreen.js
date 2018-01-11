import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
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

const ItemS = ({ srcImage, Songname, Composer, LuotNghe }) => {
  return (
    <View style={{ height: WidthItem, width: window.width - 32, marginRight: 0, marginBottom: 8, flexDirection: "row" }}>
      <Image
        style={{ height: WidthItem, width: WidthItem, borderRadius: WidthItem / 2 }}
        source={{ uri: srcImage }}
      />
      <View style={{ marginLeft: 8, height: WidthItem, width: window.width - 48 * 3 + 8 }}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Text numberOfLines={1} style={{ fontSize: 14 }}>{Songname}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
          <Text numberOfLines={1} style={{ fontSize: 13, color: "#808080" }}>{Composer}</Text>
          <View style={{ height: 16, width: 64, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', opacity: 0.8 }}>
            <Icon name="ios-headset" size={12} color="#808080" />
            <Text style={{ fontSize: 13, color: "#808080" }}> {LuotNghe}</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, height: WidthItem, marginTop: 0, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
        <Image
          style={{ height: 24, width: 24, borderRadius: 10 }}
          source={require('../img/play-button.png')}
        />
      </View>
    </View>
  )
}

export default class PersonalScreen extends React.Component {
  static navigationOptions = {
    headerBackTitle: null,
    header: null,
    tabBarLabel: 'Cá Nhân',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../img/personal.png')}
        style={[{ height: 24, width: 24 }, { tintColor: tintColor }]}
      />
    ),
  };

  constructor(props) {
    super(props);
    let songs = [
      {
        "id": 0,
        "luotNghe": "184.7k",
        "songName": "See Sing & Share",
        "composer": "Hà Anh Tuấn",
        "img": "https://avatar-nct.nixcdn.com/playlist/2017/08/07/a/1/6/5/1502069723798.jpg",
      },
      {
        "id": 1,
        "luotNghe": "166.2k",
        "songName": "Người Ta Nói",
        "composer": "Trúc Nhân",
        "img": "https://avatar-nct.nixcdn.com/playlist/2017/07/21/f/6/f/8/1500613111340.jpg",
      },
      {
        "id": 2,
        "luotNghe": "144k",
        "songName": "Năm Ấy (Single)",
        "composer": "Đức Phúc",
        "img": "https://avatar-nct.nixcdn.com/playlist/2017/12/09/b/1/3/a/1512815888999.jpg",
      },
      {
        "id": 3,
        "luotNghe": "68.5k",
        "songName": "Cánh Hoa Tàn Phai",
        "composer": "Hương Tràm",
        "img": "https://avatar-nct.nixcdn.com/playlist/2017/12/01/4/b/f/0/1512120282650.jpg",
      },
      {
        "id": 4,
        "luotNghe": "21.8k",
        "songName": "Giáng Sinh Yêu Thương",
        "composer": "Thiên Khôi",
        "img": "https://avatar-nct.nixcdn.com/playlist/2017/12/15/9/1/c/5/1513304329127.jpg",
      }
    ];

    this.state = { songs, isFocusing: false };
  }

  toLogin() {
    const toLogin = NavigationActions.navigate({
      routeName: "Login",
    })
    this.props.navigation.dispatch(toLogin);
  }

  toPlayer(text, img, composer) {
    const toPlayer = NavigationActions.navigate({
      routeName: "Sub",
      params: { name: text, image: img, composer: composer }
    })
    this.props.navigation.dispatch(toPlayer);
    console.log(JSON.stringify(this.props.navigation));
  }

  toTrangPlayList(name) {
    const toTrangPlayList = NavigationActions.navigate({
      routeName: "TrangPlayList",
      params: {name : name}
    })
    this.props.navigation.dispatch(toTrangPlayList);
  }

  toTrangMVList(name) {
    const toTrangMVList = NavigationActions.navigate({
      routeName: "TrangMVList",
      params: {name : name}
    })
    this.props.navigation.dispatch(toTrangMVList);
  }

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={{ backgroundColor: "white" }} >
        {/* TieuDe */}
        <View style={{
          paddingTop: 20, backgroundColor: "#2582BE", width: "100%", alignItems: "center",
          flexDirection: "row", justifyContent: "center", height: 64
        }}>
          <Text numberOfLines={1} style={{ fontSize: 20, color: "white" }}>Cá Nhân</Text>
        </View>

        <ScrollView style={{ height: 455 }}>
          <Space />
          <TouchableOpacity onPress={() => this.toLogin()}>
            <View style={{
              backgroundColor: "skyblue", width: "100%", alignItems: "center",
              flexDirection: "row", justifyContent: "space-between", height: 72,
              paddingLeft: 16, paddingRight: 16
            }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require('../img/personal.png')}
                  style={{ height: 32, width: 32, tintColor: "white" }}
                />
                <Text numberOfLines={1} style={{ marginLeft: 8, fontSize: 16, color: "white" }}>Đăng Nhập</Text>
              </View>
              <View>
                <Icon name="ios-arrow-forward" size={32} color="white" />
              </View>
            </View>
          </TouchableOpacity>
          <Space />
          <Text style={{ marginLeft: 16, marginTop: 8, marginBottom: 8, fontSize: 16, fontWeight: "bold" }}>Online</Text>
          <TouchableOpacity onPress={() => { this.toTrangPlayList("Playlist") }}>
            <View style={{
              width: "100%", alignItems: "center",
              flexDirection: "row", justifyContent: "space-between", height: 50,
              paddingLeft: 16, paddingRight: 16, borderTopWidth: 1, borderColor: "skyblue"
            }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="ios-list-box" size={24} color="skyblue" />
                <Text numberOfLines={1} style={{ marginLeft: 16, fontSize: 16, color: "black" }}>Playlist</Text>
              </View>
              <View>
                <Icon name="ios-arrow-forward" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.toTrangMVList("MV list")}}>
            <View style={{
              width: "100%", alignItems: "center",
              flexDirection: "row", justifyContent: "space-between", height: 50,
              paddingLeft: 16, paddingRight: 16, borderTopWidth: 1, borderColor: "skyblue"
            }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="ios-radio" size={24} color="skyblue" />
                <Text numberOfLines={1} style={{ marginLeft: 16, fontSize: 16, color: "black" }}>MV list</Text>
              </View> 
              <View>
                <Icon name="ios-arrow-forward" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
          <Space />
          <Text style={{ marginLeft: 16, marginTop: 8, marginBottom: 8, fontSize: 16, fontWeight: "bold" }}>Offline</Text>
          <TouchableOpacity onPress={() => { this.toTrangPlayList("Nhạc đã tải") }}>
            <View style={{
              width: "100%", alignItems: "center",
              flexDirection: "row", justifyContent: "space-between", height: 50,
              paddingLeft: 16, paddingRight: 16, borderTopWidth: 1, borderColor: "skyblue"
            }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {/* <Icon name="ios-list-box" size={24} color="skyblue" /> */}
                <Image
                  source={require('../img/music-player.png')}
                  style={{ height: 24, width: 24, tintColor: "skyblue" }}
                />
                <Text numberOfLines={1} style={{ marginLeft: 16, fontSize: 16, color: "black" }}>Nhạc đã tải</Text>
              </View>
              <View>
                <Icon name="ios-arrow-forward" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.toTrangMVList("Video ca nhạc")}}>
            <View style={{
              width: "100%", alignItems: "center",
              flexDirection: "row", justifyContent: "space-between", height: 50,
              paddingLeft: 16, paddingRight: 16, borderTopWidth: 1, borderColor: "skyblue"
            }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {/* <Icon name="ios-radio" size={24} color="skyblue" /> */}
                <Image
                  source={require('../img/list-of-files.png')}
                  style={{ height: 24, width: 24, tintColor: "skyblue" }}
                />
                <Text numberOfLines={1} style={{ marginLeft: 16, fontSize: 16, color: "black" }}>Video ca nhạc</Text>
              </View>
              <View>
                <Icon name="ios-arrow-forward" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>

          <Space />
          <Text style={{ marginLeft: 16, marginTop: 8, marginBottom: 8, fontSize: 16, fontWeight: "bold" }}>Lịch sử nghe nhạc</Text>
          <FlatList
            data={this.state.songs}
            keyExtractor={this._keyExtractor}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ marginLeft: 16 }} key={item.id}
                onPress={() => this.toPlayer(item.songName, item.img, item.composer)}
              >
                <ItemS
                  LuotNghe={item.luotNghe} Songname={item.songName}
                  Composer={item.composer} srcImage={item.img}
                />
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
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
