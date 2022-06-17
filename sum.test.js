const sum = require('./sum');
test('test a sum function', () => {
    expect(sum(2,8)).toBe(10)
})

//negative test a sum function

test('negative test a sum function ', () => {
    expect(sum(2,8)).not.toBe(8)
})