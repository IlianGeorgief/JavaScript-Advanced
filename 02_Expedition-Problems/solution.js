

function solve() {
    let key = document.getElementById('string').value;
    let message = document.getElementById('text').value;
    let resultRef = document.getElementById('result');

    let saveMessage = message.match(`${key}(.+)${key}`)[1];
    let ourReg = new RegExp(/(?<location>east|north).*?(?<coorditate>\d{2}).*?,[^,].*?(?<decimals>\d{6})/gmi);

    let north;
    let east;
    let temp = ourReg.exec(message)
    while (temp) {
        
        if (temp[1].toLowerCase() === 'east') {
            east = `${temp[2]}.${temp[3]}`;
        }else{
            north = `${temp[2]}.${temp[3]}`;
        }

        temp = ourReg.exec(message);
    }

    resultRef.innerHTML = `
    <p>${north} N</p>
    <p>${east} E</p>
    <p>Message: ${saveMessage}</p>
    `;
}
