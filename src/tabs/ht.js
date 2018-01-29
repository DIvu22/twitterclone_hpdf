import React from 'react';
import { Container,Content } from 'native-base';
import { View, Text,ScrollView } from 'react-native';
import  Detail from '../Components/carddetail';

const HomeTab = () => {
  return (

   <Content>
   <ScrollView>
      <Detail />
      <Detail />
      <Detail />
     
      </ScrollView>
      
    </Content>

  );
};

export default HomeTab;