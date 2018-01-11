import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
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

export default class HomeScreenBXHMVMore extends React.Component {
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


    render() {
        const { goBack } = this.props.navigation;
        return (
            <View >
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <View style={{
                    paddingTop: 20, backgroundColor: "#2582BE", width: "100%", alignItems: "center",
                    flexDirection: "row", height: 64
                }}>
                    <TouchableOpacity onPress={() => goBack()} style={{
                        marginLeft: 0, height: 32, width: 48,
                        justifyContent: "center", alignItems: "center"
                    }}>
                        <Icon name="ios-arrow-back" size={24} color="white"
                            style={{ backgroundColor: "transparent" }} />
                    </TouchableOpacity>
                    <Text numberOfLines={1} style={{ fontSize: 16, fontWeight: "bold", color: "white", width: 210 }}>MV Mới Nhất</Text>
                    <View style={{ flex: 1 }} />
                </View>
                <ScrollView style={{ height: 455, backgroundColor: "white" }}>
                    <View style={{ marginTop: 0, marginBottom: 0, marginLeft: 16, marginRight: 16 }}>

                        {/* <TieuDe iconLeftName="ios-radio" tenTieuDe="MV Mới Nhất" /> */}
                        <View style={{ marginTop: 8, marginBottom: 8, height: 18, flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Image
                                    source={require('../img/MV.png')}
                                    style={{ height: 12, width: 12, tintColor: "#2582BE" }}
                                />
                                <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 8 }}>MV Mới Nhất</Text>
                            </View>
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
                </ScrollView>
            </View >
        );
    }
}