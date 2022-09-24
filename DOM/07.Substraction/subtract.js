function subtract() {
    let a = document.getElementById('firstNumber');
    let b = document.getElementById('secondNumber');

    let result = Number(a.value) - Number(b.value);
    let c = document.getElementById('result');
    c.textContent = result;
}