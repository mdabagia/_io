import React, { Component, PropTypes } from 'react';
import ReactNative, {StyleSheet, Text, View, Image, ScrollView, Dimensions, StatusBar,  AsyncStorage, TouchableHighlight,TouchableWithoutFeedback} from 'react-native';


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

  render () {
      return (
          <View style={stylesView.mainContainer}>
          <StatusBar
            barStyle="light-content"
          />
           <TouchableWithoutFeedback onPress={this.onPressBottle}>
                <Image source={require('../assets/images/bottle.png')} style={{width: (100/GLOBAL.WIDTH)*widthScreen, height: (100/GLOBAL.HEIGHT)*heightScreen, marginTop: heightScreen/2 - (100/GLOBAL.HEIGHT)*heightScreen}}/>   
            </TouchableWithoutFeedback>
            
            </View>
      );
  }
  onPressBottle() {
    console.warn('fuck')  
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