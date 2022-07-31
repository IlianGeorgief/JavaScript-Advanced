function carModels(arr) {
    let register = {};

    arr.forEach(el => {
        let [brand, model, quantity] = el.split(' | ');
        quantity = Number(quantity);

        let cars = {
            brand,
            model, quantity
        };
        if (!register.hasOwnProperty(brand)) {
            register[brand] = [];
        }

        register[brand].push(cars);


    });
    let result = '';
    let reduced = Object.keys(register);
    for (const item of reduced) {
        let cars = register[item];
        result += `${item}\n`;
        result += `###${cars.map((s) => s.model + ' -> ' + s.quantity).join('\n###')}`
        result += `\n`
    }
    return result;
}
    console.log (carModels(['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10']
    ))