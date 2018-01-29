
import HomeTab from '../tabs/ht';
import React, {Component} from 'react';
import { Body, Button, Content, Card, CardItem, Container, Fab, Footer, FooterTab, Header, Item, Input, Icon, Left, Right, Text, Tab, Tabs, Title, Thumbnail, TabHeading, ScrollableTab } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, Platform, View, ScrollView } from 'react-native';
import { PropTypes } from 'prop-types';
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';




class HomeScreen extends React.Component{
 render() {
   return (
     <Container>
     <Fab style={{ backgroundColor: '#3BB9FF', marginBottom: 30 }} position='bottomRight'>
                <Icon name='leaf' />
     </Fab>

      <ScrollView>
      <HomeTab/>

      </ScrollView>

     <Footer style={{backgroundColor: 'white', height: 45}}>
                <FooterTab style={{backgroundColor: 'white'}}>
                    <Button>
                        <Text uppercase={false} style={{fontSize: 12, color: '#3BB9FF', fontWeight: 'bold'}}> All</Text>
                    </Button>
                    <Button>
                        <Text  uppercase={false} style={{fontSize: 12, color: '#A9A9A9'}}> Mentions</Text>
                    </Button>
                </FooterTab>
                <Right>
                    <Icon style={{ marginRight: 10, color: '#3BB9FF' }} name='settings' />
                </Right>
              </Footer>
     </Container>
             );
        }
     }
     export default HomeScreen;