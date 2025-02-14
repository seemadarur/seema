
function showAlert() {
    alert('Hello! This is a JavaScript alert.');
}

function changeText() {
    document.getElementById('text').innerHTML = 'Text Changed!';
}

function handleClick() {
    document.getElementById('clickMessage').innerHTML = 'Button Clicked!';
}

function validateForm() {
    let name = document.getElementById('name').Value;
    if(name == '') {
        alert('Please enter your name.');
        return false;
    }
    return true;
}
function checkNumber() {
    let num = parseInt(document.getElementById('numberInput').value);
    let result = num > 10 ? 'greater than 10' : '10 or less';
    document.getElementById('numberResult').innerHTML = result;
}

function checkage() {
    let age = parseInt(document.getElementById('ageinput').value);
    if(age >=18) {
        document.getElementById('ageResult').innerHTML = 'you are an adult';
    }
    else{
        document.getElementById('ageResult').innerHTML = 'you are a minor';
    }
}

function displayArrayItem() {
    let items = ['Apple', 'Banana', 'Cherry', 'Date', 'Orange'];
    let index = parseInt(document.getElementById('arrayIndex').value);
    let result = items[index] || 'invalid index';
    document.getElementById('arrayResult').innerHTML = result;

}



