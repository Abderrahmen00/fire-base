$(".im button").css("opacity","0");



$(".im").mouseenter(function(){
    $(this).css("opacity","0.5");
$(this).find("button").css("opacity","1");


})
$(".im").mouseleave(function(){
    $(".im").css("opacity","100");
    $(this).find("button").css("opacity","0");

}

);


$(".cr button").css("opacity","0");
$(".cr").mouseenter(function(){
    $(this).css("opacity","0.5");
$(this).find("button").css("opacity","1");


})
$(".cr").mouseleave(function(){
    $(".cr").css("opacity","100");
    $(this).find("button").css("opacity","0");
}

);

var firebaseConfig = {
    apiKey: "AIzaSyBkz8K-jt625-3wOi0Tr-DAb2y8BWu3NHw",
    authDomain: "laisse-tomber.firebaseapp.com",
    databaseURL: "https://laisse-tomber.firebaseio.com",
    projectId: "laisse-tomber",
    storageBucket: "",
    messagingSenderId: "738203333580",
    appId: "1:738203333580:web:e98273b8d3e8c93b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('glag');
  function submitForm(e){
      e.preventDefault();
      // Get values
      var name=document.getElementById('name').value;
      var track=document.getElementById('track').value;
      var email=document.getElementById('email').value;
      var number=document.getElementById('number').value;
      saveMessage(name,track,email,number);
  } 
document.getElementById('submitf').addEventListener('submit',submitForm);

function saveMessage(name,track,email,number){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        track: track,
        email: email,
        number: number,
    });
}




var txt= document.getElementById("txt")
document.getElementById("button").onclick= BOLD;
document.getElementById("it").onclick = ita;
document.getElementById("un").onclick = und;
function BOLD(){
    if (txt.style.fontWeight != 'bold'){
txt.style.fontWeight = 'bold';
}
else {
    txt.style.fontWeight = 'normal';
}
}


function ita(){
    if (txt.style.fontStyle != 'italic'){
        txt.style.fontStyle = 'italic'
    }
    else {
        txt.style.fontStyle = 'normal'
    }
}
function und(){
    if(txt.style.textDecoration != 'underline'){
        txt.style.textDecoration = 'underline'
    }
    else {
        txt.style.textDecoration = 'none'
    }
}

var sl = document.getElementById('sel');
sl.onchange = function () {
    txt.style.fontSize = this.value;
}
var fl = document.getElementById("fml");
fl.onchange = function () {
    txt.style.fontFamily = this.value;
}




