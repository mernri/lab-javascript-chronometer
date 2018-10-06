//Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

// cette fonction est le callback de setInterval => ça permet d'avancer d'une seconde à chaque fois 
Chronometer.prototype.timerHandler = function () {
    this.currentTime += 1; 
    this.setTime();
} 


/*
A REVOIR : 
- PAS COMPRIS LE LE BIND(THIS)
*/


// APPUIE SUR LE BOUTON START
Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval (this.timerHandler.bind(this), 1000);
};

// DEFINIT LES MINUTES
Chronometer.prototype.setMinutes = function (currentTime) {
    this.min = Math.floor(this.currentTime/60);
    return this.min
};

// DEFINIT LES SECONDES
Chronometer.prototype.setSeconds = function (currentTime) {
    this.sec = (this.currentTime % 60);
    return this.sec
};

// TRANSFORME EN TWO DIGITS SI C'EST UN DIGIT
Chronometer.prototype.twoDigitsNumber = function (number) {
    if (number < 10) {
        return "0" + number;
    }
    return ""+number;
};

// DEFINIT LES MINUTES ET SECONDES 
Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setSeconds(this.currentTime));
    var seconds = this.twoDigitsNumber(this.setSeconds(this.currentTime));
};

// APUIE SUR LE BOUTON STOP
Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

// APPUIE SUR LE BOUTON RESET
Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {

};

Chronometer.prototype.setMilliseconds = function () {

};