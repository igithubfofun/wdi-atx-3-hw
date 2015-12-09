var name = prompt("Welcome to Utopia! Our land is in grave danger! Please helps us ... wait... what's your name?");
var race = prompt("A pleasure to meet you, " + name + " I see that you are a ____ (human, elf, dwarf, gnome)").toLowerCase();
var wep;
var option;
var run = "You run like the coward you are, and Utopia is defeated...";
var cry = "You cry like a baby and the ogre kills you, Utopia is defeated...";
var tiny = "You just sit there, the ogre doesn't see you, walks over you and destroys Utopia...";

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
      num = prompt("How many arrows do you have?")
      if (num > 1) {
        console.log("You single handedly killed all the ogres with " + num + " arrows and save Utopia!");
      }
    }
    else if (option === "run"){
      console.log(run);
    }
    else if (option === "cry"){
      console.log(cry);
    }
  }
  if (wep === "dagger"){
    console.log("You suck with a dagger and die. Utopia is defeated...");
  }
}

if (race === "dwarf"){
  wep = prompt("Ah yes, spectacularly obvious with that beard of yours! What weapon shall you use? (gun, hammer)").toLowerCase();
  if (wep === "gun"){
    option = prompt("An ogre approaches, will you shoot it? (shoot, run, be tiny)").toLowerCase();
    if (option === "shoot"){
      console.log("You shoot the ogre and kill it... what did you expect? guns are cheap... no honor... you couldn't use a more honorable weapon could you? you should really rethink your life. Like seriously. What are you doing playing this game if you want to be a gnome with a gun. Anyway you won... whatever...");
    }
    else if (option === "run"){
      console.log(run);
    }
    else if (option === "be tiny"){
      console.log(tiny);
    }
  }
  if (wep === "hammer"){
    option = prompt("Ah! an honorable weapon! Here comes an ogre! What shall you do? (smash, run, be tiny)").toLowerCase();
    if (option === "smash"){
      console.log("You smash the ogre with a killing blow! Utopia is saved!");
    }
    else if (option === "run"){
      console.log(run);
    }
    else if (option === "be tiny"){
      console.log(tiny);
    }
  }
}
if (race === "gnome"){
  wep = prompt("Ah yes, I can see that by your siz... I mean by your wisdom.. yes wisdom. Which weapon shall you use? (crossbow, mace)").toLowerCase();
  if (wep === "crossbow"){
    option = prompt("Good choice! Here comes an ogre! Quick what shall you do? (shoot, run, be tiny)").toLowerCase();
    if (option === "shoot"){
      console.log("You shoot the ogre and it dies. Utopia is saved!");
    }
    else if (option === "run"){
      console.log(run);
    }
    else if (option === "be tiny"){
      console.log(tiny);
    }
  }
  if (wep === "mace"){
    console.log("hm... ok... you realize mace was not invented yet? you are defenseless, and you are defeated. Utopia is defeated...");
  }
}




















