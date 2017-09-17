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
import { Actions } from 'react-native-router-flux'
import Button from 'react-native-button';
import * as firebase from "firebase";

var heightScreen=Dimensions.get('window').height;
var widthScreen=Dimensions.get('window').width;
var GLOBAL = require('./helper/Globals.js');
import Message from "../../Message.js";

class NewPost extends Component {
    constructor(props: Object) {
        super(props);
        this.inputs ={title: '', text:''}

    }

    componentWillReceiveProps(){

    }

    componentWillMount(){

    }

    submitData(t, b){
        //new firebaseAccess().pushToDatabase(this.inputs.title, this.inputs.text);
        var message = new Message(t,b);

        var postData = message.toDictionary()
        const key = '/messages/' + message.messageNum
        var updates = {}
        updates[key] = postData
        firebase.database().ref().update(updates);

        //firebase.database().ref.orderByChild("Claps");
        // firebase.database().ref('messages').orderByChild('Claps').limitToLast(1).on("child_added", function(snapshot) {
        //   console.log(snapshot.key);
        // });

        // var limit = 0;
        // var range = 50;
        // var returnArr = [];
        // var post;
        // firebase.database().ref('messages').orderByChild('Claps').startAt(GLOBAL.numMessages - range).endAt(GLOBAL.numMessages).on('value', function(snapshot) {
        //   var arrOfMessages = snapshotToArray(snapshot);
        //   for (i = 0; i < arrOfMessages.length; i++) {
        //       console.log(arrOfMessages);
        //       var randomNum = (Math.random() * (9)) + 1;
        //       if (randomNum == 1) {
        //         post = arrOfMessages[i];
        //         console.log(post);
        //     }
        //   }

          //console.log(arrOfMessages)
        // queryData.on('child_added', function(snapshot) {
        //   snapshot.forEach(function(childSnapshot) {
        //     var item = childSnapshot.val();
        //     item.key = childSnapshot.key;
        //
        //     returnArr.push(item);
        //   });
        //
        //   for (thing in returnArr) {
        //     console.log(thing.key);
        //   }
        // });


      //Returns Array of Objects Requested

      function snapshotToArray(snapshot) {
          var returnArr = [];

          snapshot.forEach(function(childSnapshot) {
          var item = childSnapshot.val();
          item.key = childSnapshot.key;

          returnArr.push(item);
        });

        return returnArr;
        };

        // queryData.on('child_added', function(snapshot) {
        //   alert(snapshot.val());
        // });


        //
        // for (item in queryData) {
        //   console.log(item);
        // }


        // for (i = 0; i < 5; i++) {
        //   var randomNum = (Math.random() * (9)) + 1;
        //   if (randomNum == 1) {
        //     firebase.database().ref('messages').orderByChild('Claps').startAt(GLOBAL.numMessages - range).endAt(GLOBAL.numMessages).on("child_added", (snapshot) => {
        //        console.log(snapshot.val());});
        //      }
        //    }
        // console.warn(GLOBAL.numMessages);


        Actions.home();
    }



    getData() {

      var limit = 0;
      var range = 50;
      var arrOfMessages = [];
      var post;

      if (returnArr.length > 1) {
        for (j = 0; j < arrOfMessages.length; j++) {
        var random = (Math.random() * 9) + 1;
        if (randomNum == 1) {
          post = arrOfMessages[i];
          console.log(post);
        }
      }
      }

      firebase.database().ref('messages').orderByChild('Claps').startAt(GLOBAL.numMessages - range).endAt(GLOBAL.numMessages).on('value', function(snapshot) {
        arrOfMessages = snapshotToArray(snapshot);
        for (i = 0; i < arrOfMessages.length; i++) {
            console.log(arrOfMessages);
            var randomNum = (Math.random() * (9)) + 1;
            if (randomNum == 1) {
              post = arrOfMessages[i];
              console.log(post);
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
        //let  text = this.state.text;
        //let title = this.state.title;

        return (
            <View style={stylesView.mainContainer}>
            <StatusBar
              barStyle="light-content"
            />
                <Card styles={cardList} key={Math.random()}>
                <ScrollView>
                    <View style={stylesView.cardContainer}>
                        <TextField
                            label={'Title'}
                            highlightColor={'#062039'}
                            onChangeText={(text) => {
                                this.inputs.title =text;
                            }}

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
                            highlightColor={'#062039'}
                            onChangeText={(text) => {
                                this.inputs.text = text;
                            }}

                            dense={true}
                            labelColor={'#000'}
                            textColor={'black'}
                            inputStyle={{
                                color:"black",
                                fontSize:28
                            }}
                            wrapperStyle={{
                                height: cardHeight/2
                            }}
                            style={{
                                color:"black"
                            }}
                            height={cardHeight/2}
                            multiline={true}
                            autoGrow={true}
                            maxLength={300}

                        />

                        <Button
                            style={{fontSize: 20, color: '#062039'}}
                            containerStyle={{marginTop:cardHeight/3.5,
                                            padding:10,
                                            height:45,
                                            overflow:'hidden',
                                            borderRadius:4,
                                            backgroundColor: '#cccccc', }}
                            styleDisabled={{color: 'red'}}
                            onPress={() => this.submitData(this.inputs.title,this.inputs.text)}>
                            Bottle It, Man!
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
                            borderRadius:(5/GLOBAL.HEIGHT)*heightScreen,
                            marginTop:(23/GLOBAL.HEIGHT)*heightScreen,
                            marginBottom:theMargin,
                            width:cardWidth,
                          backgroundColor:'#f2f1ef'}};

const stylesView = StyleSheet.create({
  mainContainer: {
    alignItems:'center',
    height: Dimensions.get('window').height,
    backgroundColor:'#cccccc'
  },
  cardContainer: {
    height: cardHeight,
    width: cardWidth - (cardWidth/5),
    marginLeft: cardWidth/10,
    backgroundColor:'transparent'

  },
});




module.exports = NewPost;
