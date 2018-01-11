import React from 'react';
import {
    StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, FlatList, StatusBar
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
export default class HomeScreenGridAlbum extends React.Component {
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
            /////
            {
                "id": 8,
                "luotNghe": "35.8k",
                "songName": "Loay hoay chiều Sài Gòn",
                "composer": "Đăng Nguyễn",
                "img": "http://mmusic.vn//uploads/media/2017-12-06/1512551567_Loay_Hya.jpg",
            },
            {
                "id": 9,
                "luotNghe": "253k",
                "songName": "They said",
                "composer": "Binz",
                "img": "https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/24232617_1510364525721214_111631113142299556_n.jpg?oh=f3f8a0a8f0b3ddc52b6083cd4ca59063&oe=5AFA6242",
            },
            {
                "id": 10,
                "luotNghe": "134.7k",
                "songName": "Đã lỡ yêu em nhiều",
                "composer": "Justa Tee",
                "img": "https://kenh14cdn.com/zoom/700_438/2017/daloyeu1-1510633923947-10-136-536-1157-crop-1510634123788.jpg",
            },
            {
                "id": 11,
                "luotNghe": "81.8k",
                "songName": "Mặt trời của em",
                "composer": "Phương Ly",
                "img": "https://zmp3-photo.zadn.vn/thumb/240_240/covers/1/9/19c8d9340b18111044e084d806335fd9_1509176983.jpg",
            },
        ];

        this.state = { songs, text: this.props.navigation.state.params.search, isFocusing: false };
    }

    toPlayer(text, img, composer) {
        const toPlayer = NavigationActions.navigate({
            routeName: "Sub",
            params: { name: text, image: img, composer: composer }
        })
        this.props.navigation.dispatch(toPlayer);
        console.log(JSON.stringify(this.props.navigation));
    }

    toSearch() {
        const toSearch = NavigationActions.navigate({
            routeName: "Search",
        })
        this.props.navigation.dispatch(toSearch);
    }

    _keyExtractor = (item, index) => item.id;

    render() {
        const { goBack } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return (
            <View style={{ backgroundColor: "white", justifyContent: "center", alignItems: "center", marginTop: 0 }}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <View style={{
                    paddingTop: 20, backgroundColor: "#2582BE", width: "100%", alignItems: "center",
                    flexDirection: "row", justifyContent: "space-between", height: 64
                    }}>
                    <TouchableOpacity onPress={() => goBack()} style={{
                        marginLeft: 0, height: 32, width: 48,
                        justifyContent: "center", alignItems: "center"
                    }}>
                        <Icon name="ios-arrow-back" size={24} color="white"
                            style={{ backgroundColor: "transparent" }} />
                    </TouchableOpacity>
                    <Text numberOfLines={1} style={{ fontSize: 20, color: "white", width: 210 }}>{params.name}</Text>

                    <TouchableOpacity onPress={() => this.toSearch()} style={{ height: 32, width: 48, justifyContent: "center", alignItems: "center" }}>
                        <Icon name="ios-search" size={24} color="white"
                            style={{ backgroundColor: "transparent" }} />
                    </TouchableOpacity>
                </View>

                <ScrollView style={{ marginTop: 0, height: 470, width: "100%" }}>

                    <Image
                        style={{ marginTop: 0, height: 150, width: "100%" }}
                        source={{ uri: params.image }}
                    />
                    <Space />
                    <Text style={{ marginLeft: 16, marginTop: 8, marginBottom: 8, fontSize: 16, fontWeight: "bold" }}>Danh sách</Text>
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
