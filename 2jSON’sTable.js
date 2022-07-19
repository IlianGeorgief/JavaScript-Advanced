function jSONsTable(data) {
    let parsedData = data.map(x => JSON.parse(x));

    let createTable = content => `<table>${content}\n</table>`;
    let createRow = content => `\n    <tr>\n${content}    </tr>`;
    let createTd = content => `         <td>${content}</td>\n`;

    let result = parsedData.reduce((accRows, row) => {

        let tdForPerson = Object.values(row).reduce((tdAcc, td) => {
            return tdAcc + createTd(td);
        }, '')
        return accRows + createRow(tdForPerson)
    }, '')

     return createTable(result);
    
}
console.log(jSONsTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
))