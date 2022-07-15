function townsToJSON(input) {
    let arTitles = input[0].split('| ');
    arTitles.shift();

    let newArrTitles = arTitles.map((ele) => ele.trim());

    let [town, lat, long] = newArrTitles;

    //titles.shift();

    let longitude = long.slice(0, (long.length - 2));
    longitude.trim()
    let arrNew = [];
    // for (let el of titles) {
    //     let someObj = {};

    for (let i = 1; i < input.length; i++) {
        let obj = {

        }
        let arr = input[i].split('|');
        arr.shift();
        let newArr = arr.map((el) => el.trim());
        
        obj[`${town}`] = newArr[0];
        obj[`${lat}`] = Number(Number(newArr[1]).toFixed(2));
        obj[`${longitude}`] = Number(Number(newArr[2]).toFixed(2));
        arrNew.push(obj);

    }
    let output = JSON.stringify(arrNew)
    console.log(output)
}



townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);