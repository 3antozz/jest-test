const {capitalize, reverseString, calculator, caesarCipher, analyzeArray} = require('./functions');
describe('Test capitalize function', () => {
    test('returns string with the first character capitalized', () => {
        expect(capitalize('liver')).toBe('Liver');
    })
    test('already correct format', () => {
        expect(capitalize('Boggus')).toBe('Boggus');
    })
    test('full caps string', () => {
        expect(capitalize('POPO')).toBe('Popo');
    })
    test('empty string', () => {
        expect(capitalize('')).toBe('');
    })
})

describe('Test reverseString function', () => {
    test('normal string', () => {
        expect(reverseString('hello')).toBe('olleh');
    })
    test('reversed string', () => {
        expect(reverseString('rellik')).toBe('killer');
    })
    test('empty string', () => {
        expect(reverseString('')).toBe('');
    })
})


describe('Test calculator functions', () => {
    test('add', () => {
        expect(calculator.add(5,7)).toBe(12);
    })
    test('subtract', () => {
        expect(calculator.subtract(5,7)).toBe(-2);
    })
    test('divide', () => {
        expect(calculator.divide(6,2)).toBe(3);
    })
    test('divide by 0', () => {
        expect(calculator.divide(8,0)).toBe('ERROR');
    })
    test('multiply', () => {
        expect(calculator.multiply(3,2)).toBe(6);
    })
})

describe('Test Caesar Cipher function', () => {
    test('wrapping', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    })
    test('case sensitive', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    })
    test('punctuation', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    })
})

describe('Test array analyze function', () => {
    const object = analyzeArray([1,8,3,4,2,6]);
    const object2 = analyzeArray([]);
    const object3 = analyzeArray([1,2,3]);
    const object4 = analyzeArray([2]);
    test('array', () => {
        expect(object).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
         });
    })
    test('empty array', () => {
        expect(object2).toBe('ERROR');
    })
    test('1 item array', () => {
        expect(object4).toEqual({
            average: 2,
            min: 2,
            max: 2,
            length: 1
         });
    })
    test('array', () => {
        expect(object3).toEqual({
            average: 2,
            min: 1,
            max: 3,
            length: 3
         });
    })
})

