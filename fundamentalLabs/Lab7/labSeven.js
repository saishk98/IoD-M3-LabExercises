/*const basketballGame = { 
    score: 0, 
    freeThrow() { 
        this.score++; 
    }, 
    basket() { 
        this.score += 2; 
    }, 
    threePointer() { 
        this.score += 3; 
    }, 
    halfTime() { 
        console.log('Halftime score is '+this.score); 
    } 
} 
 
//modify each of the above object methods to enable function chaining as below: 
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();*/

const basketballGame = { 
    score: 0,
    fouls: 0,
    freeThrow() { 
        this.score++; 
        return this;
    }, 
    basket() { 
        this.score += 2; 
        return this;
    }, 
    threePointer() { 
        this.score += 3; 
        return this;
    }, 
    halfTime() { 
        console.log('Halftime score is ' + this.score + ' with ' + this.fouls + ' fouls'); 
        return this;
    },
    fullTime() {
        console.log('Full-time score is ' + this.score + ' with ' + this.fouls + ' fouls');
        return this;
    },
    incrementFouls() {
        this.fouls++;
        return this;
    }
};

// Test chaining
basketballGame
    .basket()
    .freeThrow()
    .freeThrow()
    .basket()
    .threePointer()
    .incrementFouls()
    .incrementFouls()
    .halfTime()
    .threePointer()
    .incrementFouls()
    .fullTime();

// a) Each method now returns this to enable method chaining. 
// b) Added a new method fullTime to print the full-time final score. 
// c) Added a new property fouls and a method incrementFouls to keep track of and increment fouls. Included foul count in the halfTime and fullTime messages. 
// d) Tested the object by chaining all the method calls together in different combinations.