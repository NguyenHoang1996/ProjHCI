import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions, StackNavigator, TabNavigator } from "react-navigation";

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

            {/* <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontSize: 12, color: "#808080", marginRight: 8 }}>Thêm</Text>
                <Icon name="ios-arrow-forward" size={15} color="#808080" />
            </View> */}
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
                <View style={{ height: 16, width: 52, backgroundColor: "black", flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 12, opacity: 0.8 }}>
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

export default class NgheGiHomNay extends React.Component {

    constructor(props) {
        super(props);
        let songs = [
            {
                "id": 0,
                "luotNghe": "16.8k",
                "songName": "Christmas Pop and Happy new year",
                "composer": "Various Artist",
                "img": "https://avatar-nct.nixcdn.com/playlist/2017/12/04/f/7/1/7/1512352081778.jpg",
            },
            {
                "id": 1,
                "luotNghe": "24.3k",
                "songName": "Những Mùa Đông Còn Ấm",
                "composer": "Various Artist",
                "img": "https://avatar-nct.nixcdn.com/playlist/2017/07/19/b/c/e/b/1500428418095.jpg",
            },
            {
                "id": 2,
                "luotNghe": "32k",
                "songName": "It's Christmas Time",
                "composer": "Various Artist",
                "img": "https://zmp3-photo.zadn.vn/thumb/240_240/covers/3/4/3491307ff4533f02f01e585cba30b3d7_1482546138.jpg",
            },
        ];

        console.log(JSON.stringify(this.props.navigation));
        this.state = { songs };
    };

    toAlbums(text, img) {
        const toAlbums = NavigationActions.navigate({
            routeName: "TrangAlbums",
            params: { name: text, image: img }
        })
        this.props.navigation.dispatch(toAlbums);
        console.log(JSON.stringify(this.props.navigation));
    }

    render() {
        let test = this.state.songs.map(item => {
            return (
                <TouchableOpacity key={item.id} onPress={() => { this.toAlbums(item.songName, item.img) }}>
                    <ItemS
                        LuotNghe={item.luotNghe} Songname={item.songName}
                        Composer={item.composer} srcImage={item.img}
                    />
                </TouchableOpacity>
            )
        })

        return (
            <View style={{ marginTop: 0, marginBottom: 0, marginLeft: 16, marginRight: 16, height: 34 + WidthItem * 1.618 + 8, backgroundColor: "white" }}>
                <TieuDe iconLeftName="ios-radio" tenTieuDe="Nghe Gì Hôm Nay" />

                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 0 }}>
                    {test}
                </View>
            </View>
        );
    }
}