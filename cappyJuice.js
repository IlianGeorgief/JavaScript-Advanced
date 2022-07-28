function juiceCappy(data) {

    let parsedData = data.reduce((juiceAcc, juiceKVP) => {
        let [juiceName, quantity] = juiceKVP.split(' => ');

        if (juiceAcc.currentJuiceQuantity[juiceName]) {
            juiceAcc.currentJuiceQuantity[juiceName] =
                juiceAcc.currentJuiceQuantity[juiceName] + Number(quantity);
        } else {
            juiceAcc.currentJuiceQuantity[juiceName] = +quantity;
        }

        let bottle = Math.floor(juiceAcc.currentJuiceQuantity[juiceName] / 1000);
        if (bottle > 0 && !juiceAcc.complitedJuices.includes(juiceName)) {
            juiceAcc.complitedJuices.push(juiceName);
        }
        return juiceAcc;
    }, { complitedJuices: [], currentJuiceQuantity: {} })

    parsedData.complitedJuices.map(juice => {
        console.log(`${juice} => ${Math.floor(parsedData.currentJuiceQuantity[juice] / 1000)}`)

    });
}


juiceCappy(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
)    
