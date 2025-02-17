const addressForm = document.getElementById("addressForm")

addressForm.addEventListener('submit',function(event){
    event.preventDefault()

    const addressValue = document.getElementById('userAddress').value;
    alert(`Your food will be delivered to \n ${addressValue} \n Thank you for shopping with us`);
    window.location.href = "index.html"
})