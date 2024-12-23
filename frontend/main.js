

// class Card {
//     constructor(suit, face) {
//         this.face = face;
//         this.suit = suit;
//     }
// }

// class Deck {
//     constructor() {
//         this.deck = []
//     }

//     makeDeck() {
//         for (let suit of suits) {
//             for (let face of faces) {
//                 let card = new Card(suit, face)
//                 // console.log("card:", card)
//                 this.deck.push(card)
//             }

//         }
//         return this.deck
//     }
// }

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

const createDeck = () => {
    let d = Array.from({length: 52}, (_, i) => i)
    for (let i = 0; i < d.length; i++) {
        d[i] = i;
    }
    return d
}

function getSuit(card) {
    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']
    let suit = Math.floor(card / 13);
    return suits[suit]
}

function getFace(card) {
    const faces = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
    let face = card % 13
    return faces[face]
}

const getCard = (index) => {
    let suit = getSuit(index);
    let face = getFace(index);
    let card = {suit, face};
    return card
}



const shuffle = (d) => {
    for (let i = d.length - 1; i > 0; i--) {
        let j = Math.floor((Math.random() * (i + 1)))
        // console.log(`The value of j is ${j}`)
        // console.log(`The value of d[i] is ${d[i]} and the value of d[j] is ${d[j]}`)
        let temp = d[i]
        // console.log(`The temp variable is ${temp} and is also ${d[i]}`)
        d[i] = d[j]
        // console.log(`The value of d[i] is now equal to ${d[i]}`)
        // console.log('deck:', d)
        d[j] = temp
        // console.log(`The value of d[j] is now equal to ${d[j]}`)
        // console.log('deck:', d)
    }
    return d
}


const deal = (shuffled) => {
    let dealt = shuffled.shift()
    let hand = getCard(dealt)
    return hand


}

const decideGame = (first, second) =>  {
    return first.face > second.face ? 'Player One' : 'Player Two'
}

const askPlayer = (input) => {
    if (input != 'Yes' || input != 'No') {
        console.log('Please answer yes or no to continue')
        askPlayer()
        
    } else {
        rl.close();
    }
    
}


const runGame = () => {
    const deck = createDeck();

    const shuffledDeck = shuffle(deck);
    const firstHand = deal(shuffledDeck);
    const secondHand = deal(shuffledDeck);
    // console.log(firstHand, secondHand);
    console.log(`Player One has a ${firstHand.face} of ${firstHand.suit}`)
    console.log(`Player Two has a ${secondHand.face} of ${secondHand.suit}`)
    const winner = decideGame(firstHand, secondHand);
    console.log(`${winner} has the high card and wins the game`) 

    // rl.question("You've drawn a hand. Do you wish to continue? ", askPlayer )
}

runGame()


// let newDeck = Array.from({length: 10}, (_, i) => i)
// console.log(newDeck)
// console.log(shuffle(newDeck))











