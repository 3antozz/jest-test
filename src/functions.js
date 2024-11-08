function capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function reverseString (string) {
    return string.split('').reverse().join('');
}

const calculator = {
    add: function (a, b) {
        return a+b;
    },
    subtract: function (a, b) {
        return a-b;
    },
    divide: function (a, b) {
       return b === 0 ? "ERROR" :  a/b;
    },
    multiply: function (a, b) {
        return a*b;
    }
}

function caesarCipher(str, shift) {
    var output = "";
     
    for (var i = 0; i < str.length; i++) {
      var ascii = str[i].charCodeAt();
       
      if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
        ascii += shift;
        if ((ascii > 90 && str[i] <= 'Z') || ascii > 122) {
          ascii -= 26;
        }
      }
       
      output += String.fromCharCode(ascii);
    }
    return output;
  }

  function analyzeArray (array) {
    if (array.length <= 0) {
        return 'ERROR'
    }
    let sum = 0;
    array.forEach((num) => sum += num)
    let min = array.reduce((prev, curr) => prev > curr ? curr : prev)
    let max = array.reduce((prev, curr) => prev > curr ? prev : curr)
    return {
        average: sum/array.length,
        min: min,
        max: max,
        length: array.length
    }
  }


module.exports = {capitalize, reverseString, calculator, caesarCipher, analyzeArray};
