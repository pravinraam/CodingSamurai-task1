document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('calc-display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(button.classList);
            const value = button.textContent;
            if(button.classList.contains('remove')){
                if(currentInput === 'Error' || currentInput === 'NaN' || currentInput === 'Infinity'){
                    currentInput ='';
                }
                currentInput = currentInput.substring(0,currentInput.length -1)
                display.value = currentInput
            }
            if (value === '=') {
                try {
                    currentInput = currentInput.replaceAll('x','*')
                    display.value = eval(currentInput);
                } catch (e) {
                    display.value = 'Error';
                }
                currentInput = display.value;
            }
            else if (value === 'C') {
                currentInput = '';
                display.value = '0';
            }
            else {
                if(currentInput === 'Error' || currentInput === 'NaN' || currentInput === 'Infinity'){
                    console.log('the function is entered')
                    currentInput ='';
                }
                currentInput += value;
                display.value = currentInput;
            }
        });
    });

    function isValidInput(char) {
        return ['+', '-', '*', '/','%','1','2','3','4','5','6','7','8','9','0','.'].includes(char);
    }

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (isValidInput(key)) {
            if(currentInput === 'Error' || currentInput === 'NaN' || currentInput === 'Infinity'){
                console.log('the function is entered')
                currentInput ='';
            }
            currentInput += key;
            display.value = currentInput;
        }
        else if(key === 'Backspace'){
            currentInput = currentInput.substring(0,currentInput.length -1)
            display.value = currentInput
        }
        else if(key === 'Enter'){
            try {
                currentInput = currentInput.replaceAll('x','*')
                display.value = eval(currentInput);
            } catch (e) {
                display.value = 'Error';
            }
            currentInput = display.value;
        }
    });

});
