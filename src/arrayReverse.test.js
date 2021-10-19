'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['Hello']);

    expect(result).toBeInstanceOf(Array);
  });

  it(`should return an empty string 
  if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should be case sensetive`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`if the length of the first string is 1, 
  and the length of the last is 8,
  then when reversing, the first string in the array will contain
  only the last character from the last string`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should reverse numbers in string`, () => {
    expect(arrayReverse(['1234', '5678'])).toEqual(['8765', '4321']);
  });

  it(`should accept special symbols`, () => {
    expect(arrayReverse(['~><}', '¬&*%'])).toEqual(['%*&¬', '}<>~']);
  });

  it(`should accept Latin letters`, () => {
    expect(arrayReverse(['hello'])).toEqual(['olleh']);
  });

  // write more tests here
});
