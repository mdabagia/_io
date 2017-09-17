import React, { Component} from 'react';
import {Text, StyleSheet, StatusBar,Dimensions, AsyncStorage} from 'react-native';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'
import { Font, AppLoading, Notifications , Constants, Permissions } from 'expo';


import Profile from './src/scenes/Profile.js'
import NewPost from './src/scenes/NewPost.js'
import Main from './src/scenes/Main.js'

var heightScreen=Dimensions.get('window').height;
var widthScreen=Dimensions.get('window').width;
var GLOBAL = require('./src/scenes/helper/Globals.js');

/*const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};*/

export default class App extends Component {


    render() {
        return (
            <Router  getSceneStyle={getSceneStyle}>
                <Scene key="root" hideNavBar={false}>
                    <Scene key="home"
                        component={Main}
                        title="Bottle"
                        navigationBarStyle={{backgroundColor:'#D2D7D3'}}
                        rightButtonImage={require('./src/assets/images/add-button.png')}
                        onRight={() => Actions.modalNewPost()}
                        leftButtonImage={require('./src/assets/images/user.png')}
                        onLeft={() => Actions.modalProfile()}

                    />

                    <Scene key='modalNewPost'
                        title='New Post'
                        component={NewPost}
                        direction='horizontal'
                        navigationBarStyle={{backgroundColor:'#D2D7D3'}}
                        titleStyle={{color:'black'}}
                        backButtonImage={require('./src/assets/images/return.png')}
                        leftButtonIconStyle={{width:28 , height:28 }}
                        onBack={() => Actions.home()}
                    >
                    </Scene>

                    <Scene key='modalProfile'
                        title='Profile'
                        component={Profile}
                        direction='horizontal'
                        navigationBarStyle={{backgroundColor:'#D2D7D3'}}
                        titleStyle={{color:'black'}}
                        backButtonImage={require('./src/assets/images/return.png')}
                        leftButtonIconStyle={{width:28 , height:28 }}
                        onBack={() => Actions.home()}
                    >
                    </Scene>

                </Scene>
            </Router>
        );
  }
}

const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
      backgroundColor: '#E0E0E0'
  };
  return style;
};

var style = StyleSheet.create({
    tabBarStyle: {
        height: (48/GLOBAL.HEIGHT)*heightScreen,
        borderTopWidth : 1,
        borderColor    : '#b7b7b7',
        backgroundColor: '#fcfcfc',
        opacity        : 1
    },
	sceneStyle:{
		backgroundColor: '#E0E0E0'
	},
    titleStyle:{
        fontSize:(28/GLOBAL.HEIGHT)*heightScreen,
        color:'white'
    }
});
