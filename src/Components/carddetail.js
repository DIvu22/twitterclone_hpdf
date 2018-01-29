
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Left, Thumbnail, Body, Icon, Button,Content,Container,Header,CardItem,Card } from 'native-base';
import CardInfo from './cardinfo';




const Detail = () => {

return (
     
       <Card style={ styles.card}>
        <CardItem>
          <Left>
            <Thumbnail  source={{ uri: "http://www.sabsetejnews.com/uploadedPhoto/3268.jpg"}}   style={{alignSelf:'flex-start'}} />
            <Body style={{flexDirection:'row'}}>

   <CardInfo
                name="Narendra Modi"
                id="@narendramodi"
                time="1h"
                text="Had a wonderful meeting with Samdech Hun Sen, Prime Minister of Cambodia. We reviewed bilateral relations and discussed new avenues of cooperation." />
            </Body>
          </Left>
        </CardItem>
    

        <View
        style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight:15,
        
        
      }}>
        <CardItem cardBody>
     
            <Image  source={{ uri: "https://pbs.twimg.com/media/DUjTEBbVwAYJyPd.jpg"}}  style={{ borderWidth: 1,borderRadius: 10,height: 150, width: 260, alignSelf: 'center',justifyContent:'center'}}/>
        </CardItem>

      
        <CardItem style={{ justifyContent: 'center',width :270 }}>

              <Button small iconLeft transparent>
                <Icon name="ios-chatbubbles-outline"
                style={styles.iconStyle} />
                <Text style={styles.textStyle }>283</Text>
              </Button>

            <Button small iconLeft transparent>
               <Icon name= "ios-repeat-outline"
               style={styles.iconStyle} />
               <Text style={styles.textStyle }>1M</Text>
             </Button>

              <Button small iconLeft transparent>
                <Icon name="ios-heart-outline" 
                style={styles.iconStyle}/>
                <Text style={styles.textStyle }>5.2M</Text>
              </Button>

              <Button default small transparent>
                <Icon name="ios-mail-outline"
                style={styles.iconStyle} />
             </Button>
          </CardItem>
          </View>
        </Card>
           
       
    );
};



const styles = {
         textStyle: {
           paddingLeft: 5,
           color: '#757575'
         },
         iconStyle :
         {
           color:'#757575'
         },
         card:
         {
             marginTop: 0, borderTopWidth: 0, borderBottomWidth: 0,elevation: 1

         }

    };

    export default  Detail;

