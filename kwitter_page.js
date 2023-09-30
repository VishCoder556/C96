var firebaseConfig = {
      apiKey: "AIzaSyD-sbThq_vutKyCdidj5DvLZ1BC6p-ymZ0",
      authDomain: "vishnu-kwitter.firebaseapp.com",
      databaseURL: "https://vishnu-kwitter-default-rtdb.firebaseio.com",
      projectId: "vishnu-kwitter",
      storageBucket: "vishnu-kwitter.appspot.com",
      messagingSenderId: "503475883309",
      appId: "1:503475883309:web:ee4f002bdd4719c52fd7a4",
      measurementId: "G-3E7QJVT658"
    };
  
    
  firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();






user_name = localStorage.getItem("user_name");


function send(){
      message = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: message,
            like: 0
      });
      document.getElementById("message").value = "";
}



function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}