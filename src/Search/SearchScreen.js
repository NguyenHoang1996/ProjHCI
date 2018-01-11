import React from 'react';
import {
  StyleSheet, Text, View, ScrollView, Image, TextInput,
  KeyboardAvoidingView, TouchableOpacity, Keyboard, TouchableHighlight, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from "react-navigation";

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');
const WidthItem = 48;
const FONT_SIZE_SO_THU_TU = 16;

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

const Space = () => {
  return (
    <View style={{ height: 5, width: "100%", backgroundColor: '#D3D3D3' }}></View>
  )
}

export default class Search extends React.Component {
  static navigationOptions = {
    headerBackTitle: null,
    header: null,
    tabBarLabel: 'Tìm kiếm',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../img/search-icon-64.png')}
        style={[{ height: 24, width: 24 }, { tintColor: tintColor }]}
      />
    ),
  };

  toPlayer(text, img, composer) {
    const toPlayer = NavigationActions.navigate({
      routeName: "Sub",
      params: { name: text, image: img, composer: composer }
    })
    this.props.navigation.dispatch(toPlayer);
    console.log(JSON.stringify(this.props.navigation));
  }

  toTrangTimKiem(textSearch) {
    const toTrangTimKiem = NavigationActions.navigate({
      routeName: "TrangTimKiem",
      params: { search: textSearch }
    })
    this.props.navigation.dispatch(toTrangTimKiem);
    console.log(JSON.stringify(this.props.navigation));
  }

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
      },
      {
        "id": 5,
        "luotNghe": "144k",
        "songName": "Năm Ấy (Single)",
        "composer": "Đức Phúc",
        "img": "https://avatar-nct.nixcdn.com/playlist/2017/12/09/b/1/3/a/1512815888999.jpg",
      },
      {
        "id": 6,
        "luotNghe": "68.5k",
        "songName": "Cánh Hoa Tàn Phai",
        "composer": "Hương Tràm",
        "img": "https://avatar-nct.nixcdn.com/playlist/2017/12/01/4/b/f/0/1512120282650.jpg",
      },
      {
        "id": 7,
        "luotNghe": "21.8k",
        "songName": "Giáng Sinh Yêu Thương",
        "composer": "Thiên Khôi",
        "img": "https://avatar-nct.nixcdn.com/playlist/2017/12/15/9/1/c/5/1513304329127.jpg",
      },
    ];

    console.log(JSON.stringify(this.props.navigation));
    this.state = { songs, text: 'Tìm kiếm', isFocusing: false };
  }

  handleInputFocus = () => this.setState({ isFocusing: true })
  handleInputBlur = () => this.setState({ isFocusing: false })

  render() {
    let test = this.state.songs.map(item => {
      return (
        <TouchableOpacity key={item.id} onPress={() => { this.toPlayer(item.songName, item.img, item.composer) }}>
          <ItemS
            LuotNghe={item.luotNghe} Songname={item.songName}
            Composer={item.composer} srcImage={item.img}
          />
        </TouchableOpacity>
      )
    })
    return (
      <View style={{ backgroundColor: "white", justifyContent: "center", alignItems: "center", marginTop: 0 }}>

        <View style={{ height: 64, paddingTop: 20, backgroundColor: "#2582BE", width: "100%", justifyContent: "center", alignItems: "center", }}>
          <View style={{ marginTop: 8, marginBottom: 8, width: window.width - 32, flexDirection: "row", justifyContent: "space-between" }}>
            <TextInput
              style={{ paddingLeft: 32, width: window.width - 32, height: 32, borderRadius: 16, backgroundColor: "skyblue", borderColor: '#c8d9f3', borderWidth: 1 }}
              onChangeText={(text) => this.setState({ text })}
              returnKeyType={'search'}
              clearButtonMode={'while-editing'}
              // onFocus={this.handleInputFocus}
              // onBlur={this.handleInputBlur}
              enablesReturnKeyAutomatically={true}
              clearTextOnFocus={this.state.text == "Tìm kiếm" ? true : false}
              onSubmitEditing={() => this.toTrangTimKiem(this.state.text)}
              value={this.state.text}
              placeholderTextColor="red"
            />
            <View style={{ height: 32, width: 32, justifyContent: "center", alignItems: "center", position: "absolute" }}>
              {/* {iconSearch} */}
              <Icon name="ios-search" size={24} color="white"
                style={{ position: "absolute", backgroundColor: "transparent" }} />
            </View>
          </View>
        </View>
        <ScrollView style={{ marginTop: 0, height: 460 }}>
          <Space />
          <Text style={{ marginLeft: 16, marginTop: 8, fontSize: 16, fontWeight: "bold" }}>Từ khóa Hot</Text>
          <View style={{ marginLeft: 8, marginTop: 0, width: "100%", height: 120, flexDirection: "column" }}>
            <TouchableHighlight onPress={() => { this.toTrangTimKiem("Loay hoay chiều Sài Gòn") }} underlayColor="skyblue"
              style={{ alignItems: "center", justifyContent: "center", marginLeft: 8, marginTop: 10, height: 26, width: 200, borderRadius: 13, borderWidth: 1 }}>
              <Text style={{ backgroundColor: "transparent", fontSize: 14, }}>Loay hoay chiều Sài Gòn</Text>
            </TouchableHighlight>

            <View style={{ marginTop: 0, height: 26, width: 100, flexDirection: "row" }}>
              <TouchableHighlight onPress={() => { this.toTrangTimKiem("They said") }} underlayColor="skyblue"
                style={{ alignItems: "center", justifyContent: "center", marginLeft: 8, marginTop: 10, height: 26, width: 90, borderRadius: 13, borderWidth: 1 }}>
                <Text style={{ backgroundColor: "transparent", fontSize: 14, }}>They said</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => { this.toTrangTimKiem("Đã lỡ yêu em nhiều") }} underlayColor="skyblue"
                style={{ alignItems: "center", justifyContent: "center", marginLeft: 8, marginTop: 10, height: 26, width: 160, borderRadius: 13, borderWidth: 1 }}>
                <Text style={{ backgroundColor: "transparent", fontSize: 14, }}>Đã lỡ yêu em nhiều</Text>
              </TouchableHighlight>
            </View>
            <TouchableHighlight onPress={() => { this.toTrangTimKiem("Mặt trời của em") }} underlayColor="skyblue"
              style={{ alignItems: "center", justifyContent: "center", marginLeft: 8, marginTop: 20, height: 26, width: 130, borderRadius: 13, borderWidth: 1 }}>
              <Text style={{ backgroundColor: "transparent", fontSize: 14, }}>Mặt trời của em</Text>
            </TouchableHighlight>
          </View>

          <Space />

          <View style={{ marginTop: 8, marginBottom: 0 }}>
            <Text style={{ marginLeft: 16, marginTop: 0, marginBottom: 8, fontSize: 16, fontWeight: "bold" }}>Có thể bạn thích</Text>
          </View>

          <View style={{ marginTop: 0, marginBottom: 0, marginLeft: 16, marginRight: 16, backgroundColor: "white" }}>
            <View style={{ alignItems: "center", marginLeft: 0 }}>
              {test}
            </View>
          </View>
          <Space />
        </ScrollView>
      </View>
    );
  }
}
