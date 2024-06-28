function calculate(func) {
    const angle = document.getElementById('angle').value;
    let result = 0;

    if (angle === '') {
        alert('Please enter an angle');
        return;
    }

    const radians = angle * (Math.PI / 180);

    switch (func) {
        case 'sin':
            result = Math.sin(radians);
            break;
        case 'cos':
            result = Math.cos(radians);
            break;
        case 'tan':
            result = Math.tan(radians);
            break;
        case 'cot':
            result = 1 / Math.tan(radians);
            break;
        case 'cosec':
            result = 1 / Math.sin(radians);
            break;
        case 'sec':
            result = 1 / Math.cos(radians);
            break;
        default:
            break;
    }

    const resultElement = document.getElementById('result');
    resultElement.innerText = `Result: ${result.toFixed(4)}`;
    resultElement.style.opacity = 1;
}
