import React from 'react';
import {
    StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, FlatList, StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from "react-navigation";


const FONT_SIZE_SO_THU_TU = 16;
const Dimensions = require('Dimensions');
const window = Dimensions.get('window');
const WidthItem = (window.width - 48) / 3;

const ItemS = ({ srcImage, Songname, Composer, LuotNghe, id }) => {
    let playButton;
    if (id == 2)
        playButton = <View style={{ height: WidthItem - 4, width: WidthItem - 8, position: "absolute", justifyContent: 'flex-end', alignItems: 'flex-end', }}>
            <View style={{ height: 20, width: 20, backgroundColor: "black", justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: "white", opacity: 0.8 }}>
                <Icon name="ios-play" size={10} color="white" />
            </View>
        </View>
    else
        playButton = <View style={{ height: WidthItem - 4, width: WidthItem - 4, position: "absolute", justifyContent: 'flex-end', alignItems: 'flex-end', }}>
            <View style={{ height: 20, width: 20, backgroundColor: "black", justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: "white", opacity: 0.8 }}>
                <Icon name="ios-play" size={10} color="white" />
            </View>
        </View>
    return (
        <View style={{ height: WidthItem * 1.618, width: WidthItem, marginLeft: 4, marginRight: 4, marginBottom: 8 }}>
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

            {playButton}

            <View style={{ height: WidthItem / 2.618, justifyContent: 'center' }}>
                <Text numberOfLines={2} style={{ fontSize: 14, }}>{Songname}</Text>
            </View>
            <View style={{ height: WidthItem / 1.618 - WidthItem / 2.618, justifyContent: 'center' }}>
                <Text numberOfLines={1} style={{ fontSize: 12, color: "#808080" }}>{Composer}</Text>
            </View>
        </View>
    )
}

export default class AlbumHotMore extends React.Component {
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
        let songs1 = [
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
        let songs2 = [
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
        let songs3 = [
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

        console.log(JSON.stringify(this.props.navigation));
        this.state = { songs, songs1, songs2, songs3, isFocusing: false };
    }

    toPlayer(text, img, composer) {
        const toPlayer = NavigationActions.navigate({
            routeName: "Sub",
            params: { name: text, image: img, composer: composer }
        })
        this.props.navigation.dispatch(toPlayer);
        console.log(JSON.stringify(this.props.navigation));
    }
    toAlbums(name, img, composer) {
        const toAlbums = NavigationActions.navigate({
            routeName: "TrangNhac",
            params: { name: name, image: img, composer: composer }
        })
        this.props.navigation.dispatch(toAlbums);
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
        let test = this.state.songs1.map(item => {
            return (
                <TouchableOpacity key={item.id} onPress={() => { this.toAlbums(item.songName, item.img, item.composer) }}>
                    <ItemS
                        LuotNghe={item.luotNghe} Songname={item.songName}
                        Composer={item.composer} srcImage={item.img} id={item.id}
                    />
                </TouchableOpacity>
            )
        })
        let test1 = this.state.songs2.map(item => {
            return (
                <TouchableOpacity key={item.id} onPress={() => { this.toAlbums(item.songName, item.img, item.composer) }}>
                    <ItemS
                        LuotNghe={item.luotNghe} Songname={item.songName}
                        Composer={item.composer} srcImage={item.img} id={item.id}
                    />
                </TouchableOpacity>
            )
        })
        return (
            <View style={{ backgroundColor: "white", marginTop: 0 }}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <View style={{
                    paddingTop: 20, backgroundColor: "#2582BE", height: 64, width: "100%", alignItems: "center",
                    flexDirection: "row", justifyContent: "space-between"
                }}>
                    <TouchableOpacity onPress={() => goBack()} style={{
                        marginLeft: 0, height: 32, width: 48,
                        justifyContent: "center", alignItems: "center"
                    }}>
                        <Icon name="ios-arrow-back" size={24} color="white"
                            style={{ backgroundColor: "transparent" }} />
                    </TouchableOpacity>
                    <Text numberOfLines={1} style={{ fontSize: 16, fontWeight: "bold", color: "white", width: 210 }}>Album Hot</Text>

                    <TouchableOpacity onPress={() => this.toSearch()} style={{ height: 32, width: 48, justifyContent: "center", alignItems: "center" }}>
                        <Icon name="ios-search" size={24} color="white"
                            style={{ backgroundColor: "transparent" }} />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 5, width: "100%", backgroundColor: '#D3D3D3' }}></View>
                <View style={{ marginLeft: 20, marginTop: 8, marginBottom: 8, marginRight: 16, flexDirection: "row", justifyContent: "space-between" }}>
                    <Text numberOfLines={1} style={{ fontSize: 16, fontWeight: "bold", color: "black", width: 210 }}>Mới và HOT</Text>
                    {/* <Text>Mới và HOT</Text> */}
                </View>
                <View style={{ marginTop: 0, marginBottom: 0, marginLeft: 16, marginRight: 16, height: 424, backgroundColor: "white" }}>
                    <ScrollView style={{ marginTop: 0, height: 120, width: "100%" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 0 }}>
                            {test}
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 0 }}>
                            {test1}
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 0 }}>
                            {test}
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 0 }}>
                            {test1}
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 0 }}>
                            {test}
                        </View>
                    </ScrollView>
                </View>
                <View style={{ height: 5, width: "100%", backgroundColor: '#D3D3D3' }}></View>
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

{/* <View style={{ marginTop: 8, marginBottom: 8, height: 18, flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Icon name="ios-radio" size={16} color="#2582BE" />
                            <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 8 }}>Album Hot</Text>
                        </View>

                        <TouchableOpacity onPress={() => { this.toAlbumHotMore() }}>
                            <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                                <Text style={{ fontSize: 12, color: "#808080", marginRight: 8 }}>Thêm</Text>
                                <Icon name="ios-arrow-forward" size={15} color="#808080" />
                            </View>
                        </TouchableOpacity>
                    </View> */}