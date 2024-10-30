type Item={
    id: number, 
    name:string, 
    price: number, 
    quantity: number, 
    category: string 
}
let items : Item[]= []

// 1. **Add an item** to the cart.
function addItem(item : Item) {
    let exist =  items.find(i=>i.id === item.id)
    if(exist){
        return `this item with id ==> ${item.id}  is already Exist`
    }else{
        items.push(item)
        return items
    }
}
console.log(addItem({ id: 1, name: "Laptop", price: 1000, quantity: 1, category: "Electronics" }))
console.log(addItem({ id: 2, name: "Phone", price: 500, quantity: 2, category: "Electronics" }))

// 2. **Update the quantity** of an item in the cart.
function updateQuantity(id:number){
    let theItem =  items.find(b=>b.id === id)
    if(theItem){
        theItem.quantity++
    }
    return items
}
console.log(updateQuantity(1))
console.log(updateQuantity(1))
console.log(`-------------------------------------------------`)

// 3. **Remove an item** from the cart.

function removeItem(id:number){
    let theItem =  items.filter(b=>b.id !== id)
    items = theItem
    return items
}
// console.log(removeItem(1))
// console.log(removeItem(2))

console.log(`-------------------------------------------------`)

// 4. **Calculate the total cost** of items in the cart.
function totalCost(){
    return items.reduce((total,curr)=>total + curr.price,0)
}
console.log(totalCost())
console.log(`-------------------------------------------------`)

// 5. **Apply a discount** on the cart total if certain conditions are met (e.g., total cost is above a certain threshold).

let total = totalCost()
let dicount = 10
if(total > 1300){
    total *=(1 - dicount/100) 
}
console.log(total)

