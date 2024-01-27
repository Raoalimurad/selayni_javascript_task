function setBackground() {
    var postbackground = document.getElementById("textarea");
    postbackground.style.backgroundImage = `url("${event.target.src}")`;
    postbackground.style.backgroundRepeat = "no-repeat";
    postbackground.style.backgroundSize = "cover";
    postbackground.style.width = "100%";


    
}

function changeColour(){
    
    var colorChange = document.getElementById("textarea");
    colorChange.style.color=event.target.value
}
 function changebackground(){
   
    var backgroundColor = document.getElementById("textarea");
    backgroundColor.style.backgroundColor = event.target.value
    backgroundColor.style.backgroundImage = "none";
 }
 function changeItalicStyle() {
    var textElement = document.getElementById("textarea");
    var currentStyle = window.getComputedStyle(textElement).fontStyle;

    // Toggle between normal and italic styles
    textElement.style.fontStyle = (currentStyle === "italic") ? "normal" : "italic";
}
function changeBoldStyle() {
    var textElement = document.getElementById("textarea");

   
    if (textElement.style.fontWeight === "bold" ) {
      
        textElement.style.fontWeight = "normal";
    } else {
      
        textElement.style.fontWeight = "bold";
    }
}
function underline() {
    var textElement = document.getElementById("textarea");
    
    if (textElement.style.textDecoration === "underline") {
        textElement.style.textDecoration = "none";
    } else {
        textElement.style.textDecoration = "underline";
    }
}
function textAlign() {
    var textElement = document.getElementById("textarea");
    
    if (textElement.style.textAlign === "center") {
        textElement.style.textAlign = "left";
    } else {
        textElement.style.textAlign = "center";
    }
}
function textright() {
    var textElement = document.getElementById("textarea");
    
    if (textElement.style.textAlign === "right") {
        textElement.style.textAlign = "left";
    } else {
        textElement.style.textAlign = "right";
    }
}
function fontSizeChange(){
    console.log(event.target.value)
    var textElement = document.getElementById("textarea");
    textElement.style.fontSize= event.target.value +"px"
}
function setEmoji(){
    var textElement = document.getElementById("textarea");
    textElement.value +=event.target.value
}
function showpost(){
 var hide = document.getElementById("disable")
 var heading = document.querySelector('.heading')
 var btn = document.querySelector('.btn')
 var displayElement = document.getElementById("display");
 var textElement = document.getElementById("textarea");
 textElement.disabled = true;
 hide.style.display="none"
 heading.style.display ="none"
 btn.style.display ="none"
 displayElement.style.display = (displayElement.style.display === 'none' || displayElement.style.display === '') ? 'flex' : 'none';

}

function toggleLike() {
    var likeIcon = document.getElementById('likeIcon');
    var likeText = document.getElementById('likeText');

    likeIcon.classList.toggle('active'); // Toggle the 'active' class
    var isLiked = likeIcon.classList.contains('active');

    likeText.innerText = isLiked ? 'Liked' : 'Like'; // Update the text based on the like status

    if (isLiked) {
        showHearts();
    } else {
        hideHearts();
    }
}

function showHearts() {
    // Your code to show hearts, for example, display a heart emoji or animation
    alert('Hearts!');
    var liked = document.getElementById("likeIcon")
    var likedtext = document.getElementById("likeText")
    liked.style.color = "red"
    likedtext.style.color = "red"
}

function hideHearts() {
    // Your code to hide hearts, for example, remove heart emoji or animation
}
