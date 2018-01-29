import React, { Component } from "react";
import { Image,ScrollView,View } from 'react-native';

import { Container, Header, Item, Input, Icon, Fab,Button, Text,Card,Content,CardItem,Left,Right,Thumbnail,Body,cardBody ,ScrollableTab} from 'native-base';
import Expo from "expo";
import Stack from './src/Navigators/Stack';

export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    else{
    
   return (
    <Stack/>
   );
    }
  }
}
