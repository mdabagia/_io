import React, { Component, PropTypes } from 'react';
import ReactNative, {StyleSheet, Text, View, Image, ScrollView, Dimensions, StatusBar,  AsyncStorage, TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import Button from 'react-native-button';
import * as firebase from "firebase";
import { Card, CardImage, CardTitle,CardContent, CardAction} from 'react-native-card-view';
import Carousel from 'react-native-looped-carousel';

var heightScreen=Dimensions.get('window').height;
var widthScreen=Dimensions.get('window').width;
var GLOBAL = require('./helper/Globals.js');
var arrOfMessages = [];
var range = 0;
var impressionArr = [];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {allMessages:[], allObjects:[], size: { width:cardWidth, height:cardHeight*(1.3/GLOBAL.HEIGHT)*heightScreen,  },randomer:2, isBottle:true};
    this.outputs ={title: 'Hello', text:'What is up my guy'}

    //this.arrOfMessages = [];
    //this.getData = this.getData.bind(this);
    this.onPressBottle = this.onPressBottle.bind(this);
    this.switchMessage = this.switchMessage.bind(this);

  }

  componentWillReceiveProps(){

  }

  componentWillMount(){

  }

 async getData() {

    var limit = 0;
    var returnArr = [];
    var post;


//startAt(GLOBAL.numMessages - range - 10).endAt(GLOBAL.numMessages - range)
    console.log(GLOBAL.numMessages);
    await firebase.database().ref('messages').orderByChild('Claps').on('value', function(snapshot) {
      arrOfMessages = snapshotToArray(snapshot);
      for (i = 0; i < arrOfMessages.length; i++) {
          //console.log(arrOfMessages);
          var randomNum = Math.round((Math.random() * (9))) + 1;
          //last two will be never be touched due to array rewrite
        //   if (randomNum == this.arrOfMessages.length - 1) {
        //     getData(25);
        //   }
          if (randomNum <= 1) {
            post = arrOfMessages[i];
            returnArr = arrOfMessages;
            return;
          }
      }

    });


      function snapshotToArray(snapshot) {
          var returnArr = [];

          snapshot.forEach(function(childSnapshot) {
          var item = childSnapshot.val();
          item.key = childSnapshot.key;

          returnArr.push(item);
        });

        return returnArr;
    };
  }

  render () {
        var theView = [];

        if (this.state.isBottle && this.state.allMessages.length == 0){
            //console.warn("loading botle")
            theView.push(
                <TouchableWithoutFeedback onPress={() => this.onPressBottle()} key={Math.random()}>
                    <Image key={Math.random()} source={require('../assets/images/bottle.png')} style={{width: (100/GLOBAL.WIDTH)*widthScreen, height: (100/GLOBAL.HEIGHT)*heightScreen, marginTop: heightScreen/2 - (100/GLOBAL.HEIGHT)*heightScreen}}/>
                </TouchableWithoutFeedback>
            )
        }else {
                //this.state.allObjects = this.state.allMessages[0][0]
                this.outputs.title = this.state.allMessages[0]['Title'];
                this.outputs.text = this.state.allMessages[0]['Body'];

                theView.push(

                    <Carousel
                     delay={2000}
                     style={this.state.size}
                     autoplay = {false}
                     pageInfo = {false}
                     onAnimateNextPage={() => this.switchMessage()}
                     key={Math.random()}
                    >

                      <Card styles={cardList} key={Math.random()}>
                        <View style={stylesView.cardContainer}>
                            <Text ellipsizeMode='tail' numberOfLines={1} style={stylesView.title}> {this.outputs.title}</Text>

                            <Text ellipsizeMode='tail' numberOfLines={10} style={stylesView.body}> {this.outputs.text}</Text>
                        </View>

                      </Card>

                      <Card styles={cardList} key={Math.random()}>

                        <View style={stylesView.cardContainer}>
                            <Text numberOfLines={1} style={stylesView.title}> {this.outputs.title}</Text>

                            <Text numberOfLines={10} style={stylesView.body}> {this.outputs.text}</Text>
                        </View>

                      </Card>

                      <Card styles={cardList} key={Math.random()}>

                        <View style={stylesView.cardContainer}>
                            <Text  numberOfLines={1} style={stylesView.title}> {this.outputs.title}</Text>

                            <Text  numberOfLines={10} style={stylesView.body}> {this.outputs.text}</Text>
                        </View>

                      </Card>
                      </Carousel>
                  )
        }



      return (
          <View style={stylesView.mainContainer}>
          <StatusBar
            barStyle="light-content"
          />
          {theView}

          </View>
      );
  }

switchMessage() {
    this.state.allMessages.shift()
    if (this.state.allMessages.length < 1){
        this.setState({isBottle:true, allMessages:[]})
        this.range = this.range + 10;
    } else {
        //console.log('length', this.state.allMessages.length)
        var counter = 0;
        this.outputs.title = this.state.allMessages[0]['Title'];
        this.outputs.text = this.state.allMessages[0]['Body'];

        this.setState({randomer:Math.random()});
    }



}

onPressBottle() {
    //arrOfMessages = [];
    this.getData();
    if(this.state.allMessages >= 1){
        this.setState({allMessages:arrOfMessages, isBottle:false});
    }else {
        this.setState({allMessages:arrOfMessages});
    }

  }
}

var cardWidth = Dimensions.get('window').width - .13*widthScreen
var cardHeight = Dimensions.get('window').height - .225*heightScreen
var theMargin = Dimensions.get('window').height- cardHeight- .08*heightScreen
const cardList   = {card: {alignItems:'flex-start',
                            borderRadius:(5/GLOBAL.HEIGHT)*heightScreen,
                            marginTop:(23/GLOBAL.HEIGHT)*heightScreen,
                            marginBottom:theMargin,
                            width:cardWidth,
                            backgroundColor:'#f2f1ef'}};

const stylesView = StyleSheet.create({
  mainContainer: {
    alignItems:'center',
    flex: 1,
    backgroundColor:'#ececec'
  },
  cardContainer: {
    height: cardHeight*1.5,
    width: cardWidth - (cardWidth/5),
    marginLeft: cardWidth/10,
    backgroundColor:'transparent'

  },
  title: {
    marginTop:(45/GLOBAL.HEIGHT)*heightScreen,
    marginLeft:(12/GLOBAL.WIDTH)*widthScreen,
    fontSize:(21/GLOBAL.HEIGHT)*heightScreen,
    color:'#062039',
    justifyContent:'flex-start'
  },
  body: {
    marginTop:(20/GLOBAL.HEIGHT)*heightScreen,
    marginLeft:(5/GLOBAL.WIDTH)*widthScreen,
    fontSize:(16/GLOBAL.HEIGHT)*heightScreen,
    color:'#062039',
    justifyContent:'flex-start'
  },
});




module.exports = Main;
