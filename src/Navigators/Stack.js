
import {Button,Thumbnail} from 'native-base';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import React, {Component} from 'react';

import Main from './Main';
import MyDrawer from'./MyDrawer';

const Stack = StackNavigator({
       Home: {
          screen: Main,
          navigationOptions:({navigation}) =>({
            title:'Home',
                  headerLeft: <DrawerButton navigation={navigation} />,
           
            headerStyle: {
              backgroundColor: '#fff',
              elevation:0,
            },
       }),
    },
  
  });

   const DrawerButton=({navigation})=>(
      <Button transparent
              onPress={() => navigation.navigate("DrawerOpen")}
  >
       <Thumbnail small source={{ uri: "https://i1.wallpaperscraft.ru/image/betmen_art_minimalizm_107658_300x240.jpg"}} style={{marginLeft: 10}} />
      </Button>
  );

   const RootDrawer = DrawerNavigator(
   {
     Home:{
       screen: Stack,
     }
   },
   {
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',

      contentComponent: props => <MyDrawer {...props} />

   }

       );
  export default RootDrawer;

