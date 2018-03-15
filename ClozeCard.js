// Create a constructor function for creating Cloze-deletion flashcards
var ClozeCard = function(text, cloze) {
    this.full = cloze + " " + text;
    this.cloze = cloze;
    this.partial = "... " + text;
    this.printFull = function() {
        console.log(this.full);
    };
    // this.printCloze = function() {
    //     console.log(this.cloze);
    // };
    this.printPartial = function() {
        console.log(this.partial);
    };
};




module.exports = ClozeCard;