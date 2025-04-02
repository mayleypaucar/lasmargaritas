document.querySelectorAll('.btn-success').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.parentElement.cloneNode(true);
        product.querySelector('.btn-success').remove();
        document.getElementById('cart').appendChild(product);
    });
});