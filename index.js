const productsList = document.getElementById("productsList");
const searchBar = document.getElementById("searchBar");
let listedProducts = [];
// Function for filtering the products based on our typed keywords in search bar
searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  console.log(searchString);
  const data = listedProducts.products;
  const filteredProducts = data.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchString) ||
      product.description.toLowerCase().includes(searchString)
    );
  });
  displayProducts(filteredProducts);
});
//Function which loads all the required products
const loadProducts = async () => {
  try {
    const res = await fetch("product_dummy_data.txt");
    listedProducts = await res.json();
    //console.log(res);
    //console.log(listedProducts);
    const data = listedProducts.products;
    console.log(data);
    displayProducts(data);
  } catch (err) {
    console.error(err);
  }
};
//Function which displays all the products we want on the frontend
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
    .join("");
  productsList.innerHTML = htmlString;
};

loadProducts();
