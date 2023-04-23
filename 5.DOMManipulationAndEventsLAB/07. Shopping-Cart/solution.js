function solve() {

   let output = document.querySelector('.shopping-cart textarea')
   let addBtns = Array.from(document.querySelectorAll('.product-add .add-product'))
   let addedProducts = []

   let sum = 0
   for (let btn of addBtns) {
      btn.addEventListener('click', addToCart)
   }
   //Checkout button

   let checkOutBtn = document.querySelector('.checkout')
   checkOutBtn.addEventListener('click', checkOut)


   //Checkout
   function checkOut() {
      output.textContent += `You bought ${addedProducts.join(', ')} for ${sum.toFixed(2)}.`

      //Disable all buttons
      checkOutBtn.removeEventListener('click', checkOut)

      for (let btn of addBtns) {
         btn.removeEventListener('click', addToCart)
      }
   }
   console.log(checkOut);


   //Add to cart
   function addToCart(event) {
      let currentProduct = event.target.parentElement.parentElement
      let productName = currentProduct.querySelector('.product-details .product-title').textContent
      let price = currentProduct.querySelector('.product-line-price').textContent

      output.textContent += `Added ${productName} for ${price} to the cart.\n`
      sum += Number(price)

      if (!addedProducts.includes(productName)) {
         addedProducts.push(productName)
      }
   }
}