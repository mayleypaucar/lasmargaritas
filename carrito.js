document.querySelectorAll('.btn-warning').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.parentElement.cloneNode(true);
        product.querySelector('.btn-warning').remove();
        document.getElementById('cart').appendChild(product);
    });
});