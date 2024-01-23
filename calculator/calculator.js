function addNum(a,b) {
    return a + b;
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        // Display an error message if input is not valid
        document.getElementById('result').innerHTML = 'Please enter valid number(s).';
    } else {
        // Calculate the sum
        const sum = addNum(num1, num2);

        // Display the result in the visible container
        document.getElementById('result').innerHTML = `Result: ${sum}`;
        
        // Make the result container visible
        document.getElementById('result-container').style.display = 'block';
    }
}

function handleKeyPress(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter') {
        calculate();
    }
}