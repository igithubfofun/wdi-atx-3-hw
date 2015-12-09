var name = prompt("Welcome to Utopia! Our land is in grave danger! Please helps us ... wait... what's your name?");
var race = prompt("A pleasure to meet you, " + name + " I see that you are a ____ (human, elf, dwarf, gnome)").toLowerCase();
var wep;
var option;
var run = "You run like the coward you are, and Utopia is defeated...";
var cry = "You cry like a baby and the ogre kills you, Utopia is defeated...";

if (race === "human"){
  wep = prompt("Ah! but of course! What type of two handed weapon shall thou muster? (sword, or axe)").toLowerCase();{
    if (wep === "sword"){
      option = prompt("Quite the choice! Quick here comes an ogre! (strike, run, cry)").toLowerCase();
        if (option === "strike"){
          console.log("You strike the ogre in half, and save Utopia!");
        }
        else if (option === "run"){
          console.log(run);
        }
        else if (option === "cry"){
          console.log(cry);
        }
    }
  }
  if (wep === "axe"){
    option = prompt("Ah! the most lethal of them all! Here comes an ogre now! Slash him! (slash, run, cry)").toLowerCase();
    if (option === "slash"){
      console.log("Great strike! The ogre falls to the floor, and Utopia is saved!");
    }
    else if (option === "run"){
      console.log(run);
    }
    else if (option === "cry"){
      console.log(cry);
    }
  }
}

if (race === "elf"){
  wep = prompt("Ah yes, you do seem to be a noble fellow. Now what weapon shall you wield? (bow, dagger)").toLowerCase();
  if (wep === "bow"){
    option = prompt("a bit cliche don't you think? Forget it! Here comes an ogre! What will you do? (shoot, run, cry)").toLowerCase();
    if (option === "shoot"){
      console.log("You single handedly killed all the ogres and save Utopia!");
    }
    if (option === "run"){
      console.log(run);
    }
    if (option === "cry"){
      console.log(cry);
    }
  }

  if (wep === "dagger"){
    console.log("You suck with a dagger and die. Utopia is defeated...");
  }
}
