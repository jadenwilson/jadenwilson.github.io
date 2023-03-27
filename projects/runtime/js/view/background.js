var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var tardis;
        var buildings = [];
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var ctx = canvas.getContext("2d"); 
            var grd = ctx.createLinearGradient(0,canvasHeight,0,0);
            grd.addColorStop(0.26, "#ffffff");
            grd.addColorStop(0.3,"#C724B1");
            grd.addColorStop(1,"#000000"); 
            grd.addColorStop(0.1,"#000000");
            var backgroundFill = draw.rect(canvasWidth, groundY, grd);
            background.addChild(backgroundFill);
          
            /*
            var backgroundFill = draw.rect(canvasWidth,groundY,'lightyellow');
            background.addChild(backgroundFill);
            */
            // TODO: 3 - Add a moon and starfield
            
            // loop that draw stars
            for(var i = 0; i < 101; i++){
                var circle = draw.circle(2, "white", "LightGray", 2);// draw a circle and stores it in the circle variable
                circle.x = canvasWidth * Math.random();// takes the width of the canvas and multiples times a random decimal and stores it as the x value of the circle
                circle.y = groundY * Math.random();// takes groundY  and multiples i times a random decimal and stores it as the x value of the circle
                background.addChild(circle);// adds that circle to the background as a child
            }

            var moon = draw.bitmap("img/moon.png");// draw the image as a bitmap and stores it to the variable moon 
            moon.x = 300;// creates an x key for the moon object and assigns it a value of 300
            moon.y = 200;// creates an y key for the moon object and assigns it a value of 200
            moon.scaleX = 0.5;// scale the x value of the moon
            moon.scaleY = 0.5;// scale the y value of the moon
            background.addChild(moon);// add the moon as a child to background so it can be seen
            
            

            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            var buildingHeights = [300, 150, 175, 200, 275];// created an array called buildingHeight and stores them in the variable building height
            var buildingColors = ["black", "green", "red", "orange", "blue"]// created an array called buildingColors and stored them in the variable building colors
            var building;
            for (var i = 0; i < buildingHeights.length; ++i) {
                building = draw.rect(75, buildingHeights[i], buildingColors[i], "Black", 1);// draws a rectangle and stores it in the building variable
                building.x = 200 * i;// mulitplies 200 times current iteration of the loop so that the building are 200 pixels apart and stores it as the x value of the building
                building.y = groundY - buildingHeights[i];// subtracts buildingHeight from groundY and sets it as the y value 
                background.addChild(building);// add the building as a child to the background
                buildings.push(building);// adds the buildings to the buildings array
              }

            // loop that will create buildings 
           /*
            for (var i = 0; i < 5; ++i) {
                var buildingHeight = 300;// creates a variable called buildingHeight and stores 300 as the height of the building
                var building = draw.rect(75, buildingHeight, "LightGray", "Black", 1);// draws a rectangle and stores it in the building variable
                building.x = 200 * i;// mulitplies 200 times current iteration of the loop so that the building are 200 pixels apart and stores it as the x value of the building
                building.y = groundY - buildingHeight;// subtracts buildingHeight from groundY and sets it as the y value 
                background.addChild(building);// add the building as a child to the background
                buildings.push(building);// adds the buildings to the buildings array
              }
            */
            // TODO 4: Part 1 - Add a tree
            /*
            tree = draw.bitmap("img/tree.png");// draws a tree using bitmap and stores it to the variable tree
            tree.x = canvasWidth;// sets the x value of tree 
            tree.y = groundY - 240;// sets the y value of tree
            background.addChild(tree);// adds the tree to the background as a child
            */
           
            tardis = draw.bitmap("img/Tardis.png");// draws a tree using bitmap and stores it to the variable tree
            tardis.x = canvasWidth;// sets the x value of tree 
            tardis.y = groundY - 240;// sets the y value of tree
            background.addChild(tardis);// adds the tree to the background as a child
           
           
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
           /*
            tree.x = tree.x - 3;// takes current x position of the tree and subtracts from the current position to make it move left and reassigns it to tree.x
            */
            tardis.x = tardis.x - 3;
            // checks if the tree has moved off the canvas and if it has it resets to the right side of the canvas
            /*
            if (tree.x < -300) {
            tree.x = canvasWidth;
            }
            */
            if (tardis.x < -300) {
                tardis.x = canvasWidth;
                }
            // TODO 5: Part 2 - Parallax
            //loops through the buildings array to access each index of the array, moves it, and checks its position on the canvas and rests to the right side if it goes off the left           
            for (var i = 0; i < buildings.length; i++){
                var building = buildings[i];
                building.x = building.x - 1;// moves the building
                
                if (building.x < -300) {// checks the position of the building
                    building.x = canvasWidth;// resets the building to the right side of the canvas
                    }
            }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
