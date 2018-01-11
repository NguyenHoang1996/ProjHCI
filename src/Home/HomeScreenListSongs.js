import React from 'react';
import {
    Dimensions,
    Image,
    ListView,
    PixelRatio,
    StyleSheet,
    Text,
    View, StatusBar, TouchableOpacity, TouchableHighlight, Alert, Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions, StackNavigator, TabNavigator } from "react-navigation";
import ParallaxScrollView from 'react-native-parallax-scroll-view';

const window = Dimensions.get('window');
const WidthScr = window.width;

export default class Parallax extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }).cloneWithRows(
                [
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
                        "luotNghe": "184.7k",
                        "songName": "See Sing & Share",
                        "composer": "Hà Anh Tuấn",
                        "img": "https://avatar-nct.nixcdn.com/playlist/2017/08/07/a/1/6/5/1502069723798.jpg",
                    },
                    {
                        "id": 6,
                        "luotNghe": "166.2k",
                        "songName": "Người Ta Nói",
                        "composer": "Trúc Nhân",
                        "img": "https://avatar-nct.nixcdn.com/playlist/2017/07/21/f/6/f/8/1500613111340.jpg",
                    },
                    {
                        "id": 7,
                        "luotNghe": "144k",
                        "songName": "Năm Ấy (Single)",
                        "composer": "Đức Phúc",
                        "img": "https://avatar-nct.nixcdn.com/playlist/2017/12/09/b/1/3/a/1512815888999.jpg",
                    },
                    {
                        "id": 8,
                        "luotNghe": "68.5k",
                        "songName": "Cánh Hoa Tàn Phai",
                        "composer": "Hương Tràm",
                        "img": "https://avatar-nct.nixcdn.com/playlist/2017/12/01/4/b/f/0/1512120282650.jpg",
                    },
                    {
                        "id": 9,
                        "luotNghe": "21.8k",
                        "songName": "Giáng Sinh Yêu Thương",
                        "composer": "Thiên Khôi",
                        "img": "https://avatar-nct.nixcdn.com/playlist/2017/12/15/9/1/c/5/1513304329127.jpg",
                    },
                ]
                )
        };
    }

    static navigationOptions = {
        headerBackTitle: true,
        header: false,
        tabBarLabel: 'Trang chủ',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../img/home-button-64.png')}
                style={[{ height: 24, width: 24 }, { tintColor: tintColor }]}
            />
        ),
    };

    toPlayer(name, img, composer) {
        const toPlayer = NavigationActions.navigate({
            routeName: "Sub",
            params: { name: name, image: img, composer, composer }
        })
        this.props.navigation.dispatch(toPlayer);
        console.log(JSON.stringify(this.props.navigation));
    }

    toSetting() {
        const toSetting = NavigationActions.navigate({
            routeName: "Setting",
        })
        this.props.navigation.dispatch(toSetting);
    }

    render() {
        const { goBack } = this.props.navigation;
        const { params } = this.props.navigation.state;
        const { onScroll = () => { } } = this.props;
        return (
            <ListView
                ref="ListView"
                style={styles.songsList}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => (
                    <TouchableHighlight
                        onPress={() => { this.toPlayer(rowData.songName, rowData.img, rowData.composer) }}
                        style={[styles.song, { flexDirection: "row" }]}
                        underlayColor="#2582BE" >
                        <View style={{ marginLeft: 8, marginRight: 16, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Image
                                style={{ height: 46, width: 46, marginLeft: 0 }}
                                source={{ uri: rowData.img }}
                            />
                            <View style={{ width: WidthScr - 32 - 46 - 5, flexDirection: "row", justifyContent: "space-between", alignContent: "center" }}>
                                <View style={{ width: WidthScr - 16 - 46 - 16 - 16 - 30 - 8, marginLeft: 8, justifyContent: "center", alignItems: "flex-start" }}>
                                    <Text style={styles.songTitle}>
                                        {rowData.songName}
                                    </Text>
                                    <Text style={{ fontSize: 13, color: "#808080" }}>
                                        {rowData.composer}
                                    </Text>
                                </View>
                                <View style={{ width: 40, marginLeft: 10, justifyContent: "center" }}>
                                    <View style={{ marginRight: 16, width: 30, height: 30, justifyContent: "center", alignItems: "center", borderColor: '#c8d9f3', borderWidth: 1, borderRadius: 15 }}>
                                        <Icon name="ios-more" size={23} color="skyblue" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableHighlight>

                )}

                renderScrollComponent={props => (
                    <ParallaxScrollView
                        onScroll={onScroll}
                        contentBackgroundColor="white"
                        headerBackgroundColor="white"
                        stickyHeaderHeight={50}
                        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
                        backgroundSpeed={10}

                        renderBackground={() => (
                            <View key="background" style={styles.background}>
                                <Image
                                    style={{ width: "100%", height: PARALLAX_HEADER_HEIGHT }}
                                    source={{ uri: params.image }}
                                />
                                <View style={styles.backgroundOverlay} />
                            </View>
                        )}

                        renderForeground={() => (
                            <View key="parallax-header" style={styles.parallaxHeader}>

                                <Image
                                    style={styles.avatar}
                                    source={{ uri: params.image }} />
                                <Text style={styles.artistName}>
                                    {params.name}
                                </Text>
                                <Text numberOfLines={1} style={{ color: "white", fontSize: 14, margin: 8, alignSelf: "center" }}>
                                    {params.composer}
                                </Text>
                                <TouchableOpacity onPress={() => { this.toPlayer(params.name, params.image, params.composer) }}>
                                    <View style={styles.playButton} >
                                        <Text style={styles.playButtonText}>
                                            PLAY
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <StatusBar
                                    backgroundColor="red"
                                    barStyle="light-content"
                                />
                            </View>
                        )}

                        renderStickyHeader={() => (
                            <View key="background" style={{
                                height: STICKY_HEADER_HEIGHT, width: "100%",
                                justifyContent: 'flex-end', backgroundColor:"#2582BE"
                            }}>
                                <Text numberOfLines={1} style={{
                                    color: "white", fontSize: 20,
                                    margin: 25, alignSelf: "center"
                                }}>{params.name}</Text>
                            </View >
                        )}

                        renderFixedHeader={() => (
                            <View>
                                <View key="fixed-header" style={styles.fixedSection}>
                                    <TouchableOpacity onPress={() => goBack()}>
                                        <View style={{ marginLeft: 16, marginTop: 10, width: 50 }}>
                                            <Icon name="ios-arrow-back" size={30} color="white" />
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() =>{this.toSetting()}}>
                                        <View style={{ marginRight: 16, marginTop: 10, width: 50, justifyContent: "flex-end", alignItems: "flex-end" }}>
                                            <Icon name="ios-settings" size={30} color="white" />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )} />
                )}
            />
        );
    }
}

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
    fixedSection: {
        position: 'absolute',
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        bottom: 0,
        right: 0
    },
    fixedSectionText: {
        color: '#999',
        fontSize: 20
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: "100%",
        height: PARALLAX_HEADER_HEIGHT
    },
    backgroundOverlay: {
        position: 'absolute',
        top: 0,
        width: "100%",
        backgroundColor: 'rgba(0,0,0,.7)',
        height: PARALLAX_HEADER_HEIGHT
    },
    headerClose: {
        position: 'absolute',
        top: 5,
        left: 0,
        paddingTop: 15,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
    },
    stickySection: {
        height: STICKY_HEADER_HEIGHT,
        backgroundColor: '#000',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    stickySectionTitle: {
        color: "#FFF",
    },
    parallaxHeader: {
        alignItems: 'center',
        paddingTop: 55,
        width: "100%",
    },
    artistName: {
        fontSize: 20,
        color: "#FFF",
        fontFamily: "Helvetica Neue",
    },
    avatar: {
        marginBottom: 12,
        borderRadius: 150 / 2,
        width: 150,
        height: 150
    },
    playButton: {
        marginTop: 15,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 70,
        paddingRight: 70,
        backgroundColor: "#2582BE",
        borderRadius: 200,
    },
    playButtonText: {
        color: "#FFF",
        fontFamily: "Helvetica Neue",
        fontSize: 14,
    },
    songsList: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 5,
        height: window.height - STICKY_HEADER_HEIGHT,
    },
    song: {
        paddingTop: 4,
        paddingBottom: 4,
        marginTop: 1,
        marginLeft: 16,
        marginRight: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#D3D3D3",
        backgroundColor: "white",
    },
    songTitle: {
        color: "black",
        fontSize: 14,
        fontFamily: "Helvetica Neue",
        marginBottom: 5,
    },
    albumTitle: {
        color: "#BBB",
        fontFamily: "Helvetica Neue",
        fontSize: 13
    },
});