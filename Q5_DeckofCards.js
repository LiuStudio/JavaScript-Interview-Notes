var suit  = ["club", "diamond", "hearts", "spades"];
var	rank  = [1,2,3,4,5,6,7,8,9,10,11,12,13]; 

var Cards = function Cards(s, r) {
	this.suit = suit[s];
	this.rank = rank[r];
};




var DeckCards = function DeckCards(){
	var deck =[];
	for (var s = 0; s < suit.length; s++){
		//(function(suits){
		for (var r = 0; r < rank.length; r++){
			//console.log("s is "+s+ "  r is "+r);
			var card = new Cards(s,r);
			//console.log(JSON.stringify(card));
		deck.push(card);
		}//})(s);
	}
	this.deck = deck;
};

DeckCards.prototype.shuffleOnce = function() {
	for (var i = this.deck.length-1; i>=0; i--){
		var j = Math.floor(Math.random()*i+1);
		var tempcard = this.deck[i];
		this.deck[i] = this.deck[j];
		this.deck[j] = tempcard;
	}
};

DeckCards.prototype.shuffleMulti = function(rep) {
	for (var i = 0; i < rep; i++){
		this.shuffleOnce();
	}
};

//draw numcard cards from array from start from location at index=startp
DeckCards.prototype.drawMany = function(startp,numCard) {
	return this.deck.splice(startp,numCard);
};

DeckCards.prototype.drawManyFromTop = function(n) {
	return this.drawMany(0,n);
};

DeckCards.prototype.drawManyFromBottom = function(n) {
	if(this.deck.length>=n){
		return this.drawMany(this.deck.length-n,n);
	}else{
		return this.deck;
	}
};
//insert array of cards insertcards before index=startp in deck cards
DeckCards.prototype.insertMany = function(startp,insertcards) {
	this.deck.splice.apply(this.deck, [startp,0].concat(insertcards));
};

//insert array of cards insertcards before index=startp in deck cards, method#2
DeckCards.prototype.insertMany2 = function(startp, insertcards) {
	this.deck = this.deck.slice(0,startp).concat(insertcards).concat(this.deck.slice(startp+1));
};

DeckCards.prototype.insertOne = function(startp, card) {
	this.deck.splice(startp,0,card);
};

DeckCards.prototype.drawOneFromTop = function() {
	return this.drawManyFromTop(1);
};

DeckCards.prototype.drawOneFromTop2 = function() {
	return this.deck.shift();
};

DeckCards.prototype.addOneFromTop = function(card) {
	this.deck.unshift(card);
};




DeckCards.prototype.drawOneFromBottom = function() {
	return this.drawManyFromBottom(1);
};

DeckCards.prototype.drawOneFromBottom2 = function() {
	return this.deck.pop();
};

DeckCards.prototype.addOneFromBottom = function(card) {
	this.deck.push(card);
};

var cardIndexInDeck = function(card){
	if (card){
	    return suit.indexOf(card.suit)*rank.length + card.rank;
	}else {
		return (-1);
	}
}

DeckCards.prototype.sortCards = function(reverseOrder) {
	this.deck.sort(function(a,b){
		var indexInDeck_a = cardIndexInDeck(a);
		var indexInDeck_b = cardIndexInDeck(b);
		if (reverseOrder == 1){
			return(indexInDeck_b - indexInDeck_a);
		}else{
			return(indexInDeck_a - indexInDeck_b);
		}
	});

};
//look at card at location index=cardLocation
DeckCards.prototype.lookAtCard = function(cardLocation) {
	return this.deck.slice(cardLocation,cardLocation+1);
};

//console.log(deck.join(','));

//var deck = new DeckCards();


//console.log(JSON.stringify(deck,null, 2));

module.exports = DeckCards;
/*var newcard = {"suit": suit[0],
			   "rank": rank[0]};

console.log(JSON.stringify(newcard));

var constructcard = new Cards(0,0);
console.log(JSON.stringify(constructcard));*/

