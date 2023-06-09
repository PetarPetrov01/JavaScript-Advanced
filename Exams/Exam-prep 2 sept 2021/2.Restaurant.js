class Restaurant {
    constructor(budget) {

        this.budgetMoney = Number(budget)
        this.menu = {}
        this.stockProducts = {}
        this.history = []
    }

    loadProducts(products) {
        products.forEach(el => {
            const [prodName, quantity, totalPrice] = el.split(' ')

            if (this.budgetMoney >= totalPrice) {
                this.budgetMoney -= Number(totalPrice)
                if (!(prodName in this.stockProducts)) {
                    this.stockProducts[prodName] = 0
                }
                this.stockProducts[prodName] += Number(quantity)
                this.history.push(`Successfully loaded ${quantity} ${prodName}`)

            } else {
                this.history.push(`There was not enough money to load ${quantity} ${prodName}`)
            }
        })
        return this.history.join('\n')
    }

    addToMenu(meal, neededProducts, price) {
        if (!(meal in this.menu)) {
            this.menu[meal] = {
                products: neededProducts, price: Number(price)
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }

        const mealsQty = Object.keys(this.menu).length
        if (mealsQty == 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        } else {
            return `Great idea! Now with the ${meal} we have ${mealsQty} meals in the menu, other ideas?`
        }

    }

    showTheMenu() {
        if (Object.entries(this.menu).length === 0) {
            return 'Our menu is not ready yet, please come later...'
        } else {
            return Object.entries(this.menu).map(([key, value]) => {
                return `${key} - $ ${value.price}`;
            }).join('\n')
        }
    }

    makeTheOrder(meal) {

        if (!(meal in this.menu)) {
            
            return `There is not ${meal} yet in our menu, do you want to order something else?`;

        }

        let canCook = true;

        const neededProducts = this.menu[meal].products;

        for (const product of neededProducts) {

            const [productName, productQuantity] = product.split(' ');

            if (!(productName in this.stockProducts)) {
                
                canCook = false;
                break;

            }

            if (this.stockProducts[productName] < Number(productQuantity)) {
                
                canCook = false;
                break;

            }

        }

        if (canCook) {
            
            for (const product of neededProducts) {
            
                const [productName, productQuantity] = product.split(' ');
    
                this.stockProducts[productName] -= Number(productQuantity);
    
            }

            this.budgetMoney += Number(this.menu[meal].price);

            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;

        } else {

            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;

        }
    }
}

let test = new Restaurant(1000);
test.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
test.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
let res = test.makeTheOrder('frozenYogurt');
console.log(res)



