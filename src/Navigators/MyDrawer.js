import React from "react";
import { AppRegistry, Image, StatusBar,style} from "react-native";
import { Container, Content, Text,View, List, ListItem,Icon,Card,CardItem,Header,Right,Thumbnail,Left,note,Footer,border,} from "native-base";


export default class MyDrawer extends React.Component {
  render() {
    return (
 <Container>
    
        <Content>
        <Card    style={styles.card}>
          <CardItem>
          <View>
        <Thumbnail round size={80} source={{ uri:  "https://i1.wallpaperscraft.ru/image/betmen_art_minimalizm_107658_300x240.jpg" }} />
   
    
          <Text style={{ fontWeight: 'bold',fontSize:18 }}> Divya Gupta   <Icon name="ios-arrow-down-outline" style={{ marginRight:10, color: '#3BB9FF' }} /> </Text>
       
            <Text note base> @divu22</Text>

         
          
           </View>
           </CardItem>

               <CardItem>
              
              <View  style={{ flexDirection: 'row' }}>
            <Text  style={{ fontWeight: 'bold' }}> 120 Following</Text> 
      <Text  style={{ fontWeight: 'bold' }}>  200 Followers</Text> 
  </View>
             </CardItem>

             </Card>
             <Card    style={styles.card}>
             <CardItem>
             <Left>
             <Icon name ="ios-person-outline"/>
             <Text> Profile </Text>
             </Left>
             </CardItem>
             <CardItem>
             <Left>
             <Icon name ="ios-list-box-outline"/>
             <Text> Lists </Text>
             </Left>
             </CardItem>
             <CardItem>
             <Left>
             <Icon name ="ios-flash-outline"/>
             <Text> Moments </Text>
             </Left>
             </CardItem>
             <CardItem>
             <Left>
             <Icon name ="ios-photos-outline"/>
             <Text> Highlights </Text>
             </Left>
             </CardItem>
             </Card>
            
             <Card
             style={styles.card}>
             <CardItem>

            
             <Text> Settings and Privacy </Text>
             </CardItem>
             <CardItem>
             
             <Text> Help Centre </Text>
             </CardItem>
           
             </Card>
        </Content>
        <Footer style={{ backgroundColor: 'white' }}>
                  <Left>
                      <Icon style={{ marginLeft: 15, color: '#3BB9FF' }} name='ios-moon-outline' />
                  </Left>
                  <Right>
                      <Icon style={{ marginRight: 15, color: '#3BB9FF' }} name='md-qr-scanner' />
                  </Right>
              </Footer>
      
         
      </Container>
             
    );
  }
}

const styles=
{
    card :
    
          {
             marginTop: 0, borderTopWidth: 0, borderBottomWidth: 0,elevation: 1

         }
    
};