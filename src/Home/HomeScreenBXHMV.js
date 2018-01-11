import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from "react-navigation";

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');
const WidthItem = (window.width - 40) / 2;

const ItemS = ({ srcImage, tenTieuDe, caSi, LuotNghe }) => {
    return (
        <View style={{ marginRight: 8 }}>
            <Image
                style={{ height: 79, width: WidthItem }}
                source={{ uri: srcImage }}
            />
            <View style={{ height: 79, width: WidthItem, position: "absolute", justifyContent: 'center', alignItems: 'center', }}>
                <View style={{ height: 24, width: 24, backgroundColor: "black", justifyContent: 'center', alignItems: 'center', borderRadius: 12, opacity: 0.8 }}>
                    <Image
                        style={{ marginLeft: 2, height: 16, width: 16, tintColor: "white" }}
                        source={require('../img/play.png')}
                    />
                </View>
            </View>

            <View style={{ height: 79, width: WidthItem, position: "absolute", justifyContent: 'flex-start', alignItems: 'flex-start', }}>
                <View style={{ height: 16, width: 64, backgroundColor: "black", flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 12, opacity: 0.8 }}>
                    <Icon name="ios-headset" size={10} color="white" />
                    <Text style={{ fontSize: 12, color: "white" }}> {LuotNghe}</Text>
                </View>
            </View>

            <View style={{ marginLeft: 0, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ marginLeft: 0, marginTop: 5, fontSize: 14 }}>{tenTieuDe}</Text>
                <Text style={{ marginLeft: 0, marginTop: 0, fontSize: 12, color: "#808080" }}>{caSi}</Text>
            </View>
        </View>
    )
}

export default class HomeScreenBXHMV extends React.Component {
    toVideoPlayer(tenTieuDe, tenCaSi, anh) {
        const toVideoPlayer = NavigationActions.navigate({
            routeName: "VideoPlayer",
            params: { tenTieuDe: tenTieuDe, tenCaSi: tenCaSi, anh: anh }
        })
        this.props.navigation.dispatch(toVideoPlayer);
    }
    toHomeScreenBXHMore() {
        const toHomeScreenBXHMore = NavigationActions.navigate({
            routeName: "TrangHomeScreenBXHMore",
        })
        this.props.navigation.dispatch(toHomeScreenBXHMore);
    }

    toTrangHomeScreenBXHMVMore() {
        const toTrangHomeScreenBXHMVMore = NavigationActions.navigate({
            routeName: "TrangHomeScreenBXHMVMore",
        })
        this.props.navigation.dispatch(toTrangHomeScreenBXHMVMore);
    }

    render() {
        return (
            <View style={{ marginTop: 0, marginBottom: 0, marginLeft: 16, marginRight: 16, height: 290 }}>

                {/* <TieuDe iconLeftName="ios-radio" tenTieuDe="MV Mới Nhất" /> */}
                <View style={{ marginTop: 8, marginBottom: 8, height: 18, flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Image
                            source={require('../img/MV.png')}
                            style={{ height: 12, width: 12, tintColor: "#2582BE" }}
                        />
                        <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 8 }}>MV Mới Nhất</Text>
                    </View>
                    <TouchableOpacity onPress={() =>{this.toTrangHomeScreenBXHMVMore()}}>
                        <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                            <Text style={{ fontSize: 12, color: "#808080", marginRight: 8 }}>Thêm</Text>
                            <Icon name="ios-arrow-forward" size={15} color="#808080" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 79 * 1.618, flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => { this.toVideoPlayer("Lạc Giữa Nhân Gian", "Ngô Kiến Huy", "https://zmp3-photo.zadn.vn/thumb/240_135/thumb_video/1/0/108bbcfcb20d17a027d596ef3a959578_1513602300.jpg") }}>
                        <ItemS LuotNghe="123.5k" tenTieuDe="Lạc Giữa Nhân Gian" caSi="Ngô Kiến Huy" srcImage="https://zmp3-photo.zadn.vn/thumb/240_135/thumb_video/1/0/108bbcfcb20d17a027d596ef3a959578_1513602300.jpg" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.toVideoPlayer("Jingle Bell Rock", "Lip B", "https://zmp3-photo.zadn.vn/thumb/240_135/thumb_video/4/c/4c9ee9ee094f3df67297a72e893b3356_1512467740.jpg") }}>
                        <ItemS LuotNghe="83.5k" tenTieuDe="Jingle Bell Rock" caSi="Lip B" srcImage="https://zmp3-photo.zadn.vn/thumb/240_135/thumb_video/4/c/4c9ee9ee094f3df67297a72e893b3356_1512467740.jpg" />
                    </TouchableOpacity>
                </View>

                <View style={{ height: 79 * 1.618, flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => { this.toVideoPlayer("Năm Ấy", "Đức Phúc", "https://avatar-nct.nixcdn.com/mv/2017/12/07/1/3/b/0/1512612576016_536.jpg") }}>
                        <ItemS LuotNghe="79.1k" tenTieuDe="Năm Ấy" caSi="Đức Phúc" srcImage="https://avatar-nct.nixcdn.com/mv/2017/12/07/1/3/b/0/1512612576016_536.jpg" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.toVideoPlayer("Heart Shaker", "TWICE", "https://zmp3-photo.zadn.vn/thumb/240_135/thumb_video/5/d/5d40a29e1ee1c705d69f2af33d8c9944_1512985357.jpg") }}>
                        <ItemS LuotNghe="65.4k" tenTieuDe="Heart Shaker" caSi="TWICE" srcImage="https://zmp3-photo.zadn.vn/thumb/240_135/thumb_video/5/d/5d40a29e1ee1c705d69f2af33d8c9944_1512985357.jpg" />
                    </TouchableOpacity>
                </View>

            </View >
        );
    }
}