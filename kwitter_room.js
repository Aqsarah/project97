
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBpeyOWmwtSxuxVso7ILMLJ7iTgXwpRzG8",
      authDomain: "kwitter-3c9af.firebaseapp.com",
      databaseURL: "https://kwitter-3c9af-default-rtdb.firebaseio.com",
      projectId: "kwitter-3c9af",
      storageBucket: "kwitter-3c9af.appspot.com",
      messagingSenderId: "509595416759",
      appId: "1:509595416759:web:e45c8ae0190d92e780f532"
    };
    firebase.initializeApp(firebaseConfig);
    
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
    
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
    
          localStorage.setItem("room_name",room_name);
    
          window.location = "kwitter_page.html";
    }




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name- "+Room_names); 
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >0"+Room_names +"</div>"
      document.getElementById("output").innerHTML +=row
      //End code
      });});}
getData();




function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() { localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location = "index.html"; }