const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let exprArr = expr.split('**********');
  let result = [];

  for (let i = 0; i < exprArr.length; i++) {
    let bin = exprArr[i].split('');
    let str = '';

    while (bin.length) {
      let morse = '';
      let x = bin.slice(0, 10);
      bin.splice(0, 10);

      for (let i = 0; i < 10; i += 2) {
        if (x[i] === '1' && x[i + 1] === '0') morse += '.';
        else if (x[i] === '1' && x[i + 1] === '1') morse += '-';
      }
      str += MORSE_TABLE[morse];
    }
    result.push(str);   
  }
  return result.join(' ');

}

module.exports = {
    decode
}