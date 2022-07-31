const firebaseConfig = {
    apiKey: "AIzaSyCCpdqUFm-8woyLMm-tGGmoTSVtlRjP4SY",
    authDomain: "kwitter-c8095.firebaseapp.com",
    databaseURL: "https://kwitter-c8095-default-rtdb.firebaseio.com",
    projectId: "kwitter-c8095",
    storageBucket: "kwitter-c8095.appspot.com",
    messagingSenderId: "942900809084",
    appId: "1:942900809084:web:911d108f74b8f99dba28f9",
    measurementId: "G-6616DL3HE1"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");

   function send() 
   {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        massage:msg,
        like:0
    });

    document.getElementById("msg").value = "";
   }
