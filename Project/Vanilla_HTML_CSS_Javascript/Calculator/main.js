let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('button');
let equation = '';
let screenValue = '';
let powerOn = false;
for (let button of buttons) {
  button.addEventListener('click', (e) => {
    e.target.style.background = '#313131';
    e.target.style.boxShadow = 'none';
    setTimeout(() => {
      e.target.style.background = '#344250';
      e.target.style.boxShadow = '2px 2px 1px #6C6C6C';
    }, 100)
    if (e.target.innerText === 'C') {
      screenValue = '';
      equation = '';
      screen.value = screenValue;
    }
    else if (e.target.innerText === 'B') {
      screenValue = screenValue.substring(0, (screenValue.length - 1));
      equation = equation.substring(0, (equation.length - 1));
      screen.value = screenValue;
    }
    else if (e.target.innerText === '×') {
      if (equation.endsWith('*')) {
        console.log('Wrong input');
      } else {
        equation += '*';
        screenValue += '×';
        screen.value = screenValue;
      }
    }
    else if (e.target.innerText === '÷') {
      if (equation.endsWith('/')) {
        console.log('Wrong input');
      } else {
        equation += '/';
        screenValue += '÷';
        screen.value = screenValue;
      }
    }
    else if (e.target.innerText === '%') {
      if (equation.length > 0) {
        let regex = /[0-9\.]{0,10}$/;
        let arr = regex.exec(equation);
        equation = equation.substring(0, arr['index']);
        let num = (Number(arr)) / 100;
        equation += num;
        screenValue += '%';
        screen.value = screenValue;
      } else {
        console.log('Not possible');
      }
    }
    else if (e.target.innerText === '+') {
      if (equation.endsWith('+')) {
        console.log('Wrong input');
      } else {
        equation += '+';
        screenValue += '+';
        screen.value = screenValue;
      }
    }
    else if (e.target.innerText === '-') {
      if (equation.endsWith('-')) {
        console.log('Wrong input');
      } else {
        equation += '-';
        screenValue += '-';
        screen.value = screenValue;
      }
    }
    else if (e.target.innerText === '=') {
      if (equation === '') {

      } else {
        try {
          screenValue = String(eval(equation));
          screen.value = screenValue;
          equation = String(screenValue);
        } catch (e) {
          screenValue = 'Syntex Error';
          screen.value = screenValue;
          screenValue = '';
        }
      }
    }
    else if (e.target.innerText === 'xx') {
      equation += '**';
      screenValue += ' Power ';
      screen.value = screenValue;
    }
    else {
      console.log(equation);
      equation += e.target.innerText;
      screenValue += e.target.innerText;
      screen.value = screenValue;
    }
  })
}
