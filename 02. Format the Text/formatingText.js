function formatingText() {
    const pInput = document.getElementById('input').innerText;
    const output = document.getElementById('output');

    // let paragrafs = pInput.textContent.split('.').map(x => x.trim());
    // if (!paragrafs.length <= 3) {
    //     let text = paragrafs.join('. ');
    //     let createParagraf = document.createElement("p");
    //     output.appendChild(createParagraf).textContent = text;

    // }

    // console.log(output)

    pInput
        .match(/(?:\s*)([^.!?]+[.!?]+)/g)
        .map(sentence => sentence.trim())
        .reduce((acc, sentence, index) => {
            if (index % 3 === 0) 
            { acc.push([sentence]); } else { acc[acc.length - 1].push(sentence); }
            return acc;
        }, [])
        .forEach(paragraph => {
            let parHTML = document.createElement('p');
            parHTML.textContent = paragraph;
            output.appendChild(parHTML);
        });

}