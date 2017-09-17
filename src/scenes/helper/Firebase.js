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

module.exports = Firebase;
