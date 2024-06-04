document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            name: 'Dior',
            image: 'images/parfum1.jpg',
            description: 'Dior Homme Intense 2011',
            price: '100 EUR',
            link: 'parfum1.html'
        },
        {
            name: 'Givenchy',
            image: 'images/parfum2.jpg',
            description: 'Gentleman Eau de Parfum Reserve Privée',
            price: '80 EUR',
            link: 'parfum2.html'
        },
        {
            name: 'Jean Paul Gaultier',
            image: 'images/parfum3.jpg',
            description: 'Le Beau Le Parfum Jean Paul Gaultier',
            price: '100 EUR',
            link: 'parfum3.html'
        },
        {
            name: 'Bleu de Chanel',
            image: 'images/parfum4.jpg',
            description: 'Bleu de Chanel Eau de Parfum Chanel',
            price: '150 EUR',
            link: 'parfum4.html'
        },
        {
            name: 'Lattafa',
            image: 'images/parfum5.jpg',
            description: 'Khamrah Lattafa Perfumes',
            price: '50 EUR',
            link: 'parfum5.html'
        },
        {
            name: 'Giorgio Armani',
            image: 'images/parfum6.jpg',
            description: 'Acqua di Giò Parfum Giorgio Armani',
            price: '100 EUR',
            link: 'parfum6.html'
        },
        {
            name: 'Tom Ford',
            image: 'images/parfum7.jpg',
            description: 'Noir Extreme Parfum',
            price: '150 EUR',
            link: 'parfum7.html'
        }
    ];

    const productList = document.querySelector('.product-list');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productLink = document.createElement('a');
        productLink.href = product.link;

        const productImg = document.createElement('img');
        productImg.src = product.image;
        productImg.alt = product.name;

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;

        productLink.appendChild(productImg);
        productLink.appendChild(productName);
        productLink.appendChild(productDescription);
        productLink.appendChild(productPrice);

        productDiv.appendChild(productLink);
        productList.appendChild(productDiv);
    });
});
