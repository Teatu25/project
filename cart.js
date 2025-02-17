cartList = JSON.parse(localStorage.getItem('cart'))

function cartBody(){
    const items = document.getElementById("cart-items")
    const totalBox = document.getElementById("total")
    const header = document.getElementById("item-head")
    let total = 0
    if (cartList != null){
        const ul = document.createElement("ul")
        for (product of cartList){
            const li = document.createElement("li")
            li.textContent = `${product.itemName} £${product.price}`;
            ul.appendChild(li)
            total += parseInt(product.price)
        }
        header.innerHTML = "<h2> Item</h2>"
        items.appendChild(ul);
        totalBox.innerHTML = `<h3> Total: £${total}</h3>`;
    }
    else{
        items.innerHTML = "<h2 class='fw-bold display-4'> Your cart is empty</h2>"
    }
        
}


function checkout(){
    if (cartList != null){
        localStorage.removeItem("cart")
        alert("Your order has been placed")
        cartList = [];
        window.location.href = "address.html";
    }
    else{
        alert("Your cart is empty")
    }
    
}

cartBody()
