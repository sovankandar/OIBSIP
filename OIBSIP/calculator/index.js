const screen = document.getElementById('screen');
const buttonsContainer = document.getElementById('buttons');
const historyDisplay = document.getElementById('history');
let history = []; 


const buttonValues = [
  'C', '←', '/', 'x', 
  '7', '8', '9', '-', 
  '4', '5', '6', '+', 
  '1', '2', '3', '=', 
  '0', '.', 'Hist'
];

for (let value of buttonValues) {
  const button = document.createElement('button');
  button.classList.add('btn');
  button.textContent = value;

  
  if (['C'].includes(value)) {
    button.classList.add('btn-clear');
  } else if (['←'].includes(value)) {
    button.classList.add('btn-backspace');
  } else if (['/', '+', '-', 'x'].includes(value)) {
    button.classList.add('btn-operator');
  } else if (value === '=') {
    button.classList.add('btn-equals');
  }

  buttonsContainer.appendChild(button);
}


buttonsContainer.addEventListener('click', (e) => {
  const value = e.target.textContent;

  if (value === 'C') {
    screen.value = ''; 
  } else if (value === '←') {
    screen.value = screen.value.slice(0, -1); 
  } else if (value === '=') {
    
    try {
      const result = eval(screen.value.replace(/x/g, '*'));
      history.push(`${screen.value} = ${result}`); 
      screen.value = result; 
    } catch (error) {
      screen.value = 'Error'; 
    }
  } else if (value === 'Hist') {
    historyDisplay.innerHTML = history.join('<br>'); 
  } else {
    screen.value += value;
  }
});


document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (!isNaN(key) || ['/', '*', '-', '+', '.', 'Backspace'].includes(key)) {
    if (key === 'Enter') {
      try {
        const result = eval(screen.value.replace(/x/g, '*'));
        history.push(`${screen.value} = ${result}`);
        screen.value = result;
      } catch (error) {
        screen.value = 'Error';
      }
    } else if (key === 'Backspace') {
      screen.value = screen.value.slice(0, -1);
    } else {
      screen.value += key;
    }
  } else if (key === 'Escape') {
    screen.value = ''; 
  }
});
