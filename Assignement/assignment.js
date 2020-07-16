//***************** Calculate feet to mile */  
function feetToMile(feetValue){
    if(typeof(feetValue) != "number") return "Please enter valid number";
    else if(feetValue < 0) return "Distance can't be negative";
    else return feetValue/5280;  // because 1 mile = 5280 feet
}

//console.log(feetToMile(2));

//*********************Wood Counter */

function woodCalculator(chair,table, bed){
    totalWood = chair*1 + table*3 + bed*5;
    if(typeof(chair) != 'number' || typeof(table) != 'number' || typeof(bed) != 'number') return 'Value must be a number.';
    else if(chair < 0 || table < 0 || bed < 0 ) return 'Value must be positive.';
    else return totalWood;
}

//console.log(woodCalculator(1, 'f', 3));


//********************Counting brick */ 
function brickCalculator(floor){
    brickPerFeet = 1000;

    if(floor < 0) return "Floor Can't Be negative."; // Checking input number is negative
    else if(typeof(floor) != "number") return "Please write a valid number."; // Checking if the input is valid number
    else if(floor === 0) return 'No floor No brick';

    else if( floor > 0 && floor < 11){
        totalBrick = floor*brickPerFeet*15;
        return totalBrick;
    }
    else if( floor <= 20 && floor > 10){
        floor = floor-10;
        totalBrick =  (10*brickPerFeet*15) + (floor*brickPerFeet*12);
        return totalBrick;
    }
    else{
        floor = floor-20;
        totalBrick = (10*brickPerFeet*15) + (10*brickPerFeet*12) + (floor * brickPerFeet * 10);
        return totalBrick;
    }
}

//console.log(brickCalculator(0));


/******** Tiny Freind */
function tinyFriend(friendName){
    return friendName.reduce((a, b) => a.length <= b.length ? a : b); //using the reduce function of array
}

