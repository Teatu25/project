class Product{
    constructor (itemName,price){
        this.itemName = itemName;
        this.price = price;
    }
}

const cart = []


function addToCart(productName,price){
    let product = new Product(productName,price)
    alert(`${productName} has been added to cart`)
    cart.push(product)
    localStorage.setItem("cart",JSON.stringify(cart))
}


// let yam = new Product("yam",4)
// console.log(yam.itemName)