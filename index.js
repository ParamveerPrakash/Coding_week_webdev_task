const productsList = document.getElementById('productsList');
const searchBar = document.getElementById('searchBar');
let listedProducts = [];
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(searchString);
    const data=listedProducts.products;
    const filteredProducts = data.filter((product) => {
        return (
            product.title.toLowerCase().includes(searchString) ||product.description.toLowerCase().includes(searchString)
        );
    });
    displayProducts(filteredProducts);
});
const loadProducts = async () => {
    try {
        const res = await fetch("product_dummy_data.txt");
        listedProducts = await res.json();
        console.log(res);
        console.log(listedProducts);
        const data=listedProducts.products;
        displayProducts(data);
    } catch (err) {
        console.error(err);
    }
};

const displayProducts = (data) => {
    const htmlString = data
        .map((product) => {
            return `
            <li class="product">
                <h2 class="title">${product.title}</h2>
                <p class="desc">${product.description}</p>
                <img src="${product.images[0]}" class="img"></img>
            </li>
        `;
        })
        .join('');
    productsList.innerHTML = htmlString;
};

loadProducts();
