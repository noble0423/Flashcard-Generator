// Create a constructor function for creating basic flashcards
var BasicCard = function(front, back) {
    this.type = "basic";
    this.front = front;
    this.back = back;
    this.printFront = function() {
        console.log(this.front);
    };
    this.printBack = function() {
        console.log(this.back);
    };
};






module.exports = BasicCard;