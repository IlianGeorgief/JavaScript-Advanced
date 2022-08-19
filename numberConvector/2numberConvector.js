function solve() {
    let optionList = document.querySelectorAll("#selectMenuTo")[0];
    let button = document.querySelector('button');
    let input = document.querySelector('#input');
    let a = document.getElementById('result');

    optionList.innerHTML = ` 
    <option selected value=""></option>
    <option value="hexadeicmal">Hexadeicmal</option>
    <option value="Binary">Binary</option>`

    button.addEventListener('click', () => {
        let result
        if (optionList.value === "Binary") {
           result = (Number(input.value)).toString(2);
        } else {
           result = (Number(input.value)).toString(16).toUpperCase();
        }

        a.value = result;
    })
}
