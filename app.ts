interface Product {
    title: string;
    price: number;
    stock: number;
    description?: string;
}

function productString(product: Product): string {
    return `Продукт: ${product.title} \n${product.price}грн \n${product.stock ? "В наявності" : "Немає в наявності" } \n${product.description ? `Опис: ${product.description}` : "Опис відсутній"}`;
}


const phoneProduct: Product = {
    title: "Phone",
    price: 30000,
    stock: 12
}
console.log(productString(phoneProduct));