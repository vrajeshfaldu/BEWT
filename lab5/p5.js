
const myUrl = new URL("https://www.example.com/");


myUrl.pathname = "/products/item";

myUrl.searchParams.append("category", "books");
myUrl.searchParams.append("price", "200");

console.log("Final URL:", myUrl.toString());
