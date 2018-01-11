import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Animated, Easing, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from 'react-native-slider';
import Modal from 'react-native-modal';
import { NavigationActions, StackNavigator, TabNavigator } from "react-navigation";

export default class Player extends React.Component {
  static navigationOptions = {
    headerBackTitle: true,
    header: null,
    tabBarVisible: true,
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./img/home-button-64.png')}
        style={[{ height: 24, width: 24 }, { tintColor: tintColor }]}
      />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      like: true,
      link: true,
      down: true,
      flag: true,
      more: true,
      playing: true,
      visibleModal: null,
    };
  }

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <View style={{ width: "100%", height: 32, flexDirection: "row", marginTop: 16 }}>
        <View style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }}>
          <Icon style={{ flex: 1, marginTop: 2 }} name="ios-link" size={32} color="black" />
        </View>
        <View style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }}>
          <Icon style={{ flex: 1, marginTop: 2 }} name="ios-link" size={32} color="black" />
        </View>
        <View style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }}>
          <Icon style={{ flex: 1, marginTop: 2 }} name="md-cloud-download" size={32} color="black" />
        </View>

        <View style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }}>
          <Icon style={{ flex: 1, marginTop: 2 }} name="ios-flag" size={32} color="black" />
        </View>
        <View style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }}>
          <Icon style={{ flex: 1, marginTop: 2 }} name="ios-stopwatch" size={32} color="black" />
        </View>
      </View>

      <View style={{ margin: 24 }}>
        <Slider
          minimumTrackTintColor='#851c44'
          style={styles.slider}
          trackStyle={styles.sliderTrack}
          thumbStyle={styles.sliderThumb}
        />
      </View>
      <View style={{ marginTop: 16 }}>
        {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
      </View>
    </View>
  );

  toggleLike() {
    this.setState({ like: !this.state.like });
    console.log("running toggleLike() ");
  }

  toggleLink() {
    this.setState({ link: !this.state.link });
    console.log("running toggleLink() ");
  }

  togglePlay() {
    this.setState({ playing: !this.state.playing });
    console.log("running togglePlay() ");
  }

  render() {
    const { goBack } = this.props.navigation;
    const { params } = this.props.navigation.state;
    let likeButton;
    if (this.state.like) {
      likeButton = <Icon onPress={this.toggleLike.bind(this)} style={{ flex: 1, marginTop: 2 }} name="md-heart" size={32} color="white" />
    } else {
      likeButton = <Icon onPress={this.toggleLike.bind(this)} style={{ flex: 1, marginTop: 2 }} name="md-heart" size={32} color="red" />
    }

    let linkButton;
    if (this.state.link) {
      linkButton = <Icon onPress={this.toggleLink.bind(this)} style={{ flex: 1, marginTop: 2 }} name="ios-link" size={32} color="white" />
    } else {
      linkButton = <Icon onPress={this.toggleLink.bind(this)} style={{ flex: 1, marginTop: 2 }} name="ios-link" size={32} color="red" />
    }

    let playButton;
    if (this.state.playing) {
      playButton = <Icon onPress={this.togglePlay.bind(this)} style={[styles.play, { backgroundColor: "transparent" }]} name="ios-pause" size={70} color="#fff" />
    } else {
      playButton = <Icon onPress={this.togglePlay.bind(this)} style={[styles.play, { backgroundColor: "transparent" }]} name="ios-play" size={70} color="#fff" />
    }

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <Image
          source={require('./img/02.jpg')}
          style={{
            height: "100%",
          }}
        />
        {/* <View style={{ position: 'absolute', height: 64, width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }}>
          <Text style={{ color: "#FFF", fontSize: 20, marginTop: 20 }}>
            {params.name}
          </Text>
        </View> */}
        <View style={{ position: 'absolute', left: 0, paddingTop: 20, paddingBottom: 0, paddingLeft: 16, paddingRight: 20, backgroundColor: "transparent" }}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icon name="ios-arrow-down" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={{ position: 'absolute', marginTop: 60, marginBottom: 10, width: "100%", height: 240, alignItems: "center", justifyContent: "center" }}>
          <Image
            style={{ width: 240, height: 240, borderRadius: 120, alignItems: "center", justifyContent: "center" }}
            source={{ uri: params.image }}
          />

        </View>
        <View style={{ position: 'absolute', backgroundColor: "transparent", marginTop: 320, width: "100%", height: 60, alignItems: "center", justifyContent: "center", }}>
          <Text style={{ color: "white", fontFamily: "Helvetica Neue", marginBottom: 5, marginTop: 0, fontSize: 20 }}>
            {params.name}
          </Text>
          <Text style={{ color: "#BBB", fontFamily: "Helvetica Neue", fontSize: 14, }}>
            {params.composer}
          </Text>
        </View>


        <View style={{ position: 'absolute', width: "100%", height: 32, flexDirection: "row", marginTop: 390 }}>
          <View style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }}>
            {likeButton}
          </View>
          <View style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }}>
            {/* <Icon style={{ flex: 1, marginTop: 2 }} name="ios-link" size={32} color="white" /> */}
            {linkButton}
          </View>
          <View style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }}>
            <Icon style={{ flex: 1, marginTop: 2 }} name="md-cloud-download" size={32} color="white" />
          </View>

          <View style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }}>
            <Icon style={{ flex: 1, marginTop: 2 }} name="ios-flag" size={32} color="white" />
          </View>
          <View style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }}>
            <Icon onPress={() => this.setState({ visibleModal: 5 })} style={{ flex: 1, marginTop: 2 }} name="ios-menu" size={32} color="white" />
          </View>

          <Modal isVisible={this.state.visibleModal === 5} style={styles.bottomModal}>
            {this._renderModalContent()}
          </Modal>
          {/* <Icon style={{flex:1,position:"absolute",backgroundColor:"yellow" } } name="ios-skip-backward" size={25} color="#fff" />
            <Icon style={{flex:1,position:"absolute",backgroundColor:"black" } } name="ios-play" size={25} color="#fff" /> */}
        </View>

        <View style={[styles.sliderContainer, { marginLeft: 16, marginTop: 440, position: 'absolute', alignContent: "center", justifyContent: 'center' }]}>
          <Slider
            minimumTrackTintColor='#851c44'
            style={styles.slider}
            trackStyle={styles.sliderTrack}
            thumbStyle={styles.sliderThumb}
          />

          <View style={styles.timeInfo}>
            <Text style={[styles.time, { backgroundColor: "transparent" }]}> 00:00</Text>
            <Text style={[styles.timeRight, { backgroundColor: "transparent" }]}>3:24</Text>
          </View>
        </View>
        <View style={[styles.controls, { marginLeft: 30, marginTop: 480, position: 'absolute' }]}>
          <Icon style={[{ marginTop: 22, marginLeft: 0, marginRight: 40, backgroundColor: "transparent" }]} name="ios-notifications-off-outline" size={25} color="#fff" />
          <Icon style={[styles.back, { backgroundColor: "transparent" }]} name="ios-skip-backward" size={25} color="#fff" />
          {/* <Icon style={ [styles.play, {backgroundColor:"transparent"}]} name="ios-play" size={70} color="#fff" /> */}
          {playButton}
          <Icon style={[styles.forward, { marginRight: 40, backgroundColor: "transparent" }]} name="ios-skip-forward" size={25} color="#fff" />
          <Icon style={[{ marginTop: 22, backgroundColor: "transparent" }]} name="ios-repeat" size={25} color="#fff" />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  slider: {
    height: 20,
  },
  sliderTrack: {
    height: 3,
    backgroundColor: '#333',
  },
  sliderThumb: {
    width: 13,
    height: 13,
    backgroundColor: '#f62976',
    borderRadius: 13 / 2,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  modalContent: {
    backgroundColor: 'white',
    // padding: 22,
    // justifyContent: 'center',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    height: 190,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  ////////////////////////////////
  container: {
    backgroundColor: 'white',
  },
  header: {
    marginTop: 23,
    marginBottom: 17,
    width: window.width,
  },
  headerClose: {
    position: 'absolute',
    // top: 10,
    left: 0,
    paddingTop: 23,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: 'center',
  },
  songImage: {
    marginBottom: 0,
    width: 240, height: 240,
    borderRadius: 120
  },
  songTitle: {
    color: "white",
    fontFamily: "Helvetica Neue",
    marginBottom: 5,
    marginTop: 13,
    fontSize: 19
  },
  albumTitle: {
    color: "#BBB",
    fontFamily: "Helvetica Neue",
    fontSize: 14,
    marginBottom: 10,
  },
  controls: {
    flexDirection: 'row',
    marginTop: 30,
  },
  back: {
    marginTop: 22,
  },
  play: {
    marginLeft: 40,
    marginRight: 40,
  },
  forward: {
    marginTop: 22,
  },
  shuffle: {
    marginTop: 26,
  },
  volume: {
    marginTop: 26,
  },
  sliderContainer: {
    width: 290,
  },
  timeInfo: {
    flexDirection: 'row',
  },
  time: {
    color: '#FFF',
    flex: 1,
    fontSize: 12,
  },
  timeRight: {
    color: '#FFF',
    textAlign: 'right',
    flex: 1,
    fontSize: 12,
  },
  slider: {
    height: 20,
  },
  sliderTrack: {
    height: 3,
    backgroundColor: '#333',
  },
  sliderThumb: {
    width: 13,
    height: 13,
    backgroundColor: '#f62976',
    borderRadius: 13 / 2,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    shadowOpacity: 1,
  }
});

