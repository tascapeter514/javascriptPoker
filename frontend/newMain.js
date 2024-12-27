const createCard = (i) => {
    const suits = ['S', 'H', 'D', 'C'];
    const faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
    const card = faces[i % 13] + suits[Math.floor(i/13)]
    return card
}

const displayCard = (c) => {
    console.log('card:', c)
    let split = c.split('')
    console.log(split.length)
    const suitHash = {'S': '♤', 'H': '♡', 'D': '♦', 'C': '♧'}

    let [face, suit] = split.length > 2 ? [split[0] + split[1], split[2]] : split
    console.log(face, suit)
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

console.log(displayHand(createHand(0, 12)))
// console.log(displayCard(createCard(9)))








// console.log(displayCard(createCard(12)))
