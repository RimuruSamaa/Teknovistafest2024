// Data untuk produk-produk yang berbeda
const discountProducts = [
    { name: 'Bag with 30% Discount', price: 'Rp 350,000', image: 'images/discounted-bag.png', originalPrice: 'Rp 500,000' },
    { name: 'Dress with 40% Discount', price: 'Rp 600,000', image: 'images/discounted-dress.png', originalPrice: 'Rp 1,000,000' },
    { name: 'Shoes with 25% Discount', price: 'Rp 450,000', image: 'images/discounted-shoe.png', originalPrice: 'Rp 600,000' }
];

const bagProducts = [
    { name: 'Leather Handbag', price: 'Rp 700,000', image: 'images/leather-hand-bag.png' },
    { name: 'Classic Tote Bag', price: 'Rp 500,000', image: 'images/classic-tote-bag.png' },
    { name: 'Backpack', price: 'Rp 450,000', image: 'images/backpack.png' },
    { name: 'Travel Bag', price: 'Rp 850,000', image: 'images/travel-bag.png' },
    { name: 'Small Purse', price: 'Rp 300,000', image: 'images/small-purse.png' }
];

const dressProducts = [
    { name: 'Red Evening Dress', price: 'Rp 900,000', image: 'images/red-evening-dress.png' },
    { name: 'Summer Dress', price: 'Rp 550,000', image: 'images/summer-dress.png' },
    { name: 'Maxi Dress', price: 'Rp 800,000', image: 'images/maxi-dress.png' },
    { name: 'Cocktail Dress', price: 'Rp 1,200,000', image: 'images/cocktail-dress.png' },
    { name: 'Casual Dress', price: 'Rp 400,000', image: 'images/casual-dress.png' }
];

const shoesProducts = [
    { name: 'Running Shoes', price: 'Rp 600,000', image: 'images/running-shoes.png' },
    { name: 'Sneakers', price: 'Rp 500,000', image: 'images/sneakers.png' },
    { name: 'Formal Shoes', price: 'Rp 1,000,000', image: 'images/formal-shoes.png' },
    { name: 'High Heels', price: 'Rp 750,000', image: 'images/high-heels.png' },
    { name: 'Boots', price: 'Rp 850,000', image: 'images/boots.png' }
];

const cosmeticsProducts = [
    { name: 'Lipstick Set', price: 'Rp 300,000', image: 'images/lipstick-set.png' },
    { name: 'Foundation', price: 'Rp 450,000', image: 'images/foundation.png' },
    { name: 'Eyeshadow Palette', price: 'Rp 550,000', image: 'images/eyeshadow-palette.png' },
    { name: 'Mascara', price: 'Rp 250,000', image: 'images/mascara.png' },
    { name: 'Blush', price: 'Rp 200,000', image: 'images/blush.png' }
];

const jewelleryProducts = [
    { name: 'Diamond Necklace', price: 'Rp 5,000,000', image: 'images/diamond-necklace.png' },
    { name: 'Gold Ring', price: 'Rp 2,000,000', image: 'images/gold-ring.png' },
    { name: 'Silver Earrings', price: 'Rp 1,000,000', image: 'images/silver-earrings.png' },
    { name: 'Bracelet', price: 'Rp 1,500,000', image: 'images/bracelet.png' },
    { name: 'Luxury Watch', price: 'Rp 4,000,000', image: 'images/luxury-watch.png' }
];

// Fungsi untuk menampilkan produk
function displayProducts(products, containerId) {
    const container = document.getElementById(containerId);
    products.forEach(product => {
        const productHTML = `
            <div class="product-item">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-name">${product.name}</div>
                <div class="price">${product.price}</div>
                ${product.originalPrice ? `<div class="original-price">${product.originalPrice}</div>` : ''}
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
        container.innerHTML += productHTML;
    });
}

// Tampilkan semua produk
displayProducts(discountProducts, 'discount-products');
displayProducts(bagProducts, 'bag-products');
displayProducts(dressProducts, 'dress-products');
displayProducts(shoesProducts, 'shoes-products');
displayProducts(cosmeticsProducts, 'cosmetics-products');
displayProducts(jewelleryProducts, 'jewellery-products');
