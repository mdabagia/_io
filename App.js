import React, { Component} from 'react';
import {Text, StyleSheet, StatusBar,Dimensions, AsyncStorage} from 'react-native';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'
import { Font, AppLoading, Notifications , Constants, Permissions } from 'expo';



import TopTab from './src/scenes/TopTab.js'
import HotTab from './src/scenes/HotTab.js'
import NewTab from './src/scenes/NewTab.js'

var heightScreen=Dimensions.get('window').height;
var widthScreen=Dimensions.get('window').width;
var GLOBAL = require('./src/scenes/helper/Globals.js');

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

export default class App extends Component {
    render() {
    return (
        <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
            <Scene key="root" hideNavBar={true}>
                <Scene key ='tabbar' tabs tabBarStyle={style.tabBarStyle}>
                {/*iconTitle='list' iconName={'list'} icon={TabIcon}*/}
                    <Scene key='hotTab' title='Hot' >
                        <Scene  key="hot"
                                component={HotTab}
                                title="HOT"
                                navigationBarStyle={{backgroundColor:'#DA3298'}}
                                titleStyle={{fontFamily:'Arial', fontSize:(28/GLOBAL.HEIGHT)*heightScreen, color:'white'}}
                                titleWrapperStyle={{marginTop:(7/GLOBAL.HEIGHT)*heightScreen }}
                        />
                    </Scene>

                    <Scene key='topTab' title='Top' >
                        <Scene  key="top"
                                component={TopTab}
                                title="TOP"
                                navigationBarStyle={{backgroundColor:'#DA3298', height:(64/667)*heightScreen}}
                                titleStyle={{fontFamily:'Arial', fontSize:(28/GLOBAL.HEIGHT)*heightScreen, color:'white'}}
                                titleWrapperStyle={{marginTop:(7/GLOBAL.HEIGHT)* heightScreen}}
                        />

                    </Scene>

                    <Scene key = 'newTab' title='New' >
                        <Scene key="newTab"
                            component={NewTab}
                              title="NEW"
                              navigationBarStyle={{backgroundColor:'#DA3298', height:(64/667)*heightScreen}}
                              titleStyle={{fontFamily:'Arial', fontSize:(28/GLOBAL.HEIGHT)*heightScreen, color:'white'}}
                              titleWrapperStyle={{marginTop:(7/GLOBAL.HEIGHT)*heightScreen }}
                        />

                    </Scene>

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
	}
});
