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

  getData() {

    var limit = 0;
    var range = 50;
    var returnArr = [];
    var post;
    firebase.database().ref('messages').orderByChild('Claps').startAt(GLOBAL.numMessages - range).endAt(GLOBAL.numMessages).on('value', function(snapshot) {
      var arrOfMessages = snapshotToArray(snapshot);
      for (i = 0; i < arrOfMessages.length; i++) {
          //console.log(arrOfMessages);
          var randomNum = (Math.random() * (9)) + 1;
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
          <Text> Main Feed</Text>

          <Button
              style={{fontSize: 20, color: '#062039'}}
              containerStyle={{marginTop:300/3.5,
                              padding:10,
                              height:45,
                              overflow:'hidden',
                              borderRadius:4,
                              backgroundColor: '#cccccc', }}
              styleDisabled={{color: 'red'}}
              onPress={() => this.getData()}>
              New Post!
          </Button>

          </View>
      );
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
