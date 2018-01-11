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

const Space = () => {
    return (
        <View style={{ height: 5, width: "100%", backgroundColor: '#D3D3D3' }}></View>
    )
}
const ItemS = ({ srcImage, Songname, Composer, LuotNghe }) => {
    return (
        <View style={{ height: WidthItem, width: window.width - 32, marginTop: 8, marginBottom: 0, flexDirection: "row" }}>
            <Image
                style={{ height: WidthItem, width: WidthItem, borderRadius: WidthItem / 2 }}
                source={{ uri: srcImage }}
            />
            <View style={{ marginLeft: 8, marginBottom: 8, height: WidthItem, width: window.width - 48 * 3 + 8 }}>
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

export default class SearchScreenDetail extends React.Component {
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

    render() {
        const { goBack } = this.props.navigation;
        const { params } = this.props.navigation.state;

        function isHadData(mang) {
            return mang.songName === `${params.search}`;
        }

        function shuffleArray(array) {
            let i = array.length - 1;
            for (; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }

        let duLieu = this.state.songs.find(isHadData);
        let pointofView;
        if (typeof (duLieu) === "object")
            pointofView =
                <View>
                    <TouchableOpacity onPress={() => { this.toPlayer(duLieu.songName, duLieu.img, duLieu.composer) }} >
                        <ItemS
                            LuotNghe={duLieu.luotNghe} Songname={duLieu.songName}
                            Composer={duLieu.composer} srcImage={duLieu.img}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.toPlayer(duLieu.songName, duLieu.img, duLieu.composer) }}>
                        <ItemS
                            LuotNghe={duLieu.luotNghe} Songname={duLieu.songName}
                            Composer={duLieu.composer} srcImage={duLieu.img}
                        />
                    </TouchableOpacity>
                </View>
        else
            pointofView =
                <View style={{ height: 160, width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Icon name="ios-close-circle" size={120} color="red"
                        style={{ backgroundColor: "transparent", marginBottom: 0 }} />
                    <Text style={{ marginTop: 0 }}>Không có dữ liệu </Text>
                </View>


            
        let ketQuaLienQuan = shuffleArray(this.state.songs).map(item => {
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

                <View style={{ paddingTop: 20, backgroundColor: "#2582BE", width: "100%", alignItems: "center", flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => goBack()} style={{ marginLeft: 0, height: 32, width: 48, justifyContent: "center", alignItems: "center" }}>
                        <Icon name="ios-arrow-back" size={24} color="white"
                            style={{ backgroundColor: "transparent" }} />
                    </TouchableOpacity>

                    <View style={{ marginLeft: 0, marginTop: 8, marginBottom: 8, width: window.width - 32, flexDirection: "row", justifyContent: "space-between" }}>
                        <TextInput
                            style={{ paddingLeft: 32, width: window.width - 32 - 32, height: 32, borderRadius: 16, backgroundColor: "skyblue", borderColor: '#c8d9f3', borderWidth: 1 }}
                            onChangeText={(text) => this.setState({ text })}
                            returnKeyType={'search'}
                            clearButtonMode={'while-editing'}
                            enablesReturnKeyAutomatically={true}
                            onSubmitEditing={() => this.toTrangTimKiem()}
                            value={this.state.text}
                            placeholderTextColor="red"
                        />
                        <View style={{ height: 32, width: 32, justifyContent: "center", alignItems: "center", position: "absolute" }}>
                            <Icon name="ios-search" size={24} color="white"
                                style={{ position: "absolute", backgroundColor: "transparent" }} />
                        </View>
                    </View>
                </View>

                <ScrollView style={{ marginTop: 0, height: 460, width: "100%", }}>
                    <Text style={{ marginLeft: 16, marginTop: 8, fontSize: 16, fontWeight: "bold" }}>Đề xuất</Text>

                    <View style={{ marginTop: 0, marginBottom: 8, marginLeft: 16, marginRight: 16, backgroundColor: "white" }}>
                        {pointofView}
                    </View>
                    <Space />
                    <View style={{ marginTop: 8, marginBottom: 0 }}>
                        <Text style={{ marginLeft: 16, marginTop: 0, marginBottom: 8, fontSize: 16, fontWeight: "bold" }}>Kết quả liên quan</Text>
                    </View>

                    <View style={{ marginTop: 0, marginBottom: 0, marginLeft: 16, marginRight: 16, backgroundColor: "white" }}>
                        <View style={{ alignItems: "center", marginLeft: 0 }}>
                            {ketQuaLienQuan}
                        </View>
                    </View>
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
