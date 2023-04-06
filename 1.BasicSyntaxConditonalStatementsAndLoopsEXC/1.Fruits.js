function calculateFruits(fruit,weight,price){
    let weightInKilo = weight/1000
    let totalPrice = weightInKilo*price
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${fruit}.`);

}
calculateFruits('orange', 2500, 1.80)