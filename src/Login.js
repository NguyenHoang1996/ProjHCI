import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from "react-navigation";

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');
const WidthItem = window.width - 32;

export default class SettingScreen extends React.Component {
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

  constructor(props) {
    super(props);
    let dataUser =
      {
        UserName: "",
        Password: ""
      };
    this.state = {
      dataUser, text: 'Useless Placeholder'
    };
  };

  render() {
    const { goBack } = this.props.navigation;
    return (
      <View >
        <KeyboardAvoidingView behavior="position">
          <View style={{
            paddingTop: 20, backgroundColor: "#2582BE", width: "100%", alignItems: "center",
            flexDirection: "row", justifyContent: "space-between", height: 64
          }}>
            <TouchableOpacity onPress={() => goBack()} style={{
              marginLeft: 0, height: 32, width: 48,
              justifyContent: "center", alignItems: "center"
            }}>
              <Icon name="ios-arrow-back" size={24} color="white"
                style={{ backgroundColor: "transparent" }} />
            </TouchableOpacity>
            <View>
              <Text numberOfLines={1} style={{ fontSize: 20, color: "white" }}>Đăng Nhập</Text>
            </View>
            {/* Sử dụng lại y chang bề ngang của icon */}
            <View style={{ width: 48 }}></View>
          </View>

          <View style={{ height: 300, width: "100%", justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ height: 240, width: 240, tintColor: "skyblue" }}
              source={{ uri: "https://i.pinimg.com/originals/83/cc/c3/83ccc37e2c674bbbc1bfeee338ec572c.png" }}
            />
          </View>


          <View style={{ width: WidthItem, marginLeft: 16 }}>
            <Text style={{ fontSize: 16, color: "#2582BE" }}>Tên Đăng Nhập</Text>
            <TextInput
              style={{ height: 40, marginBottom: 8, borderBottomWidth: 1, borderColor: "skyblue" }}
              onChangeText={(text) => this.setState({
                dataUser: {
                  ...this.state.dataUser,
                  UserName: text
                }
              })}
              value={this.state.dataUser.UserName}
            />
            <Text style={{ fontSize: 16, color: "#2582BE" }}>Mật khẩu</Text>
            <TextInput
              style={{ height: 40, marginBottom: 8, borderBottomWidth: 1, borderColor: "skyblue" }}
              onChangeText={(text) => this.setState({
                dataUser: {
                  ...this.state.dataUser,
                  Password: text
                }
              })}
              value={this.state.dataUser.Password}
            />
          </View>

          <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => goBack()}
              // onPress={() => this.toMainAppScreen(this.state.dataUser.UserName, null)}
              style={{
                height: 38, width: 200, justifyContent: "center", alignItems: "center"
              }}>
              <View style={{ backgroundColor: "#2582BE", height: 30, width: 200, borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "white" }}>ĐĂNG NHẬP</Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
