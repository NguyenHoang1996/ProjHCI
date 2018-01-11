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

export default class Parallax extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }).cloneWithRows(
                //     [
                //     'Simplicity Matters',
                //     'Hammock Driven Development',
                //     'Value of Values',
                //     'Are We There Yet?',
                //     'The Language of the System',
                //     'Design, Composition, and Performance',
                //     'Clojure core.async',
                //     'The Functional Database',
                //     'Deconstructing the Database',
                //     'Hammock Driven Development',
                //     'Value of Values'
                // ]
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
                ]
                )
        };
    }

    static navigationOptions = {
        headerBackTitle: true,
        header: false,
        tabBarLabel: 'HOME',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./img/home-button-64.png')}
                style={[{ height: 24, width: 24 }, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        const { onScroll = () => { } } = this.props;
        return (

            <ListView
                ref="ListView"
                style={styles.songsList}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => (
                    <TouchableHighlight style={[styles.song, { flexDirection: "row" }]} onPress={() => Alert.alert('You tapped the button!')} underlayColor="rgba(246, 41, 118, 1)"  >
                        <View >
                            <Text style={styles.songTitle}>
                                {rowData.songName}
                            </Text>
                            <Text style={{ color: "black", fontSize: 12 }}>
                                {rowData.composer}
                            </Text>
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
                                    source={require('./img/ss.jpg')} />

                                <View style={styles.backgroundOverlay} />
                            </View>
                        )}

                        renderForeground={() => (
                            <View key="parallax-header" style={styles.parallaxHeader}>

                                <Text numberOfLines={1} style={{
                                    color: "red", fontSize: 20,
                                    margin: 8, alignSelf: "center", width: 120, height:24
                                }}>Rich Hickey Talks</Text>

                                <Image
                                    style={styles.avatar}
                                    source={require('./img/baoanh.jpg')} />
                                <Text style={styles.artistName}>
                                    Hoàng Phú
                                </Text>
                                <TouchableOpacity onPress={() => Alert.alert('You tapped the button!')}>
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
                                justifyContent: 'flex-end', backgroundColor:"blue"
                            }}>
                                <Text style={{
                                    color: "red", fontSize: 20,
                                    margin: 25, alignSelf: "center"
                                }}>Rich Hickey Talks</Text>
                            </View >
                        )}

                        renderFixedHeader={() => (
                            <View>
                                <View key="fixed-header" style={styles.fixedSection}>
                                    <TouchableOpacity>
                                        <View style={{ marginLeft: 16, marginTop: 25, width: 50 }}>
                                            <Icon name="ios-arrow-back" size={32} color="white" />
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={{ marginRight: 16, marginTop: 25, justifyContent: "flex-end", alignItems: "flex-end", width: 50 }}>
                                            <Icon name="ios-settings" size={32} color="white" />
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
        marginTop: 10,
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
        fontSize: 23,
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
        backgroundColor: "#f62976",
        borderRadius: 200,
    },
    playButtonText: {
        color: "#FFF",
        fontFamily: "Helvetica Neue",
        fontSize: 13,
    },
    songsList: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 5,
        height: window.height - STICKY_HEADER_HEIGHT,
    },
    song: {
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 1,
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth: 2,
        borderBottomColor: "white",
        backgroundColor: "white",
    },
    songTitle: {
        color: "black",
        fontSize: 15,
        fontFamily: "Helvetica Neue",
        marginBottom: 5,
    },
    albumTitle: {
        color: "#BBB",
        fontFamily: "Helvetica Neue",
        fontSize: 12
    },
});