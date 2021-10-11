const productForm = document.querySelector('.product-form');
const itemPrice = document.querySelector('.product-price');
const showTotal = document.querySelector('.show-total')


//template to inject into itemPrice div
function productTemplate(item, price){
    const html = `<div class="product-flex"><p>${item}</p>
        <p class="item-price">${price}</p></div>`
    itemPrice.innerHTML += html
    const get = document.querySelectorAll('.item-price')
    
    let total = []
    get.forEach((item) => {
        let convertPrice = parseFloat(item.textContent)
        total.push(convertPrice)
        
    })
    console.log(total)
    const totalPrice =   total.reduce((acc, val) => {
        return acc + val
    },0)
    
    showTotal.textContent =  `$${totalPrice}`
}



productForm.addEventListener('submit', (e) => {
    e.preventDefault()
   let item =  productForm.product.value
    let price = productForm.price.value

   
       //check if the form is empty or not..if it is empty nothing will be added else add item and price
    if (item.length && price.length) {
        productTemplate(item, price)

        //clear the form after submission
        productForm.reset()
    }  
});

