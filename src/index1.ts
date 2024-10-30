type Product ={
    id:number,
    name:string,
    price:number,
    quantity:number,
    category:string,
}
let products :Product[] = []

  // 1. Add a new product
function addProduct(product : Product):Product[] | string{
    let prod = products.find(p=>p.id === product.id)
    if(!prod){
        products.push(product)
    }else{
        return `this product with id ${product.id} is alrady exist`
    }
    return products
}



// 2. Update the quantity of an existing product by id

function updataQuantity(id:number,q:number) : Product[] | string{
    let prod = products.find(p=>p.id === id)

    if(prod){
        prod.quantity += q
   
    }else{
       return  `this product with id ${id} is alrady exist`
    }

   return products.map(p=>{
    return{
            ...p
        }
    }
    )
}


 // 3. Remove a product from the inventory by id


function removeProduct(id:number) : Product[]{
    let prod = products.filter(p=>p.id !== id)
    products = prod
   return products
}



// 4. Display all products in the inventory

function displayAllProduct():string{
    return   products.map(p=>{
        return`ID = ${p.id} , NAME = ${p.name} , PRICE = ${p.price}, QUANTITY = ${p.quantity},CATEGORY = ${p.category}`
    }).join(`\n`)
}


// 5. Filter products by category

function filterCategory(cat:string) : Product[]{
    let prod = products.filter(p=>p.category === cat)
   return prod
}



console.log(addProduct({ id: 1, name: "Laptop", price: 999, quantity: 10, category: "Electronics" } ))
console.log(addProduct({ id: 2, name: "Phone", price: 499, quantity: 20, category: "Electronics" } ))
console.log(addProduct({ id: 3, name: "Chair", price: 149, quantity: 15, category: "Furniture" } ))

console.log(updataQuantity(1,5))

console.log(removeProduct(1))

console.log(filterCategory("Electronics"))

console.log(displayAllProduct())


