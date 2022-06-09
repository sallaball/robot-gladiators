var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames.length);
console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);



// fight function (now with parameter for enemy's name)


    var fight = function(enemyNames) {
      while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
       break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyNames + '. ' + enemyNames + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyNames + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyNames + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyNames + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
     break; 
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  } 
};



var startGame = function() {

  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  
  

// fight each enemy-robot by looping over them and fighting them one at a time
for(var i = 0; i < enemyNames.length; i++) {


  fight(enemyNames[i]);
  // if player is still alive, keep fighting
  if (playerHealth > 0) {
    
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);

    if (playerHealth > 0 && i < enemyNames.length - 1) {
  
      var storeConfirm = window.prompt(
        "The fight is over, visit the store before the next round?");

      if (storeConfirm) {
        shop();
      }
    }
  }

  else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
  }
}

endGame();
};

var endGame = function() {
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  }
  else {
    window.alert("You've lost your robot in battle.")
  }
  

  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    startGame();


  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!")
  }

};
var shop = function() {
  console.log("entered the shop");
  var shopOptionPrompt = window.prompt('Would you like to REFILL you health, UPGRADE your attack, or LEAVE the store? Please enter "REFILL", "UPGRADE", or "LEAVE" to make a choice.');

        switch (shopOptionPrompt) {
          case "refill":
          case "REFILL":
            if (playerMoney >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars");

            playerHealth = playerHealth + 20;
            playerMoney= playerMoney - 7;
            }
            else {
              window.alert("You don't have enough money!")
            }
            break;

            case "upgrade":
            case "UPGRADE":
              if (playerMoney >= 7) {
                
              window.alert("Upgrading player's attack by 6 for 7 dollars.");

              playerAttack = playerAttack + 6;
              playerMoney = playerMoney - 7;
              }
              else {
                window.alert("you don't have enough money!")
              }
              break;

              case "leave":
              case "LEAVE":
                window.alert("Leaving the store.");
                break;

                default:
                  window.alert("You did not pick a valid option. Try again.");

                  shop();
            break;
        }
      };


startGame();