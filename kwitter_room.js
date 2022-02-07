
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBHOt6UpP9trCr-FUFQbO012pM96MdrmqA",
      authDomain: "rocketshare-baeee.firebaseapp.com",
      databaseURL: "https://rocketshare-baeee-default-rtdb.firebaseio.com",
      projectId: "rocketshare-baeee",
      storageBucket: "rocketshare-baeee.appspot.com",
      messagingSenderId: "136516183815",
      appId: "1:136516183815:web:0ebc3445cb56db629387a2",
      measurementId: "G-P4XL4FSS2Z"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
