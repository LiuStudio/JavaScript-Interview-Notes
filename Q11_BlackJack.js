// playing card games
// standard deck of playing cards:
// 4 suits (clubs, diamonds, hearts, spades)
// 13 cards per suit (2-10, jack, queen, king, ace)

var suits = ["club","diamond","heart","spade"];
var ranks = [1,2,3,4,5,6,7,8,9,10,11,12,13];

var Cards = function Cards(s,r){
    this.suit = suits[s];
    this.rank = ranks[r];
};

var DeckCards = [];
DeckCards = function DeckCards(){    
    for (var i = 0; i<4; i++){
        for(var j=0; j<13; j++){
            var card = new Cards(i,j);
            DeckCards.push(card);
        }
    }
};
//draw numCards of card from location at start from index = cardp

DeckCards.prototype.drawCards = function(cardp, numCards){
    return this.splice(cardp,numCards);
};

DeckCards.prototype.insertCards = function(cardp, cards){
    this.splice.apply(this, [cardp,0].concat(cards));
}

DeckCards.prototype.countCards = function(){
    return this.length;
}

DeckCards.prototype.shuffleCards = function(){

}
var Deck1 = new DeckCards;

// let's build a function to score a blackjack hand
// a blackjack is an arbitrary number of cards
// we don't want to go over 21 unless we have to ("bust")
// royal cards (jack, queen, king) count as 10
// number cards count as their numerical value (2-10)
// aces can count as either 1 or 11 depending on the hand value

blackjack = function(cards){
    var acesCount=0;
    var sum =0;
    
    for (var i=0; i<cards.length; i++){
            if(cards[i].rank ==1){
                acesCount++;    
            }else{
              if (cards[i].rank<=10){
                sum += cards[i].rank;
              }else{
                sum += 10;              
              }
            }
            
     }
     
     if (acesCount>0){
        if (sum + acesCount+10 >21){
            sum += acesCount;
        }else{
            sum += acesCount+10;
        }
     }
     return sum;
}




