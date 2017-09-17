import React, { Component, PropTypes } from 'react';
import ReactNative, {StyleSheet,
                    Text,
                    View,
                    Image,
                    ScrollView,
                    Dimensions,
                    StatusBar,
                    AsyncStorage,
                    TouchableHighlight,
                    TouchableWithoutFeedback} from 'react-native';
import { Card, CardImage, CardTitle,CardContent, CardAction} from 'react-native-card-view';
import TextField from 'react-native-md-textinput';
import Button from 'react-native-button';


var heightScreen=Dimensions.get('window').height;
var widthScreen=Dimensions.get('window').width;
var GLOBAL = require('./helper/Globals.js');

class NewPost extends Component {
    constructor(props: Object) {
        super(props);
        this.inputs ={title: '', text:''}

    }

    componentWillReceiveProps(){

    }

    componentWillMount(){

    }

    submitData(){


    }

    render () {
        //let  text = this.state.text;
        //let title = this.state.title;

        return (
            <View style={stylesView.mainContainer}>
                <Card styles={cardList} key={Math.random()}>
                <ScrollView>
                    <View style={stylesView.cardContainer}>
                        <TextField
                            label={'Title'}
                            highlightColor={'#00BCD4'}
                            onChangeText={(text) => {
                                this.inputs.title =text;
                            }}
                            value={''}
                            dense={true}
                            labelColor={'#000'}
                            textColor={'black'}
                            inputStyle={{
                                color:'black',
                                fontSize:28
                            }}
                            style={{
                                color:"black"
                            }}
                            maxLength={30}
                        />
                        <TextField
                            label={'Text'}
                            highlightColor={'#00BCD4'}
                            onChangeText={(text) => {
                                this.inputs.text = text;
                            }}
                            value={''}
                            dense={true}
                            labelColor={'#000'}
                            textColor={'black'}
                            inputStyle={{
                                color:"black",
                                fontSize:28
                            }}
                            wrapperStyle={{
                                height: cardHeight/3
                            }}
                            style={{
                                color:"black"
                            }}
                            height={cardHeight/3}
                            multiline={true}
                            autoGrow={true}

                        />

                        <Button
                            style={{fontSize: 20, color: 'blue'}}
                            containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: '#D2D7D3', }}
                            styleDisabled={{color: 'red'}}
                            onPress={() => this.submitData()}>
                            Submit!
                        </Button>

                    </View>
                </ScrollView>
                </Card>
            </View>
        );
    }

}

var cardWidth = Dimensions.get('window').width - .13*widthScreen
var cardHeight = Dimensions.get('window').height - .225*heightScreen
var theMargin = Dimensions.get('window').height- cardHeight- .08*heightScreen
const cardList   = {card: {alignItems:'flex-start',
                            borderRadius:(15/GLOBAL.HEIGHT)*heightScreen,
                            marginTop:(23/GLOBAL.HEIGHT)*heightScreen,
                            marginBottom:theMargin,
                            width:cardWidth}};

const stylesView = StyleSheet.create({
  mainContainer: {
    alignItems:'center',
    height: Dimensions.get('window').height,
    backgroundColor:'grey'
  },
  cardContainer: {
    height: cardHeight,
    width: cardWidth - (cardWidth/5),
    marginLeft: cardWidth/10,
    backgroundColor:'transparent'

  },
});




module.exports = NewPost;
