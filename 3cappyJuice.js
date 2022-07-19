function cappyJuice(data) {
    let parsedData = {};
    let juice = {}

    for (let i = 0; i < data.length; i++) {
        let temPrsedJuise = data[i].split(' => ');

        if (parsedData[temPrsedJuise[0]]) {
            parsedData[temPrsedJuise[0]] = parsedData[temPrsedJuise[0]] + Number(temPrsedJuise[1]);
        } else {
            parsedData[temPrsedJuise[0]] = Number(temPrsedJuise[1]);
        }

        let bottle = Math.floor(parsedData[temPrsedJuise[0]] / 1000);
        if (bottle > 0) {
            juice[temPrsedJuise[0]] = bottle;
        }
    }
    let finalData = Object.entries(juice);

    for (let i = 0; i < finalData.length; i++) {
        console.log(finalData[i].join(' => '));
    }
}

cappyJuice(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
)
// //Orange => 2
// Peach => 2

