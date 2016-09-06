DeckOfCards = require("./Q5_DeckofCards.js");

var deck1 = new DeckOfCards();

var deck2 = new DeckOfCards();


//console.log(JSON.stringify(deck1));

//console.log(JSON.stringify(deck2));

deck1.shuffleMulti(5);
console.log("deck1, after shuffle 5 times is "+JSON.stringify(deck1));
var deck1topcard = deck1.drawOneFromTop();
console.log("deck1, after shuffle 5 times draw on top is "+JSON.stringify(deck1));
console.log("deck1, top card is "+JSON.stringify(deck1topcard));
var deck1bottomcard = deck1.drawOneFromBottom();
console.log("deck1, after shuffle 5 times draw on top and draw bottom is "+JSON.stringify(deck1));
console.log("deck1, bottom card is "+JSON.stringify(deck1bottomcard));
var deck1middlecard = deck1.drawMany(5,4);
console.log("deck1, after draw 4 card from before location index =5 is "+JSON.stringify(deck1));
console.log("deck1, bottom card is "+JSON.stringify(deck1middlecard));
deck1.insertMany(3,deck1topcard.concat(deck1bottomcard).concat(deck1middlecard));
console.log("deck1, after insert(top,bottom,middle)card at before location = index = 3 is "+JSON.stringify(deck1));





deck2.shuffleOnce(20);
console.log("deck2, after shuffle 20 times is "+JSON.stringify(deck2));
