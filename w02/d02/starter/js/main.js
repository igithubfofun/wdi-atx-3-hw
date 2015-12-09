var name = prompt("Welcome to Utopia! Our land is in grave danger! Please helps us ... wait... what's your name?");
var race = lowerCase("A pleasure to meet you, " + name + " I see that you are a ____ (human, elf, dwarf, gnome)");
var wep;
var option;
var run = "You run like the coward you are, and Utopia is defeated...";
var cry = "You cry like a baby and the ogre kills you, Utopia is defeated...";
var tiny = "You just sit there, the ogre doesn't see you, walks over you and destroys Utopia...";

if (race === "human"){
  lowerCase("Ah! but of course! What type of two handed weapon shall thou muster? (sword, or axe)");{
    if (wep === "sword"){
      option = lowerCase("Quite the choice! Quick here comes an ogre! (strike, run, cry)");
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
      option = lowerCase("Ah! the most lethal of them all! Here comes an ogre now! Slash him! (slash, run, cry)");
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
  wep = lowerCase("Ah yes, you do seem to be a noble fellow. Now what weapon shall you wield? (bow, dagger)");
  if (wep === "bow"){
    option = lowerCase("a bit cliche don't you think? Forget it! Here comes an ogre! What will you do? (shoot, run, cry)");
    if (option === "shoot"){
      num = lowerCase("How many arrows do you have?")
      if (num > 1) {
        console.log("You single handedly killed all the ogres with " + num + " arrows and save Utopia!");
      }
      else {
        console.log("You have " + num + " arrows? Oh well, you're an elf and slay all the ogres with your dual wielding daggers you had in your back pockets.");
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
  wep = lowerCase("Ah yes, spectacularly obvious with that beard of yours! What weapon shall you use? (gun, hammer)");
  if (wep === "gun"){
    option = lowerCase("An ogre approaches, will you shoot it? (shoot, run, be tiny)");
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
    option = lowerCase("Ah! an honorable weapon! Here comes an ogre! What shall you do? (smash, run, be tiny)");
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
  wep = lowerCase("Ah yes, I can see that by your siz... I mean by your wisdom.. yes wisdom. Which weapon shall you use? (crossbow, mace)");
  if (wep === "crossbow"){
    option = lowerCase("Good choice! Here comes an ogre! Quick what shall you do? (shoot, run, be tiny)");
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

function lowerCase(displayText){
  return prompt(displayText).toLowerCase();
}

















