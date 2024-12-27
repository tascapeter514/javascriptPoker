
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

const straight = [{ suit: 'Hearts', face: 'King', rank: 12 },
    { suit: 'Spades', face: 'Jack', rank: 10 },
    { suit: 'Diamonds', face: 10, rank: 9 },
    { suit: 'Clubs', face: 9, rank: 8 },
    { suit: 'Diamonds', face: 'Queen', rank: 11 }]

const flush = [{ suit: 'Hearts', face: 'King', rank: 12 },
    { suit: 'Hearts', face: 'Jack', rank: 10 },
    { suit: 'Hearts', face: 10, rank: 9 },
    { suit: 'Hearts', face: 9, rank: 8 },
    { suit: 'Hearts', face: 'Queen', rank: 11 }]

    const fullHouse = [{ suit: 'Hearts', face: 2, rank: 0 },
        { suit: 'Spades', face: 2, rank: 0},
        { suit: 'Diamonds', face: 2, rank: 0},
        { suit: 'Clubs', face: 3, rank: 1 },
        { suit: 'Diamonds', face: 3, rank: 1 }]

const twoPair = [{ suit: 'Hearts', face: 2, rank: 0 },
    { suit: 'Spades', face: 2, rank: 0},
    { suit: 'Diamonds', face: 4, rank: 2},
    { suit: 'Clubs', face: 3, rank: 1 },
    { suit: 'Diamonds', face: 3, rank: 1 }]

const threePair = [{ suit: 'Hearts', face: 2, rank: 0 },
    { suit: 'Spades', face: 2, rank: 0},
    { suit: 'Diamonds', face: 4, rank: 2},
    { suit: 'Clubs', face: 5, rank: 3 },
    { suit: 'Diamonds', face: 2, rank: 0 }]

const fourPair = [{ suit: 'Hearts', face: 2, rank: 0 },
    { suit: 'Spades', face: 2, rank: 0},
    { suit: 'Diamonds', face: 2, rank: 0},
    { suit: 'Clubs', face: 5, rank: 3 },
    { suit: 'Diamonds', face: 2, rank: 0 }]




const createDeck = () => {
    let d = Array.from({length: 52}, (_, i) => i)
    for (let i = 0; i < d.length; i++) {
        d[i] = i;
    }
    return d
}

const getCard = (index) => {
    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']
    const faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
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


// runGame()kindOfPair()


const deck = createDeck();
const shuffledDeck = shuffle(deck);
const hand = []
for (let i = 0; i <= 5; i++) {
    hand.push(getCard(shuffledDeck.shift()))
}


const findPairs = (h) => {
    let hash = {};
    // let pairs = [];
    for (let hand of h) {
        if (hash[hand.face]) {
            hash[hand.face] += 1;
        } else {
            hash[hand.face] = 1;
        }
    }
    console.log(hash)
    // for (let hand of h) {
    //     if (hash[hand.face] > 1) {
    //         pairs.push(hand)
    //     }
    // }
    
    // return pairs
    return hash
}



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
    return hash

    // h.forEach(hand => {
    //     if (hash[hand.suit] > 1) {
    //         suits.push(hand)
    //     }
    // })
    // return suits
}


// console.log(findSuits(hand))


const isStraight = (h) => {
    console.log(h);
    sort = h.sort((a, b) => a.rank - b.rank)
    console.log(sort)

    for (let i = 0; i < sort.length - 1; i++) {
        let diff = sort[i + 1].rank - sort[i].rank
        if (diff === 1) {
            console.log('Increment by 1')
            console.log(sort[i].face, sort[i + 1].face)
        } else {
            return False
        }
    }
    return True

}

// console.log(findStraight(straight))

const isFlush = (h) => {
    let suits = findSuits(h)
    console.log(Object.keys(suits))
    return Object.keys(suits).length == 1 ? "True" : "False"
}

const isFullHouse = (h) => {
    console.log('hash:', findPairs(h))
    let result = Object.values(findPairs(h))
    // must distinguish from three of a kind

    let fullHouse = result.filter(r => r === 3 && r === 2)
    return fullHouse.length > 1 ? true : false
}

const kindOfPair = (h) =>  {
    let hash = findPairs(h);
    let isTwoPair = Object.values(hash).filter(v => v === 2)
    let isThreePair = Object.values(hash).filter(v => v === 3)
    let isFourPair = Object.values(hash).filter(v => v === 4)
    // console.log('two pair:', isTwoPair)
    // console.log('three pair:', isThreePair)
    // console.log('three pair length:', isThreePair.length)
    // console.log('four pair:', isFourPair)
    // console.log('four pair:', isFourPair.length)
    // console.log(isFullHouse(h))
    // console.log(!isFullHouse(h))
    if (isFourPair.length > 0) {
        return "Four of a Kind"
    } else if (isTwoPair.length > 1) {
        return 'Two Pair'
    } else if (isThreePair.length > 0 && !isFullHouse(h)) {
        return 'Three of a Kind'
    } else {
        return 'One Pair'
    } 
}

const pokerHands = ['High Card', 'One Pair', 'Two Pair',
    'Three of a Kind', 'Straight', 'Flush', 'Full House', 'Four of a Kind', 'Straight Flush', 'Royal Flush']

// isFullHouse(fullHouse)


console.log(kindOfPair(twoPair))
console.log(kindOfPair(threePair))
console.log(kindOfPair(fourPair))























