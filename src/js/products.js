const genProducts = Array.from({ length: 30 }, (_, i) => ({
  name: `Product ${i + 1}`,
  price: (10 + i) * 5, // sample price
  item: `Item-${i + 1}`,
  description: `This is a short description for product ${i + 1}.`,
  img: `https://picsum.photos/200/300?random=${i + 1}`,
  start: (Math.random() * 5).toFixed(1) // rating out of 5
}));


const createProductCart = (product) => {

    return `
    <div class="col-4 mb-3">
        <div class="card ">
            <img src="${product.img}" class="card-img-top ratio ratio-4x3" style="max-height:200px" alt="${product.name}">
            <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Rating:</strong> ⭐ ${product.start}</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
            </div>
        </div>
    </div>
    `;
};


const createProducts = () => {
    const productGridElement = document.querySelector("#products");

    if (!productGridElement) return;

    genProducts.forEach((product) => {
        const proCard = createProductCart(product);
        productGridElement.insertAdjacentHTML("beforeend", proCard);
    });
};

createProducts()