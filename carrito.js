document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.parentElement.cloneNode(true);
        product.querySelector('.btn-primary').remove();
        document.getElementById('cart').appendChild(product);
    });
});