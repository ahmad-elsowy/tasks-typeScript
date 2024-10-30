  type Book={
      title : string,
      auther : string,
      yearPublished : number,
      availableCopies : number,
    //   preefDescription():string
    }
    let books :Book[]= []
    
    // 1. **Add a new book** to the library.
    function addBook(book : Book):Book[]|string{
        let exist = books.find(b=>b.title === book.title)
        if(exist){
            return `book with title ${book.title} is already exist`
        }else{
            books.push(book)
            return books
        }
    }

   
    console.log(addBook({
        title : "The Great Gatsby",
        auther :  "F. Scott Fitzgerald",
        yearPublished : 1925,
        availableCopies : 3,
        // preefDescription(this)
        
    }),`\n*********************`)
    console.log(addBook({
        title : "1984",
        auther :  "George Orwell",
        yearPublished : 1949,
        availableCopies : 5,
        // preefDescription(this)
    }),`\n*********************/////////////`)
    
    // 2. **Borrow a book** from the library, which decreases the number of available copies.
    
    function borrowBook(title : string){
        
        let bb =   books.map(b=>{
            if(b.title === title){
                return{
                    ...b,
                    availableCopies : b.availableCopies > 0 ? b.availableCopies -1 : 0
                }
            } else{
                return b
            }   
        })
        books = bb
        return books   
    }
    
    // console.log(borrowBook("The Great Gatsby"))
    // console.log(borrowBook("The Great Gatsby"))
    // console.log(borrowBook("The Great Gatsby"))
    // console.log(borrowBook("The Great Gatsby"))
    
    
    // 3. **Return a book** to the library, which increases the number of available copies.
    
    
    function returnBook(title : string){
    
        let bb =   books.map(b=>{
        if(b.title === title){
            return{
                ...b,
                availableCopies :  b.availableCopies +1 
            }
        } else{
            return b
        }   
    })
    books = bb
    return books   
}

console.log(returnBook('1984'))
console.log(returnBook('1984'))
console.log(returnBook('1984'))
console.log(returnBook('1984'))
console.log(returnBook('1984'))
console.log(returnBook("The Great Gatsby"))
console.log(returnBook("The Great Gatsby"))
console.log(returnBook("The Great Gatsby"))

console.log(`0000000000000000000000000000000000000000000`)

// 4. **Find books by author**.
function findBook(auther : string){
    return books.find(b=>b.auther === auther)
}
console.log(findBook("F. Scott Fitzgerald"))

console.log(`0000000000000000000000000000000000000000000`)

// 5. Implement an object method in the book to **get a brief description** of the book, including its title and author.


function preefDescription(title : string){
    let book = books.find(b=>b.title === title)
    if(book){
        return `title is " ${book.title} " and Auther is "${book.auther}"`
    }
}
console.log(preefDescription("The Great Gatsby"))

