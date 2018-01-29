import React from 'react';
import { Container ,Header,Icon,Button,Body,Right,Content,Left,Item,Input} from 'native-base';
import { View, Text } from 'react-native';

const button = ({navigation}) => {
  return (

      <Container>
         <Header style={{backgroundColor:'white'}}>
          <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{color: '#3BB9FF'}} />
            </Button>
          </Left>
          <Body>
          <Item style={{width: 200}}>
          <Input placeholder="Search Twitter" />
        </Item>
          </Body>
          <Right />
        </Header>
        <Content padder>
         
        </Content>
       
      </Container>

  );
};

export default button;