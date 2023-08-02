console.log('6-odd-even-number-loop');

function isOddEvenNumber(curLimit) {
  for(let i = 0; i <= curLimit; i++) {
  

    const alertMessage = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i , alertMessage);
  }
}

isOddEvenNumber(10);
// isOddEvenNumber(17);