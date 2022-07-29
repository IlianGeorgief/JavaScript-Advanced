function storeCatalogue(data) {
    let parsedData = data.reduce((acc, productLine) => {
        let [name, price] = productLine.split(':').map(x => x.trim());

        if (acc[name[0]]) {
            acc[name[0]] = [...acc[name[0]], productLine];
        } else {
            acc[name[0]] = [productLine];
        }

        return acc;
    }, {})

    Object.keys(parsedData).sort().map(x => {
        console.log(x);
        parsedData[x].sort().map(product => {
            console.log(`  ${product.split(' : ').join(': ')}`);
        })
    })
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)