// Create a constructor function for creating Cloze-deletion flashcards
var ClozeCard = function(cloze, partial, full) {
    this.cloze = cloze;
    this.partial = partial;
    this.full = full;
    this.printCloze = function() {
        console.log(this.cloze);
    }
    this.printPartial = function() {
        console.log(this.partial);
    };
    this.printFull = function() {
        console.log(this.full);
    };
};




module.exports = ClozeCard;