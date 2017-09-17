import * as firebase from 'firebase';
import Message from '../../../Message.js'
import itemsRef from '../../../App.js'

class firebaseAccess {

  constructor() {


    //this.itemsRef = firebaseApp.database().ref();
    //ref.orderByChild("Claps").on("child_added", function(snapshot));

    this.pushToDatabase = this.pushToDatabase.bind(this);
  }


  pushToDatabase(t, b) {
    console.warn("Animal", t, b);
    var message = new Message(t,b);

    var postData = message.toDictionary()
    const key = '/messages/' + message.messageNum
    var updates = {}
    updates[key] = postData
    console.warn("Reached here");
    return this.itemsRef.update(updates);
  }

}

module.exports = firebaseAccess;
