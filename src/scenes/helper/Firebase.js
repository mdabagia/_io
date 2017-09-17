import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        firebase.initializeApp({
            apiKey: "AIzaSyCN2gdKPbxFmhNgHrJOnP1s_DlOUoJgF38",
            authDomain: "bottle-15e26.firebaseapp.com",
            databaseURL: "https://bottle-15e26.firebaseio.com",
            projectId: "bottle-15e26",
            storageBucket: "bottle-15e26.appspot.com",
            messagingSenderId: "451067004798"
        });
    }

}

  getLast() {

    firebase.database().ref('messages').queryLimited(toLast: 1).on('value', function(snapshot) {
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

module.exports = Firebase;
