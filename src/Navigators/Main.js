import React, {Component} from 'react';
import { Body, Button, Content, Card, CardItem, Container, Fab, Footer, FooterTab, Header, Item, Input, Icon, Left, Right, Text, Tab, Tabs, Title, Thumbnail, TabHeading, ScrollableTab } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, Platform, View, ScrollView } from 'react-native';
import { PropTypes } from 'prop-types';

import NotificationsTab from '../tabs/nt';
import MessagesTab from '../tabs/mt';
import HomeScreen from '../Components/HomeScreen';
import button from'../Components/button';
import SearchTab from '../tabs/st';
import Stack from '../Navigators/Stack';

import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';

const Main = TabNavigator(

  
  {
    Home
    : { screen: HomeScreen
    ,
      navigationOptions:{
      tabBarIcon:({tintColor}) => (
        <Icon name='home' style={styles.navStyle}/>
     ),
   }
     },
    Search:
     { screen: SearchTab,
                navigationOptions: {
                 headerTitle:
               
                <View >
                 <Button rounded  light
                  onPress={() => this.props.navigation.navigate('Button1')}
                 style={{ width:240,height:30}}   >
            <Text note uppercase={false} >Search Twitter</Text>
         </Button>
       
         </View>
         ,
       
 
    tabBarIcon:({tintColor}) => (
                   <Icon name='search' style={styles.navStyle}/>

              ),
            },
     },
    Notifications: { screen: NotificationsTab,
      navigationOptions : {
          headerTitle: 'Notifications',
          tabBarIcon:({tintColor}) => (
              <Icon name='notifications' style={styles.navStyle} />
       ),
     },
     },
    Messages:{screen:MessagesTab,
      navigationOptions : {
          headerTitle: 'Messages',
          tabBarIcon:({tintColor}) => (
            <Icon name='mail' style={styles.navStyle}/>

       ),
     },
    }
  },
  {

   animationEnabled: true,
   tabBarOptions: {
    activeTintColor: '#3BB9FF',
		inactiveTintColor: '#A9A9A9',
      activeBackgroundColor:'#fff',
      inactiveBackgroundColor: '#fff',
    
      showIcon: true,
      showLabel:false,
      style: { backgroundColor: '#fff'},
    },
  }
);

const App=StackNavigator({
  Button1:
  {
    screen:button
  },
});

 

 const styles = StyleSheet.create({
      icon: {
          width: 25,
          height: 25,
      },

      navStyle: {
          color: '#3BB9FF'
         

      }
   });

export default Main;