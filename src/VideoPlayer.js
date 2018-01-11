import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Switch, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from "react-navigation";

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');
const WidthItem = 48;

const Space = () => {
    return (
        <View style={{ height: 5, width: "100%", backgroundColor: '#D3D3D3' }}></View>
    )
}
const ItemS = ({ srcImage, User, Comment }) => {
    return (
        <View style={{ height: WidthItem, width: window.width - 32, marginRight: 0, marginBottom: 8, flexDirection: "row" }}>
            <Image
                style={{ height: WidthItem, width: WidthItem, borderRadius: WidthItem / 2 }}
                source={{ uri: srcImage }}
            />
            <View style={{ marginLeft: 8, height: WidthItem, width: window.width - 48 * 2 + 8 }}>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <Text numberOfLines={1} style={{ fontSize: 14 }}>{User}</Text>
                </View>
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
                    <Text numberOfLines={2} style={{ fontSize: 13, color: "#808080" }}>{Comment}</Text>

                </View>
            </View>
        </View>
    )
}
export default class VideoPlayer extends React.Component {
    static navigationOptions = {
        headerBackTitle: null,
        header: null,
        tabBarLabel: 'Cài Đặt',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./img/settings-work-tool-64.png')}
                style={[{ height: 24, width: 24 }, { tintColor: tintColor }]}
            />
        ),
    };

    constructor() {
        super();
        let songs = [
            {
                "id": 0,
                "Comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "User": "Hà Anh Tuấn",
                "img": "https://avatar-nct.nixcdn.com/playlist/2017/08/07/a/1/6/5/1502069723798.jpg",
            },
            {
                "id": 1,
                "Comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "User": "Trúc Nhân",
                "img": "https://avatar-nct.nixcdn.com/playlist/2017/07/21/f/6/f/8/1500613111340.jpg",
            },
            {
                "id": 2,
                "Comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "User": "Đức Phúc",
                "img": "https://avatar-nct.nixcdn.com/playlist/2017/12/09/b/1/3/a/1512815888999.jpg",
            },
            {
                "id": 3,
                "Comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "User": "Hương Tràm",
                "img": "https://avatar-nct.nixcdn.com/playlist/2017/12/01/4/b/f/0/1512120282650.jpg",
            },
            {
                "id": 4,
                "Comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "User": "Thiên Khôi",
                "img": "https://avatar-nct.nixcdn.com/playlist/2017/12/15/9/1/c/5/1513304329127.jpg",
            },
        ];

        this.state = { songs, isFocusing: false };
    }

    _keyExtractor = (item, index) => item.id;

    render() {
        const { goBack } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return (
            <View style={{ paddingTop: 20, backgroundColor: "white", flex: 1 }}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="dark-content"
                />
                <ScrollView style={{ flex: 1 }}>
                    <Image
                        source={{ uri: params.anh }}
                        style={{ height: 180, width: "100%" }}
                    />
                    <Space />
                    <View style={{ height: 50, width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ marginLeft: 16, marginTop: 0, marginBottom: 0, fontSize: 16, fontWeight: "bold" }}>{params.tenTieuDe}</Text>
                            <Text style={{ marginLeft: 16, marginTop: 0, marginBottom: 0, fontSize: 14 }}>{params.tenCaSi}</Text>
                        </View>
                        <View style={{ justifyContent: "center", marginRight: 16 }}>
                            <Icon name="ios-share-alt" size={30} color="skyblue" />
                        </View>
                    </View>
                    <Space />
                    <Text style={{ marginLeft: 16, marginTop: 8, marginBottom: 8, fontSize: 16, fontWeight: "bold" }}>Bình Luận</Text>

                    <FlatList
                        data={this.state.songs}
                        keyExtractor={this._keyExtractor}
                        renderItem={({ item }) => (
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <ItemS
                                    User={item.User} Comment={item.Comment} srcImage={item.img}
                                />
                            </View>
                        )}
                    />
                </ScrollView>
                <TouchableOpacity style={{ position: "absolute", justifyContent: "center", width: 60, paddingLeft: 16, marginTop: 20, backgroundColor: "transparent" }} onPress={() => goBack()}>
                    <View style={{ backgroundColor: "transparent" }}>
                        <Icon name="ios-arrow-back" size={40} color="white" />
                    </View>
                </TouchableOpacity>
            </View >
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
