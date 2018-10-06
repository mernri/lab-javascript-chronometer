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


// PAS COMPRIS LE LE BIND(THIS)
Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval (this.timerHandler.bind(this), 1000);
};

Chronometer.prototype.setMinutes = function (currentTime) {
    this.min = Math.floor(this.currentTime/60);
    return this.min
};

Chronometer.prototype.setSeconds = function (currentTime) {
    this.sec = (this.currentTime % 60);
    return this.sec
};

Chronometer.prototype.twoDigitsNumber = function (number) {
    if (number < 10) {
        return "0" + number;
    }
    return ""+number;
};

Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setSeconds(this.currentTime));
    var seconds = this.twoDigitsNumber(this.setSeconds(this.currentTime));
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {

};

Chronometer.prototype.setMilliseconds = function () {

};