// Buttons
let moviesOption = document.querySelector(".movies");
let musicOption = document.querySelector(".music");
let booksOption = document.querySelector(".books");
let gameOption = document.querySelector(".game");

// image1.src = "https://secure.img1-cg.wfcdn.com/im/34023235/resize-h445%5Ecompr-r85/1359/135918459/Jaws+-+Picture+Frame+Advertisements.jpg";
// image1.style.display = 'block';

// Start Page
let startPage = document.querySelector(".startPage");


let buttonClicked;

moviesOption.onclick = function(){
    buttonClicked = "movies";
    startPage.style.display = "none";
    mainGame();
  console.log(moviesOption);
};
musicOption.onclick = function(){
    buttonClicked = "music";
    startPage.style.display = "none";
    mainGame();
  
};
/*
booksOption.onclick = function(){
    buttonClicked = "books";
    startPage.style.display = "none";
    mainGame();
};
gameOption.onclick = function(){
    buttonClicked = "game";
    startPage.style.display = "none";
    mainGame();
};
*/




function mainGame(){
  // Main Game
let mainGame = document.querySelector(".mainGame");


  if (buttonClicked === "movies")
  {
    action.style.display = "block";
    comedy.style.display = "block";
  }
  else if (buttonClicked === "music")
  {
    hiphop.style.display = "block";
    rock.style.display = "block";
  }


    /*
  else if (buttonClicked === "books")
  {
    
  }
  */
};

// Options for Movies
  let action = document.querySelector(".action");
  let comedy = document.querySelector(".comedy");
  let action1 = document.querySelector(".action1");
  let action2 = document.querySelector(".action2");
  let comedy1 = document.querySelector(".comedy1");
  let comedy2 = document.querySelector(".comedy2");
  let image1 = document.querySelector(".image1");
  let desc1 = document.querySelector(".desc1");
  
  action.onclick = function(){
    action1.style.display = "block";
    action2.style.display = "block";
    action.style.display = "none";
    comedy.style.display = "none";
    
  };
  comedy.onclick = function(){
    comedy1.style.display = "block";
    comedy2.style.display = "block";
    action.style.display = "none";
    comedy.style.display = "none";
  };

action1.onclick = function(){
  image1.style.display = "block";
  image1.src = "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg";
  desc1.innerHTML = "Years after the collapse of civilization, the tyrannical Immortan Joe enslaves apocalypse survivors inside the desert fortress the Citadel. When the warrior Imperator Furiosa (Charlize Theron) leads the despot's five wives in a daring escape, she forges an alliance with Max Rockatansky (Tom Hardy), a loner and former captive. Fortified in the massive, armored truck the War Rig, they try to outrun the ruthless warlord and his henchmen in a deadly high-speed chase through the Wasteland.";
};
action2.onclick = function(){
  image1.style.display = "block";
  image1.src = "https://upload.wikimedia.org/wikipedia/en/9/9a/The_Raid_2011_poster.jpg";
  desc1.innerHTML = "A rookie member of an elite team of commandos, Rama is instructed to hang back while his comrades-in-arms go ahead with their mission to take down a brutal crime lord called Tama. However, the team's cover is blown, and Tama offers sanctuary to every criminal in his high-rise apartment block in exchange for the cops' heads. Now Rama must take command and lead his remaining team on an ultraviolent charge through the building to complete -- and survive -- the mission.";
};
comedy1.onclick = function(){
  image1.style.display = "block";
  image1.src = "https://m.media-amazon.com/images/M/MV5BY2VkMDg4ZTYtN2M3Yy00NWZiLWE2ODEtZjU5MjZkYWNkNGIzXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_.jpg";
  desc1.innerHTML = "Two inseparable best friends navigate the last weeks of high school and are invited to a gigantic house party. Together with their nerdy friend, they spend a long day trying to score enough alcohol to supply the party and inebriate two girls in order to kick-start their sex lives before they go off to college. Their quest is complicated after one of them falls in with two inept cops who are determined to show him a good time.";
};
comedy2.onclick = function(){
  image1.style.display = "block";
  image1.src = "https://m.media-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg";
  desc1.innerHTML = "Phil (Bill Murray), a weatherman, is out to cover the annual emergence of the groundhog from its hole. He gets caught in a blizzard that he didn't predict and finds himself trapped in a time warp. He is doomed to relive the same day over and over again until he gets it right.";
};

