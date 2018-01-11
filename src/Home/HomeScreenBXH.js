import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions, StackNavigator, TabNavigator } from "react-navigation";

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

const WidthItem = 48;

const TieuDe = ({ iconLeftName, tenTieuDe }) => {
    return (
        <View style={{ marginTop: 8, marginBottom: 8, height: 18, flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Icon name={iconLeftName} size={16} color="#2582BE" />
                <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 8 }}>{tenTieuDe}</Text>
            </View>
            <TouchableOpacity onPress={() => this.toAlbumHotMore}>
                <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                    <Text style={{ fontSize: 13, color: "#808080", marginRight: 8 }}>Thêm</Text>
                    <Icon name="ios-arrow-forward" size={15} color="#808080" />
                </View>
            </TouchableOpacity>
        </View>
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
                        <Icon name="ios-headset" size={10} color="#808080" />
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

export default class HomeScreenBXH extends React.Component {

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
        ];

        console.log(JSON.stringify(this.props.navigation));
        this.state = { songs };
    };

    toPlayer(text, img, composer) {
        const toPlayer = NavigationActions.navigate({
            routeName: "Sub",
            params: { name: text, image: img, composer: composer }
        })
        this.props.navigation.dispatch(toPlayer);
        console.log(JSON.stringify(this.props.navigation));
    }
    toHomeScreenBXHMore() {
        const toHomeScreenBXHMore = NavigationActions.navigate({
            routeName: "TrangHomeScreenBXHMore",
        })
        this.props.navigation.dispatch(toHomeScreenBXHMore);
    }
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
            <View style={{ marginTop: 0, marginBottom: 0, marginLeft: 16, marginRight: 16, backgroundColor: "white" }}>
                {/* <TieuDe iconLeftName="md-analytics" tenTieuDe="Bảng Xếp Hạng Bài Hát" /> */}
                <View style={{ marginTop: 8, marginBottom: 8, height: 18, flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Icon name="md-analytics" size={16} color="#2582BE" />
                        <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 8 }}>Bảng Xếp Hạng Bài Hát</Text>
                    </View>
                    <TouchableOpacity onPress={() => {this.toHomeScreenBXHMore()}}>
                        <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                            <Text style={{ fontSize: 13, color: "#808080", marginRight: 8 }}>Thêm</Text>
                            <Icon name="ios-arrow-forward" size={15} color="#808080" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: "center", marginLeft: 0 }}>
                    {test}
                </View>
            </View>
        );
    }
}