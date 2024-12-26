
// const askPlayer = (input) => {
//     if (input != 'Yes' || input != 'No') {
//         console.log('Please answer yes or no to continue')
//         askPlayer()
        
//     } else {
//         rl.close();
//     }
    
// }



// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout

// })
// rl.question("You've drawn a hand. Do you wish to continue? ", askPlayer )



const createDeck = () => {
    let d = Array.from({length: 52}, (_, i) => i)
    for (let i = 0; i < d.length; i++) {
        d[i] = i;
    }
    return d
}

const getCard = (index) => {
    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']
    const faces = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
    const ranks = Array.from({length: 13}, (_, i) => i)
    let suit = suits[Math.floor(index / 13)]
    let face = faces[index % 13]
    let rank = ranks[index % 13]
    let card = {suit, face, rank};
    return card
}


const shuffle = (d) => {
    for (let i = d.length - 1; i > 0; i--) {
        let j = Math.floor((Math.random() * (i + 1)))
        let temp = d[i]
        d[i] = d[j]
        d[j] = temp
    }
    return d
}


const deal = (shuffled) => {
    let dealt = shuffled.shift()
    let hand = getCard(dealt)
    return hand
}

const decideGame = (first, second) =>  {
    if (typeof first.face === 'string' || typeof second.face === 'string'){
        return first.rank > second.rank ? 'Player One' : 'Player Two'
    }
    return first.face > second.face ? 'Player One' : 'Player Two'
}



const runGame = () => {
    const deck = createDeck();
    const shuffledDeck = shuffle(deck);
    const firstHand = deal(shuffledDeck);
    const secondHand = deal(shuffledDeck);


    console.log(`Player One has a ${firstHand.face} of ${firstHand.suit}`)
    console.log(`Player Two has a ${secondHand.face} of ${secondHand.suit}`)

    const winner = decideGame(firstHand, secondHand)
    console.log(`${winner} has the high card and wins the game`) 

    
}


// runGame()


const deck = createDeck();
const shuffledDeck = shuffle(deck);
const hand = []
for (let i = 0; i <= 5; i++) {
    hand.push(getCard(shuffledDeck.shift()))
}


const findKind = (h) => {
    let hash = {};
    let pairs = [];
    for (let hand of h) {
        if (hash[hand.face]) {
            hash[hand.face] += 1;
        } else {
            hash[hand.face] = 1;
        }
    }
    console.log(hash)
    for (let hand of h) {
        if (hash[hand.face] > 1) {
            pairs.push(hand)
        }
    }
    
    return pairs
}


// findKind(hand)
// module.exports.findKind = findKind


const findSuits = (h) => {
    console.log(h)
    let hash = {};
    let suits = [];

    h.forEach(hand => {
        if (hash[hand.suit]) {
            hash[hand.suit] += 1;
        } else {
            hash[hand.suit] = 1
        }
    })
    console.log('hash:', hash)

    h.forEach(hand => {
        if (hash[hand.suit] > 1) {
            suits.push(hand)
        }
    })
    return suits
}


console.log(findSuits(hand))


















