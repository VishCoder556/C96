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


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "User name: "+user_name;

function addRoom(){
      room_name = document.getElementById("room_data").value;
      console.log(room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', 
            function(snapshot) {
                  document.getElementById("output").innerHTML = "";
                  snapshot.forEach(
                        function(childSnapshot){
                              childKey  = childSnapshot.key;
                              Room_names = childKey;
                              console.log("room_name "+Room_names);
                              row = "<div class='room_data' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
                              document.getElementById("output").innerHTML += row;
                        }
                  );
            }
      );
}

getData();
