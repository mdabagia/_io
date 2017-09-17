import React, { Component, PropTypes } from 'react';
import ReactNative, {StyleSheet, Text, View, Image, ScrollView, Dimensions, StatusBar,  AsyncStorage, TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import Button from 'react-native-button';
import * as firebase from "firebase";
var heightScreen=Dimensions.get('window').height;
var widthScreen=Dimensions.get('window').width;
var GLOBAL = require('./helper/Globals.js');

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {}

  }

  componentWillReceiveProps(){

  }

  componentWillMount(){

  }

  getData(r) {

    var limit = 0;
    var range = range + r;
    var returnArr = [];
    var post;
    //.startAt(GLOBAL.numMessages - range).endAt(GLOBAL.numMessages - range + 50)
    firebase.database().ref('messages').orderByChild('Claps').on('value', function(snapshot) {
      var arrOfMessages = snapshotToArray(snapshot);
      for (i = 0; i < arrOfMessages.length; i++) {
          //console.log(arrOfMessages);
          var randomNum = (Math.random() * (9)) + 1;
          //last two will be never be touched due to array rewrite
          if (randomNum == arrOfMessages.length - 1) {
            getData(50);
          }
          if (randomNum <= 4) {
            post = arrOfMessages[i];
            console.log(post);
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

      return (
          <View style={stylesView.mainContainer}>
          <StatusBar
            barStyle="light-content"
          />
            <TouchableWithoutFeedback onPress={() => this.onPressBottle()}>
                <Image source={require('../assets/images/bottle.png')} style={{width: (100/GLOBAL.WIDTH)*widthScreen, height: (100/GLOBAL.HEIGHT)*heightScreen, marginTop: heightScreen/2 - (100/GLOBAL.HEIGHT)*heightScreen}}/>
            </TouchableWithoutFeedback>

          </View>
      );
  }

onPressBottle() {
    console.warn('fuck')
    this.getData(50);
  }
}


const stylesView = StyleSheet.create({
  mainContainer: {
    alignItems:'center',
    flex: 1,
    backgroundColor:'#ececec'
  },
});




module.exports = Main;
