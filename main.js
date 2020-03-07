window.onload = function () {

  const inputLeft = document.querySelector('input[name="leftNumber"]');
  const inputRight = document.querySelector('input[name="rightNumber"]');
  const divRes = document.querySelector('#copy');
  const operation = document.querySelector('select[name="operation"]');
  const btnRes = document.querySelector('input[name="btnRes"]');
  const divHistory = document.querySelector('.history');
  let historySpanCopy;
  let historySpanRes;
  let k = 0;
  let arrayHistory = [];

  btnRes.addEventListener('click', main);
  divRes.addEventListener('click', copyRes);

  function main() {
    let left = +inputLeft.value,
      right = +inputRight.value,
      opr = operation.value;

    if (opr == '+') {
      divRes.value = left + right;
    } else if (opr == '-') {
      divRes.value = left - right;
    } else if (opr == '*') {
      divRes.value = left * right;
    } else if (opr == '/') {
      divRes.value = left / right;
    }

    getArrayHistory()
  }

  function getArrayHistory() {
    historySpanRes = [];

    if (inputLeft.value !== '' && inputRight.value !== '') {
      arrayHistory[k] = {
        numberLeft: inputLeft.value,
        operator: operation.value,
        numberRight: inputRight.value
      }
      k++;
    }

    for (let i = 0; i < arrayHistory.length; i++) {
      historySpanRes.push(`<span> ${arrayHistory[i].numberLeft} ${arrayHistory[i].operator} ${arrayHistory[i].numberRight} </span>`);
    }

    divHistory.innerHTML = historySpanRes.join('');

    historySpanCopy = document.querySelectorAll('.history span');
    for (let i = 0; i < historySpanCopy.length; i++) {
      historySpanCopy[i].addEventListener('click', function () {
        inputLeft.value = arrayHistory[i].numberLeft;
        operation.value = arrayHistory[i].operator;
        inputRight.value = arrayHistory[i].numberRight;
        main();
      });
    }
  }

  function copyRes() {
    var copyText = document.getElementById("copy");

    copyText.select();

    document.execCommand("copy");
  }


}
