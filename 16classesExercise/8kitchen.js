class Kitchen {
    menu = {};
    productsInStock = {};
    actionHistory = [];

    constructor(budget) {
        this.budget = budget;
    }

    loadProducts(data) {
        let parsedData = data.map(x => x.split(' '))
            .map(([productName, productQuantity, productPrice]) =>
                ({ productName, productQuantity: Number(productQuantity), productPrice: Number(productPrice) }))
            .forEach(el => {
                //let totalPrice = el.productPrice * el.productQuantity;
                let totalPrice = el.productPrice;

                if (this.budget >= totalPrice) {
                    this.budget -= totalPrice;
                    if (!this.productsInStock[el.productName]) {
                        this.productsInStock[el.productName] = { quantity: 0, price: 0 }
                    }
                    this.productsInStock[el.productName] =
                    {
                        quantity: this.productsInStock[el.productName].quantity + el.productQuantity,
                        price: el.price

                    }

                    this.actionHistory.push(`Successfully loaded ${el.productQuantity} ${el.productName}`)
                } else {
                    this.actionHistory.push(`There was not enough money to load ${el.productQuantity} ${el.productName}`)
                }
            });


        return this.actionHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu[meal] !== undefined) {
            return `The ${meal} is already in our menu, try something different.`
        }
        this.menu[meal] = {
            price,
            neededProducts: neededProducts.map(x => x.split(' '))
                .map(([productName, productQuantity]) => ({ productName, productQuantity: Number(productQuantity) }))
        }

        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            console.log("Our menu is not ready yet, please come later...");
        } else {
            Object.entries(this.menu).forEach(([name, val]) => {
                console.log(`${name} - ${val.price}`);
            })
        }
    }

    checkForProduct(reqProducts, availableProducts) {
        console.log(reqProducts);
        console.log(availableProducts);
    }

    makeTheOrder(mealName) {
        if (this.menu[mealName] === undefined) {
            return `There is not ${mealName} yet in our menu, do you want to order something else?`;
        }
        this.checkForProduct(this.menu[mealName], this.productsInStock);
    }
}
let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55);
console.log(kitchen.showTheMenu());