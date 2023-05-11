const { add } = require('../calculator.js');

test('add two numbers', () => {
    const result = add(1, 2);
    expect(result).toBe(3);
});

test('add negative numbers', () => {
    const result = add(-1, -2);
    expect(result).toBe(-3);
});

test('division by zero', () => {
    expect(() => {
        divide(5, 0);
    }).toThrow('Division by zero');
});



