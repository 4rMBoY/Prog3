class Grass{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(){
        var found = [];

        for(var i in this.directions){
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if(matrix[y][x] == 0){
                    found.push(this.directions[i]);
                }
            }    
        }
        return found;
    }
    mul(){
        this.multiply++;
        var newCell = random(this.chooseCell());
        if(this.multiply >= 2 && newCell){
            var newGrass = new Grass(newCell[0], newCell[1],);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
}


class GrassEater{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 14;
        
    }

    Coordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(a){
        this.Coordinates();

        var found = [];

        for(var i in this.directions){
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if(matrix[y][x] == a){
                    found.push(this.directions[i]);
                }   
            }    
        }
        return found;
    }
    move(){
        var newCell1 = random(this.chooseCell(0));
        if(newCell1){
            var x = newCell1[0];
            var y = newCell1[1];
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
        }
    }
    eat(){
        var newCell2 = random(this.chooseCell(1));
        if(newCell2){
            var x = newCell2[0];
            var y = newCell2[1];
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            this.multiply++;
            this.energy++;

            for(var i in grassArr){
                if(x == grassArr[i].x && y == grassArr[i].y){
                    grassArr.splice(i, 1);
                }
            }
            if(this.multiply == 4){
                this.mul();
            }
        }
        else{
            this.move();
            this.energy--;
            if(this.energy == 0){
                this.die();
            }
        }
    }
    mul(){
        var newCell3 = random(this.chooseCell(0));
        if(newCell3){
            var x = newCell3[0];
            var y = newCell3[1];
            this.multiply++;
            var newGrassEater = new GrassEater(x,y);
            grassEater.push(newGrassEater);
            matrix[y][x] = 2;
            this.multiply = 0;
        }
    }
    die(){
        matrix[this.y][this.x] = 0;
        for(var i in grassEater){
            if(this.x == grassEater[i].x && this.y == grassEater[i].y){
                grassEater.splice(i, 1);
            }
        }
    }
}


class Predator{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 8;
    }

    Coordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(a){
        this.Coordinates();

        var found = [];

        for(var i in this.directions){
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if(matrix[y][x] == a){
                    found.push(this.directions[i]);
                }   
            }    
        }
        return found;
    }
    move(){
        var newCell4 = random(this.chooseCell(0));
        if(newCell4){
            var x = newCell4[0];
            var y = newCell4[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
        }
    }
    eat(){
        var newCell5 = random(this.chooseCell(2));
        if(newCell5){
            var x = newCell5[0];
            var y = newCell5[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            this.multiply++;
            this.energy++;

            for(var i in grassEater){
                if(x == grassEater[i].x && y == grassEater[i].y){
                    grassEater.splice(i, 1);
                }
            }
            if(this.multiply == 7){
                this.mul();
            }
        }
        else{
            this.move();
            this.energy--;
            if(this.energy == 0){
                this.die();
            }
        }
    }
    mul(){
        var newCell6 = random(this.chooseCell(0));
        if(newCell6){
            var x = newCell6[0];
            var y = newCell6[1];
            this.multiply++;
            var newPredator = new Predator(x,y);
            predator.push(newPredator);
            matrix[y][x] = 3;
            this.multiply = 0;
        }
    }
    die(){
        matrix[this.y][this.x] = 0;
        for(var i in predator){
            if(this.x == predator[i].x && this.y == predator[i].y){
                predator.splice(i, 1);
            }
        }
    }
}

class Nagibator{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 5;
    }

    Coordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(a){   
        this.Coordinates();

        var found = [];

        for(var i in this.directions){
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if(matrix[y][x] == a){
                    found.push(this.directions[i]);
                }   
            }    
        }
        return found;
    }
    move(){
        var newCell7 = random(this.chooseCell(0));
        if(newCell7){
            var x = newCell7[0];
            var y = newCell7[1];
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
        }
    }
    eat(){
        var newCell8 = this.chooseCell(2);
        var newCell9 = this.chooseCell(3);
        var newCell10 = newCell8.concat(newCell9);
        var newCell11 = random(newCell10);
        if(newCell11){
            var x = newCell11[0];
            var y = newCell11[1];
            var r = matrix[y][x]; 
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            this.multiply++;
            this.energy++;

            if(r == 2){
                for(var i in grassEater){
                    if(x == grassEater[i].x && y == grassEater[i].y){
                        grassEater.splice(i,1);
                    }
                }
            }
            else if(r == 3){
                for(var i in predator){
                    if(x == predator[i].x && y == predator[i].y){
                        predator.splice(i,1);
                    }
                }
            }
            if(this.multiply == 10){
                this.mul();
            }
        }
        else{
            this.move();
            this.energy--;
            if(this.energy == 0){
                this.die();
            }
        }
    }
    mul(){
        var newCell12 = random(this.chooseCell(0));
        if(newCell12){
            var x = newCell12[0];
            var y = newCell12[1];
            this.multiply++;
            var newNagibator = new Nagibator(x,y);
            nagibator.push(newNagibator);
            matrix[y][x] = 4;
            this.multiply = 0;
        }
    }
    die(){
        matrix[this.y][this.x] = 0;
        for(var i in nagibator){
            if(this.x == nagibator[i].x && this.y == nagibator[i].y){
                nagibator.splice(i, 1);
            }
        }
    }
}

class Smasher{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 15;
    }

    Coordinates(){
        this.directions = [
            [this.x + 1, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x + 1, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y - 1],

            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(a){
        this.Coordinates();

        var found = [];

        for(var i in this.directions){
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if(matrix[y][x] == a){
                    found.push(this.directions[i]);
                }   
            }    
        }
        return found;
        
    }

    move(){
        var newCell13 = random(this.chooseCell(0));
        if(newCell13){
            var x = newCell13[0];
            var y = newCell13[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
        }
    }
    eat(){
        var newCell13 = random(this.chooseCell(3));
        if(newCell13){
            var x = newCell13[0];
            var y = newCell13[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            this.multiply++;
            this.energy++;

            for(var i in smasher){
                if(x == smasher[i].x && y == smasher[i].y){
                    smasher.splice(i, 1);
                }
            }
            if(this.multiply == 9){
                this.mul();
            }
        }
        else{
            this.move();
            this.energy--;
            if(this.energy == 0){
                this.die();
            }
        }
    }
    mul(){
        var newCell14 = random(this.chooseCell(0));
        if(newCell14){
            var x = newCell14[0];
            var y = newCell14[1];
            this.multiply++;
            var newSmasher = new Smasher(x,y);
            smasher.push(newSmasher);
            matrix[y][x] = 5;
            this.multiply = 0;
        }
    }
    die(){
        matrix[this.y][this.x] = 0;
        for(var i in smasher){
            if(this.x == smasher[i].x && this.y == smasher[i].y){
                smasher.splice(i, 1);
            }
        }
    }
}
