//Gets and Sets profile picture
document.getElementById("ProfilePicture")

ProfilePicture.src = localStorage.getItem("PFP");

// Travel to the defined url inputted in the button [Index.html]
function Travel(Url) {
  TravelID = Url;
}

//TravelID equaled to Url for easy define
var TravelID


//Reloads IFrame so it will display correctly

function SetLocation() {
  document.getElementById("ViewportFrame").src = "https://BlueSkyezWebsite.amonguszbs10K.repl.co/" + "Viewport" + "/" + TravelID + ".html";
}
Travel;