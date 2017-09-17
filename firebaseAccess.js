class firebaseAccess {
  const firebaseConfig = {
  apiKey: "AIzaSyCN2gdKPbxFmhNgHrJOnP1s_DlOUoJgF38",
  authDomain: "<your-auth-domain>",
  databaseURL: "https://console.firebase.google.com/u/0/project/bottle-15e26/database/data",
  storageBucket: "bottle-15e26.appspot.com",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  this.itemsRef = firebaseApp.database().ref("messages");
  ref.orderByChild("Claps").on("child_added", function(snapshot));


  function pushToDatabase(t, b) {
    var message = new Message(t,b);
    var updates {};
    var postData = message.toDictionary()
    updates['/messages/ + message.messageNum'] = postData;
    return itemsRef.update(updates);
  }


}
