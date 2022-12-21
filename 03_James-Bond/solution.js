// let key = "specialKey";
// let line = [`In this text the specialKey HELLOWORLD! is correct, but
// the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while
// SpeCIaLkeY SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!`];


function solve() {

    let [key, ...line] = JSON.parse(document.getElementById('array').value);
    let resultRef = document.getElementById('result');
    let ourReg = new RegExp(`${key}[ ]+?([A-Z!%#\$]{8,})([\., ]|$)`, 'gmi');

    line.forEach(dataLine => {

        let replaceLine = dataLine;

        if (dataLine.match(ourReg)) {


            let maches = dataLine.match(ourReg)
                .map(x => x.split(' ')[1])
                .filter(str => str === str.toUpperCase())
                .map(x => {
                    let parsedWord = x.replace(/!/g, 1)
                        .replace(/%/g, 2)
                        .replace(/#/g, 3)
                        .replace(/\$/g, 4)
                        .toLowerCase()

                    let targetWord = x;

                    replaceLine = replaceLine.replace(targetWord, parsedWord)
                });
        }
        let tempP = document.createElement('p');
        tempP.innerHTML = replaceLine;
        resultRef.appendChild(tempP)
    });
}

