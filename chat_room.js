
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA50yUUjCm_Nnb2A_3X9zWuOiJCMgoh9vg",
  authDomain: "let-s-chat-17c29.firebaseapp.com",
  databaseURL: "https://let-s-chat-17c29-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-17c29",
  storageBucket: "let-s-chat-17c29.appspot.com",
  messagingSenderId: "216516251369",
  appId: "1:216516251369:web:7f6aaf02760fa65b742a78",
  measurementId: "G-L02NKEYHDP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addRoom(){
  room_name=document.getElementById("room_name").value;
  localStorage.setItem("r_n" , room_name);

  firebase.database().ref("/").child(room_name).update({
    purpose:"add room"
  });
  window.location="lets_chat.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row= "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' > #"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function log_out(){
  localStorage.removeItem("u_n");    
  localStorage.removeItem("r_n");
  window.location="index.html";

}

function redirect(r_name){
  localStorage.setItem("r_n" , r_name);
  window.location="lets_chat.html";
}

user_name=localStorage.getItem("u_n");
console.log(user_name);
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";