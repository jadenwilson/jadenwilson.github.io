var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY - 110},
                { "type": "sawblade", "x": 600, "y": groundY - 110},
                { "type": "sawblade", "x": 2000, "y": groundY - 110},
                { "type": "sawblade", "x": 3000, "y": groundY - 110},
                { "type": "sawblade", "x": 4000, "y": groundY - 110},
                { "type": "sawblade", "x": 5000, "y": groundY - 110},
                { "type": "sawblade", "x": 1200, "y": groundY - 10},
                { "type": "sawblade", "x": 2200, "y": groundY - 10},
                { "type": "sawblade", "x": 1800, "y": groundY - 10},
                { "type": "sawblade", "x": 1500, "y": groundY - 10},
                { "type": "sawblade", "x": 2500, "y": groundY - 10},
                { "type": "sawblade", "x": 3500, "y": groundY - 10},
                { "type": "sawblade", "x": 4500, "y": groundY - 10},
                { "type": "sawblade", "x": 5500, "y": groundY - 10},

                { "type": "laserbeam", "x": 1500, "y": groundY - 110},
                { "type": "laserbeam", "x": 3000, "y": groundY - 110},
                { "type": "laserbeam", "x": 6000, "y": groundY - 110},
                { "type": "laserbeam", "x": 7500, "y": groundY - 110},
                { "type": "laserbeam", "x": 3500, "y": groundY - 110},
                { "type": "laserbeam", "x": 8000, "y": groundY - 110},
                { "type": "laserbeam", "x": 10500, "y": groundY - 110},
                { "type": "laserbeam", "x": 15000, "y": groundY - 110},
                
                { "type": "enemyOne", "x": 680, "y": groundY - 110},
                { "type": "enemyOne", "x": 680, "y": groundY - 110},
                { "type": "enemyOne", "x": 1000, "y": groundY - 110},
                { "type": "enemyOne", "x": 3800, "y": groundY - 110},
                { "type": "enemyOne", "x": 3500, "y": groundY - 110},
                { "type": "enemyOne", "x": 2800, "y": groundY - 110},
                { "type": "enemyOne", "x": 4400, "y": groundY - 110},

                { "type": "enemyTwo", "x": 800, "y": groundY - 70},
                { "type": "enemyTwo", "x": 1350, "y": groundY - 70},
                { "type": "enemyTwo", "x": 1760, "y": groundY - 70},
                { "type": "enemyTwo", "x": 2900, "y": groundY - 70},
                { "type": "enemyTwo", "x": 3900, "y": groundY - 70},
                { "type": "enemyTwo", "x": 4800, "y": groundY - 70},
                { "type": "enemyTwo", "x": 5200, "y": groundY - 70},
                { "type": "enemyTwo", "x": 5700, "y": groundY - 70},
                
                { "type": "reward", "x": 700, "y": groundY - 60},
                { "type": "reward", "x": 950, "y": groundY - 60},
                { "type": "reward", "x": 1800, "y": groundY - 60},
                { "type": "reward", "x": 2200, "y": groundY - 60},
                { "type": "reward", "x": 3800, "y": groundY - 60},
                { "type": "reward", "x": 4200, "y": groundY - 60},
                { "type": "reward", "x": 4900, "y": groundY - 60},
                { "type": "reward", "x": 5300, "y": groundY - 60},

            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        
        // creates a sawBlade at any given x and y value
        function createSawBlade(x, y){
            var hitZoneSize = 25;// the size of the hitzone assigned to the variable hitZoneSize
            var damageFromObstacle = 10;// sets the damage amount and assigns to a variable called damageFromObsticale
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);// creats the obsticale and assigns it to the sawBladeHitZone
            sawBladeHitZone.x = x;// assigns the x value using the argument passed as the x parameter
            sawBladeHitZone.y = y;// assigns the y value using the argument passed as the y parameter
            game.addGameItem(sawBladeHitZone);// adds the hitzone to the game  
            var obstacleImage = draw.bitmap("img/sawblade.png");// draws the image as a bitmap and stores it to the variable obstacleImage
            sawBladeHitZone.addChild(obstacleImage);// adds obstacleImage as a child of the sawBladeHitZone
            obstacleImage.x = -25;// modify the x value of the image to line up with the hitzone
            obstacleImage.y = -25;// modify the y value of the image to line up with the hitzone

        }

        function createLaserBeam(x, y){
            var hitZoneSize = 25;// the size of the hitzone assigned to the variable hitZoneSize
            var damageFromObstacle = 50;// sets the damage amount and assigns to a variable called damageFromObsticale
            var laserBeamHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);// creats the obsticale and assigns it to the sawBladeHitZone
            laserBeamHitZone.x = x;// assigns the x value using the argument passed as the x parameter
            laserBeamHitZone.y = y;// assigns the y value using the argument passed as the y parameter
            game.addGameItem(laserBeamHitZone);// adds the hitzone to the game  
            var obstacleImage = draw.bitmap("img/LaserBeam.png");// draws the image as a bitmap and stores it to the variable obstacleImage
            laserBeamHitZone.addChild(obstacleImage);// adds obstacleImage as a child of the sawBladeHitZone
            obstacleImage.x = -25;// modify the x value of the image to line up with the hitzone
            obstacleImage.y = -25;// modify the y value of the image to line up with the hitzone
            laserBeamHitZone.velocityX = -5;
            laserBeamHitZone.scaleX = 0.1;
            laserBeamHitZone.scaleY = 0.1;

        }

        function createSpikes(x, y){
            var hitZoneSize = 25;// the size of the hitzone assigned to the variable hitZoneSize
            var damageFromObstacle = 10;// sets the damage amount and assigns to a variable called damageFromObsticale
            var spikeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);// creats the obsticale and assigns it to the sawBladeHitZone
            spikeHitZone.x = x;// assigns the x value using the argument passed as the x parameter
            spikeHitZone.y = y;// assigns the y value using the argument passed as the y parameter
            game.addGameItem(spikeHitZone);// adds the hitzone to the game  
            var obstacleImage = draw.bitmap("img/sawblade.png");// draws the image as a bitmap and stores it to the variable obstacleImage
            spikeHitZone.addChild(obstacleImage);// adds obstacleImage as a child of the sawBladeHitZone
            obstacleImage.x = -25;// modify the x value of the image to line up with the hitzone
            obstacleImage.y = -25;// modify the y value of the image to line up with the hitzone

        }

        
        function createEnemyOne (x, y) {
            var enemyOne = game.createGameItem("enemyOne", 25);// create the gameItem and store it to the variable enemy
            var redSquareOne = draw.bitmap("img/EnemyOne.png");
            /*
            var redSquare = draw.rect(50, 50, "red");// draws a rectangle and store it in the variable redSquare
            */
            redSquareOne.x = -25;// stores a value as the x value of the gameItem
            redSquareOne.y = -25;// stores a value as the y value of the gameItem
            enemyOne.addChild(redSquareOne);// adds the gameItem as a child of enemy
            enemyOne.x = x;// stores the value passed as the x argument as enemy's x value 
            enemyOne.y = y;// stores the value passed as the y argument as enemy's y value 
            game.addGameItem(enemyOne);// adds the enemy as an item to the game
            enemyOne.velocityX = -4;// assigns a value to the velocityX of the enemy to make it move 
            redSquareOne.scaleX = 0.1
            redSquareOne.scaleY = 0.1

            enemyOne.onPlayerCollision = function () {
                game.changeIntegrity(-10);// subtracts from the health when Halle collides with enemy
            };
            enemyOne.onProjectileCollision = function (){
                game.increaseScore(100);//increases the score when Halle shoots the enemy
                game.changeIntegrity(10);// increase Halles health when shooting the enemy
                enemyOne.fadeOut();// fades out the enemy when Halle shoots the enemy
            }
        }

        function createEnemyTwo (x, y) {
            var enemyTwo = game.createGameItem("enemyTwo", 25);// create the gameItem and store it to the variable enemy
            var redSquareTwo = draw.bitmap("img/EnemyTwo.png");
            /*
            var redSquare = draw.rect(50, 50, "red");// draws a rectangle and store it in the variable redSquare
            */
            redSquareTwo.x = -25;// stores a value as the x value of the gameItem
            redSquareTwo.y = -25;// stores a value as the y value of the gameItem
            enemyTwo.addChild(redSquareTwo);// adds the gameItem as a child of enemy
            enemyTwo.x = x;// stores the value passed as the x argument as enemy's x value 
            enemyTwo.y = y;// stores the value passed as the y argument as enemy's y value 
            game.addGameItem(enemyTwo);// adds the enemy as an item to the game
            enemyTwo.velocityX = -2;// assigns a value to the velocityX of the enemy to make it move 
            redSquareTwo.scaleX = 0.8
            redSquareTwo.scaleY = 0.8

            enemyTwo.onPlayerCollision = function () {
                game.changeIntegrity(-10);// subtracts from the health when Halle collides with enemy
            };
            enemyTwo.onProjectileCollision = function (){
                game.increaseScore(100);//increases the score when Halle shoots the enemy
                game.changeIntegrity(10);// increase Halles health when shooting the enemy
                enemyTwo.fadeOut();// fades out the enemy when Halle shoots the enemy
            }
        }
        

        function createReward (x, y) {
            var reward = game.createGameItem("reward", 25);// create the gameItem and store it to the variable reward
            /*
            var blueSquare = draw.rect(50, 50, "blue");// draws a rectangle and store it in the variable blueSquare
            */
            var blueSquare = draw.bitmap("img/Reward.png");
            blueSquare.x = -25;// stores a value as the x value of the gameItem
            blueSquare.y = -25;// stores a value as the y value of the gameItem
            reward.addChild(blueSquare);// adds the gameItem as a child of reward
            reward.x = x;// stores the value passed as the x argument as reward's x value 
            reward.y = y;// stores the value passed as the x argument as reward's y value
            game.addGameItem(reward);// adds the reward as an item to the game
            reward.velocityX = -3;// assigns a value to the velocityX of the reward to make it move 
            blueSquare.scaleX = 0.1
            blueSquare.scaleY = 0.1
           
            reward.onProjectileCollision = function (){
                game.increaseScore(100);//increases the score when Halle shoots the reward
                game.changeIntegrity(50);// increase Halles health when shooting the reward
                reward.fadeOut();// fades out the reward when Halle shoots the reward
            }

           
        }

        // loop for gameItems
        for (var i = 0; i < levelData.gameItems.length; i++){
            var gameItem = levelData.gameItems[i];// assigns the current index of the gameItems array to the variable gameItem

            if (gameItem.type === "sawblade"){// checks the type of the game item 
                createSawBlade(gameItem.x, gameItem.y);// if the type is true then it excuctes createSawBlade
            }
            if (gameItem.type === "laserbeam"){// checks the type of the game item 
                createLaserBeam(gameItem.x, gameItem.y);// if the type is true then it excuctes createSawBlade
            }
            if (gameItem.type === "enemyOne"){// checks the type of the game item
                createEnemyOne(gameItem.x, gameItem.y);// if the type is true then it excuctes createEnemy
            }
            if (gameItem.type === "enemyTwo"){// checks the type of the game item
                createEnemyTwo(gameItem.x, gameItem.y);// if the type is true then it excuctes createEnemy
            }
            if (gameItem.type === "reward"){// checks the type of the game item
                createReward(gameItem.x, gameItem.y);// if the type is true then it excuctes createReward
            }
        }


        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
