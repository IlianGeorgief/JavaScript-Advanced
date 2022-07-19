function scoreToHTML(input) {

    let arr = JSON.parse(input)

    
    let outputArr = ["<table>"];
    outputArr.push(makeKeyRow(arr));

    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");
    function makeKeyRow(arr) {
      return  
    }
    function makeValueRow(obj) {
        return <tr><th>['name']</th><th>${score}</th></tr>
    };
    function escapeHtml(value) {
        return value
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    };
    console.log(outputArr.join('\n'));

    // console.log(arr[0].name)
}
scoreToHTML(['[{"name":"Pesho","score":479}, { "name": "Gosho", "score": 205 }]'])