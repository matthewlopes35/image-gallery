var imageArray = ["january.png", "february.png", "march.png", "april.png", "may.png", "june.png",
"july.png", "august.png", "september.png", "october.png", "november.png", "december.png"];

for(var i = 0; i < 12; i++){
  document.getElementById(i).addEventListener("click", clicked);
}

function clicked(){
  var enlarged = document.getElementById("enlarge")
  enlarged.innerHTML = "";

  var image = document.createElement("img");
  image.className = "clicked-image";
  image.id = event.target.id;
  image.src = imageArray[event.target.id];

  var back = document.createElement("button")
  back.innerText = "Back";
  back.id = "back";
  back.addEventListener("click", backButton);

  var forward = document.createElement("button")
  forward.innerText = "Forward";
  forward.id = "forward";
  forward.addEventListener("click", forwardButton);

  var exit = document.createElement("button")
  exit.innerText = "Exit";
  exit.id = "exit";
  exit.addEventListener("click", exitButton);

  for (var i = 0; i < 12; i++) {
    document.getElementById(i).style.display = "none";
  }
}

enlarged.append(image);
enlarged.append(back);
enlarged.append(forward);
enlarged.append(exit);
