import React, { Component} from 'react';
import {Text, StyleSheet, StatusBar,Dimensions, AsyncStorage} from 'react-native';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'
import { Font, AppLoading, Notifications , Constants, Permissions } from 'expo';
import * as firebase from 'firebase';


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

var itemsRef;

export default class App extends Component {

    constructor(props){
      super(props)


    }

    componentWillMount() {
      const firebaseConfig = {
         apiKey: "AIzaSyCN2gdKPbxFmhNgHrJOnP1s_DlOUoJgF38",
         authDomain: "bottle-15e26.firebaseapp.com",
         databaseURL: "https://bottle-15e26.firebaseio.com",
         projectId: "bottle-15e26",
         storageBucket: "bottle-15e26.appspot.com",
         messagingSenderId: "451067004798"
      };

      const firebaseApp = firebase.initializeApp(this.firebaseConfig);
      const db = firebaseApp.database()
      itemsRef = db.ref();

    }

    render() {
        return (
            <Router  getSceneStyle={getSceneStyle}>
                <Scene key="root" hideNavBar={false}>
                    <Scene key="home"
                        component={Main}
                        title="Bottle"
                        titleStyle={{color:'white'}}
                        navigationBarStyle={{backgroundColor:'#062039'}}
                        rightButtonImage={require('./src/assets/images/add-buttonW.png')}
                        rightButtonStyle={{marginRight:(-120/GLOBAL.WIDTH)*widthScreen}}
                        onRight={() => Actions.modalNewPost()}
                        leftButtonImage={require('./src/assets/images/userW.png')}
                        leftButtonStyle={{marginLeft:(-120/GLOBAL.WIDTH)*widthScreen}}
                        onLeft={() => Actions.modalProfile()}

                    />

                    <Scene key='modalNewPost'
                        title='New Post'
                        component={NewPost}
                        direction='horizontal'
                        navigationBarStyle={{backgroundColor:'#062039'}}
                        titleStyle={{color:'white'}}
                        backButtonImage={require('./src/assets/images/returnW.png')}
                        leftButtonIconStyle={{width:28 , height:28 }}
                        onBack={() => Actions.home()}
                    >
                    </Scene>

                    <Scene key='modalProfile'
                        title='Profile'
                        component={Profile}
                        direction='horizontal'
                        navigationBarStyle={{backgroundColor:'#062039'}}
                        titleStyle={{color:'white'}}
                        backButtonImage={require('./src/assets/images/returnW.png')}
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
      backgroundColor: '#ececec'
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
		backgroundColor: '#ececec'
	},
    titleStyle:{
        fontSize:(28/GLOBAL.HEIGHT)*heightScreen,
        color:'white'
    }
});

export {itemsRef};