// Options for Music
  let hiphop = document.querySelector(".hiphop");
  let rock = document.querySelector(".rock");
  let hiphop1 = document.querySelector(".hiphop1");
  let hiphop2 = document.querySelector(".hiphop2");
  let rock1 = document.querySelector(".rock1");
  let rock2 = document.querySelector(".rock2");
  
  hiphop.onclick = function(){
    hiphop1.style.display = "block";
    hiphop2.style.display = "block";
    hiphop.style.display = "none";
    rock.style.display = "none";
    
  };
  rock.onclick = function(){
    rock1.style.display = "block";
    rock2.style.display = "block";
    hiphop.style.display = "none";
    rock.style.display = "none";
  };

hiphop1.onclick = function(){
  image1.style.display = "block";
  image1.src = "https://media.npr.org/assets/img/2020/11/13/outkastb-wflag_wide-265a1c04bb72a827735695a8503f585f246ffe14.jpg";
  desc1.innerHTML = "Outkast is a southern hip hop group from Atlanta, Georgia which includes Andre Lauren “Andre 3000″ Benjamin and Antwan “Big Boi” Patton. The two formed the group after they met at the Lenox Square Shopping Mall in Atlanta in 1992";
};
hiphop2.onclick = function(){
  image1.style.display = "block";
  image1.src = "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRaQ-PADybsSb8-OqWNBK3COR01qBJf1CEnQlzE0_vmU9qG8ivcanI8xF9IaSoKbwf9iO6vdQ4RrBJxOMM";
  desc1.innerHTML = "Snoop Dogg, byname of Cordozar Calvin Broadus, Jr., also called Snoop Doggy Dogg and Snoop Lion, (born October 20, 1971, Long Beach, California, U.S.), American rapper and songwriter who became one of the best-known figures in gangsta rap in the 1990s and was for many the epitome of West Coast hip-hop culture.";
};
rock1.onclick = function(){
  image1.style.display = "block";
  image1.src = "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/PearlJam-Ten2.jpg/220px-PearlJam-Ten2.jpg";
  desc1.innerHTML = "Pearl Jam, American band that helped popularize grunge music in the early 1990s and that continued to be a respected alternative rock group into the 21st century. The original members were lead vocalist Eddie Vedder (original name Edward Louis Severson III; b.";
};
rock2.onclick = function(){
  image1.style.display = "block";
  image1.src = "http://www.spirit-of-metal.com/les%20goupes/R/Rainbow/pics/66c5_1.jpg";
  desc1.innerHTML = "Rainbow (also known as Ritchie Blackmore's Rainbow or Blackmore's Rainbow) are a British rock supergroup, formed in London and Los Angeles in 1975 by guitarist Ritchie Blackmore";
};
    
let charater = document.querySelector("#charater");
let press=false;
function KeyPress(){

  if(true){

  }else{
    press=true;
    let key = event.key;
    switch(key){
      case "a":
        setTimeout(walk1,0);
        charater.style.transform="scaleX(-1)";
        charater.style.animation="walkLeft 2s";
        break;
      case "d":
        setTimeout(walk1,0);
        charater.style.animation="walkRight 2s";
    }
  }
}
function walk1(){
  document.getElementById("charater").src="https://replit.com/@Mandy3Z/Media-Mayhem#Screenshot%202023-03-03%202.52.58%20PM.png";
  setTimeout(walk2,200);
}
function walk2(){
  charater.src="https://replit.com/@Mandy3Z/Media-Mayhem#walk2.png";
  setTimeout(walk1,200)
}
/*

*/
/*
// DJ's helping with getting the movie descriptions.
function getMovieDescription(movieName) {
  if (movieName === "Mad Max Fury Road") {
    return `Years after the collapse of civilization, the tyrannical Immortan Joe enslaves apocalypse survivors inside the desert fortress the Citadel. When the warrior Imperator Furiosa (Charlize Theron) leads the despot's five wives in a daring escape, she forges an alliance with Max Rockatansky (Tom Hardy), a loner and former captive. Fortified in the massive, armored truck the War Rig, they try to outrun the ruthless warlord and his henchmen in a deadly high-speed chase through the Wasteland.`;
  } else if (movieName === "The Raid: Redemption") {
    return `A rookie member of an elite team of commandos, Rama is instructed to hang back while his comrades-in-arms go ahead with their mission to take down a brutal crime lord called Tama. However, the team's cover is blown, and Tama offers sanctuary to every criminal in his high-rise apartment block in exchange for the cops' heads. Now Rama must take command and lead his remaining team on an ultraviolent charge through the building to complete -- and survive -- the mission.`;
  }
}

function getMovieImageSrc(movieName) {
  if (movieName === "Mad Max: Fury Road") {
    return "";
  } else if (movieName === "The Raid: Redemption") {
    return "";
  }
}*/