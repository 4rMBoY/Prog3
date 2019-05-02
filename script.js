var grassArr = [];
var grassEater = [];
var predator = [];
var nagibator = [];
var smasher = [];

var matrix = [];

var side = 50;

function setup(){
    for(y = 0; y <= 20; y++){
        matrix[y] = [];
        for(x = 0; x <= 20; x++){
            var randMatrix = Math.floor(random(0,100));
            if(randMatrix <= 10){
                matrix[y][x] = 5;
            }
            else if(10 < randMatrix && randMatrix <= 15){
                matrix[y][x] = 4;
            }
            else if(15 < randMatrix && randMatrix <= 25){
                matrix[y][x] = 3;
            }
            else if(25 < randMatrix && randMatrix <= 50){
                matrix[y][x] = 2;
            }
            else if(50 < randMatrix && randMatrix <= 70){
                matrix[y][x] = 1;
            }
            else if(70 < randMatrix && randMatrix <= 100){
                matrix[y][x] = 0;
            }   
        }          
    }

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("#acacac");

    for(var y = 0; y < matrix.length; ++y){
        for(var x = 0; x < matrix[y].length; ++x){
            if(matrix[y][x] == 1){
                var grass = new Grass(x,y);
                grassArr.push(grass);
            }
            else if(matrix[y][x] == 2){
                var grassEaterArr = new GrassEater(x,y);
                grassEater.push(grassEaterArr);
            
            }
            else if(matrix[y][x] == 3){
                var predatorArr = new Predator(x,y);
                predator.push(predatorArr)
            }
            else if(matrix[y][x] == 4){
                var nagibatorArr = new Nagibator(x,y);
                nagibator.push(nagibatorArr);
            }
            else if(matrix[y][x] == 5){
                var smasherArr = new Smasher(x,y);
                smasher.push(smasherArr);
            }
        }
    }
}

function draw(){
    for(var y = 0; y < matrix.length; y++){
        for(var x = 0; x < matrix[y].length; x++){
            if(matrix[y][x] == 1){
                fill("green");
            }
            else if(matrix[y][x] == 2){
                fill("yellow");
            }
            else if(matrix[y][x] == 3){
                fill("red");
            }
            else if(matrix[y][x] == 4){
                fill("black");
            }
            else if(matrix[y][x] == 5){
                fill("blue");
            }
            else if(matrix[y][x] == 0){
                fill("#acacac");
            }
            rect(x * side, y * side, side, side);
        }
    }
    for(var i in grassArr){
        grassArr[i].mul();    
    }
    for(var i in grassEater){
        grassEater[i].eat();
    }
    for(var i in predator){
        predator[i].eat();
    }
    for(var i in nagibator){
        nagibator[i].eat();
    }
    for(var i in smasher){
        smasher[i].eat();
    }
}
