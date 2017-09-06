import React, { Component, PropTypes } from 'react';
import ReactNative, {StyleSheet, Text, View, Image, ScrollView, Dimensions, StatusBar,  AsyncStorage, TouchableHighlight,TouchableWithoutFeedback} from 'react-native';

var heightScreen=Dimensions.get('window').height;
var widthScreen=Dimensions.get('window').width;

class HotTab extends Component {
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
          <Text> This will have the Hottest _ios</Text>
          </View>
      );
  }

}


const stylesView = StyleSheet.create({
  mainContainer: {
    alignItems:'center'
  },
});




module.exports = HotTab;
