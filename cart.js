
const handleAddToCart = () =>{
    const productField = document.getElementById('product-field');
    const quantityField = document.getElementById('quantity-field');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    displayShowProduct(product,quantity)
    saveCartToLocalStorage(product,quantity)
}

const displayShowProduct = (product,quantity)=>{
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = ` ${product} : ${quantity}`;
    listContainer.appendChild(li);
}

const getStoredShoppingCard  = ()=>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart
}


const saveCartToLocalStorage = (product,quantity)=>{
    const cart = getStoredShoppingCard();
    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);

}

const ShowProductsToLocalStorage = ()=>{
    const saveCart = getStoredShoppingCard();
    for(const product in saveCart){
        const quantity = saveCart[product];
        displayShowProduct (product,quantity)
     
    }
}
ShowProductsToLocalStorage();
