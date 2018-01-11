import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { NavigationActions } from "react-navigation";

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');
const WidthItem = (window.width - 48) / 3;

const TieuDe = ({ iconLeftName, tenTieuDe }) => {
    return (
        <View style={{ marginTop: 8, marginBottom: 8, height: 18, flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Icon name={iconLeftName} size={16} color="#2582BE" />
                <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 8 }}>{tenTieuDe}</Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontSize: 12, color: "#808080", marginRight: 8 }}>Thêm</Text>
                <Icon name="ios-arrow-forward" size={15} color="#808080" />
            </View>
        </View>
    )
}

const ItemS = ({ srcImage, Songname, Composer, LuotNghe }) => {
    return (
        <View style={{ height: WidthItem * 1.618, width: WidthItem, marginRight: 8, marginBottom: 8 }}>
            <Image
                style={{ height: WidthItem, width: WidthItem }}
                source={{ uri: srcImage }}
            />

            <View style={{ height: WidthItem, width: WidthItem, position: "absolute", justifyContent: 'flex-start', alignItems: 'flex-start', }}>
                <View style={{ height: 16, width: 64, backgroundColor: "black", flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 12, opacity: 0.8 }}>
                    <Icon name="ios-headset" size={10} color="white" />
                    <Text style={{ fontSize: 12, color: "white" }}> {LuotNghe}</Text>
                </View>
            </View>

            <View style={{ height: WidthItem - 4, width: WidthItem - 4, position: "absolute", justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                <View style={{ height: 20, width: 20, backgroundColor: "black", justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: "white", opacity: 0.8 }}>
                    <Icon name="ios-play" size={10} color="white" />
                </View>
            </View>
            <View style={{ height: WidthItem / 2.618, justifyContent: 'center' }}>
                <Text numberOfLines={2} style={{ fontSize: 14, }}>{Songname}</Text>
            </View>
            <View style={{ height: WidthItem / 1.618 - WidthItem / 2.618, justifyContent: 'center' }}>
                <Text numberOfLines={1} style={{ fontSize: 12, color: "#808080" }}>{Composer}</Text>
            </View>
        </View>
    )
}

export default class AlbumHot extends React.Component {
    constructor(props) {
        super(props);
        let songs = [
            {
                "id": 0,
                "luotNghe": "144k",
                "songName": "Năm Ấy (Single)",
                "composer": "Đức Phúc",
                "img": "https://avatar-nct.nixcdn.com/playlist/2017/12/09/b/1/3/a/1512815888999.jpg",
            },
            {
                "id": 1,
                "luotNghe": "21.8k",
                "songName": "Giáng Sinh Yêu Thương",
                "composer": "Thiên Khôi",
                "img": "https://avatar-nct.nixcdn.com/playlist/2017/12/15/9/1/c/5/1513304329127.jpg",
            },
            {
                "id": 2,
                "luotNghe": "68.5k",
                "songName": "Cánh Hoa Tàn Phai",
                "composer": "Hương Tràm",
                "img": "https://avatar-nct.nixcdn.com/playlist/2017/12/01/4/b/f/0/1512120282650.jpg",
            },
        ];
        let songs1 = [
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
                "luotNghe": "24.3k",
                "songName": "Khi Con Là Nhà",
                "composer": "Khắc Việt",
                "img": "https://avatar-nct.nixcdn.com/playlist/2017/12/12/b/7/b/6/1513050745467.jpg",
            },
        ];
        console.log(JSON.stringify(this.props.navigation));
        this.state = { songs, songs1 };
    };

    toAlbums(name, img, composer) {
        const toAlbums = NavigationActions.navigate({
            routeName: "TrangNhac",
            params: { name: name, image: img, composer: composer }
        })
        this.props.navigation.dispatch(toAlbums);
    }

    toAlbumHotMore() {
        const toAlbumHotMore = NavigationActions.navigate({
            routeName: "TrangAlbumsHotMore",
        })
        this.props.navigation.dispatch(toAlbumHotMore);
    }

    render() {
        let test = this.state.songs.map(item => {
            return (
                <TouchableOpacity key={item.id} onPress={() => { this.toAlbums(item.songName, item.img, item.composer) }}>
                    <ItemS
                        LuotNghe={item.luotNghe} Songname={item.songName}
                        Composer={item.composer} srcImage={item.img}
                    />
                </TouchableOpacity>
            )
        })
        let test1 = this.state.songs1.map(item => {
            return (
                <TouchableOpacity key={item.id} onPress={() => { this.toAlbums(item.songName, item.img, item.composer) }}>
                    <ItemS
                        LuotNghe={item.luotNghe} Songname={item.songName}
                        Composer={item.composer} srcImage={item.img}
                    />
                </TouchableOpacity>
            )
        })

        return (
            <View style={{ marginTop: 0, marginBottom: 0, marginLeft: 16, marginRight: 16, height: 34 + 2 * WidthItem * 1.618 + 16, backgroundColor: "white" }}>
                {/* <TieuDe iconLeftName="ios-radio" tenTieuDe="Album Hot" /> */}

                <View style={{ marginTop: 8, marginBottom: 8, height: 18, flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Icon name="ios-radio" size={16} color="#2582BE" />
                        <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 8 }}>Album Hot</Text>
                    </View>

                    <TouchableOpacity  onPress={() => {this.toAlbumHotMore()}}>
                     {/* onPress={() => { this.toAlbums("a",  "https://avatar-nct.nixcdn.com/playlist/2017/12/09/b/1/3/a/1512815888999.jpg", "item.composer") }}> */}
                        <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                            <Text style={{ fontSize: 12, color: "#808080", marginRight: 8 }}>Thêm</Text>
                            <Icon name="ios-arrow-forward" size={15} color="#808080" />
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 0 }}>
                    {test}
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 0 }}>
                    {test1}
                </View>
            </View>
        );
    }
}