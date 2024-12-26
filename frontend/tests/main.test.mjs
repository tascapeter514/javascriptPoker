import  test  from 'node:test'
import assert from 'node:assert'
import {findKind} from '../main.js'
// import {addTest} from '../main.js'

// console.log('add test:', addTest)
// console.log('assert:', assert)


// test('add test should return the correct value', () => {
//     const result = addTest(2, 3);
//     assert.strictEqual(result, 5)
// })


test('find kind should find every pair within a given hand', () => {
    const hand = [{suit: 'Spades', face: 'King', rank: 12},
        {suit: 'Hearts', face: 'King', rank: 12},
        {suit: 'Diamonds', face: 'King', rank: 12},
        {suit: 'Spades', face: 'Queen', rank: 11},
        {suit: 'Clubs', face: 'Jack', rank: 10}
    ]

    let pairs = findKind(hand);
    assert.deepStrictEqual(pairs, [{suit: 'Spades', face: 'King', rank: 12},
        {suit: 'Hearts', face: 'King', rank: 12},
        {suit: 'Diamonds', face: 'King', rank: 12}])
})

test('find two of a kind in the given pair', () => {
    const secondHand = [{suit: 'Spades', face: '10', rank: 9},
        {suit: 'Hearts', face: 'King', rank: 12},
        {suit: 'Diamonds', face: 'King', rank: 12},
        {suit: 'Spades', face: 'Jack', rank: 10},
        {suit: 'Clubs', face: 'Jack', rank: 10}
    ]


    let twoOfAKind = findKind(secondHand);
    assert.deepStrictEqual(twoOfAKind,[
        {suit: 'Hearts', face: 'King', rank: 12},
        {suit: 'Diamonds', face: 'King', rank: 12},
        {suit: 'Spades', face: 'Jack', rank: 10},
        {suit: 'Clubs', face: 'Jack', rank: 10}
    ]) 

})
