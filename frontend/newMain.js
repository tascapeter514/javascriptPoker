const createCard = (i) => {
    const suits = ['S', 'H', 'D', 'C'];
    const faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
    const card = faces[i % 13] + suits[Math.floor(i/13)]
    return card
}

const displayCard = (c) => {
    // console.log('card:', c)
    let split = c.split('')
    // console.log(split.length)
    const suitHash = {'S': '♤', 'H': '♡', 'D': '♦', 'C': '♧'}

    let [face, suit] = split.length > 2 ? [split[0] + split[1], split[2]] : split
    // console.log(face, suit)
    let temp = suitHash[suit];
    return face + temp
}

const createHand = (start, end) => {
    const hand = []
    for (let i = start; i < end; i++) {
        hand.push(createCard(i))
    }
    return hand
}

const displayHand = (hand) => {
    return hand.map(h => displayCard(h))
}


const makeDeck = () => {
    const values = Array.from(new Array(51), (_, index) => index) 
    const deck = values.map(val => createCard(val))
    let count = deck.length + 1;
    while ((count -= 1)) {
        deck.push(deck.splice(Math.floor(Math.random() * count), 1)[0]);
    }
    return deck
    
}

let deck = makeDeck()

const deal = (d) => {
    const playerArray = [];
    const opponentArray = [];
    for (let i = 5; i >= 1; i--) {
        playerArray.push(d.shift());
        opponentArray.push(d.shift())
    }
    const playerHand = displayHand(playerArray).join(' ');
    const opponentHand = displayHand(opponentArray).join(' ');
    console.log(playerHand);
    console.log(opponentHand)
}

deal(deck)

