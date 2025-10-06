/*You are building a simple user profile page. How would you store and display a user's name, age, and email address using JavaScript objects?
*/

let obj={
    Name:"Alice Johnson",
    Age: "24",
    Email: "alice.johnson@example.com"
}
let obj1={
    Name:"Bob Williams",
    Age: "24",
    Email: "bob.w@email.net"

}
console.log(obj);
console.log(obj1);

 /*Input: name: "Wireless Headphones", price: 79.99, inStock: true
    Expected Output: Display "Product: Wireless Headphones", "Price: $79.99", "Available: Yes"
*/ 

let obj2 ={
    name :"Product:HeadPhone",
    price:"Price:$2345",
    inStock : true

}
console.log(obj2.name,obj2.price,obj2.inStock?"yes":"no" );
let obj3 ={
    name :"Product:mechanical keyboard",
    price:"Price:$120.00",
    inStock : false

}
console.log(obj3.name,obj3.price,obj3.inStock?"yes":"no" );

/*  You're building a simple library catalog. How would you store information about a book, including its title, ISBN, and publication year, but also details about its author, like     their name and nationality?

Steps:
    - Define the Author Object: Create a small object for the author with properties like authorName and nationality.
    - Define the Book Object: Create the main book object with properties like title, isbn, and publicationYear.
    - Nest the Author Object: Assign the author object created in step 1 as a property within the book object.
    - Access Nested Properties: Use dot notation multiple times (e.g., book.author.authorName) to access properties within the nested object.
*/
let author={
    authorName:"F.Scott Fitzgerald",
    nationality:"american"
}
let book={
    title: "book:The Great Gatsby",
    isbn: "978-0743273565", 
    publicationYear: "published:1925",
    author:{
    authorName:"author:F.Scott Fitzgerald",
    nationality:"(american author)"
}
}
console.log(book.title,book.author.authorName,book.publicationYear,book.author.nationality)

/*  Input: An object { darkMode: true, emailNotifications: true, locale: "en-US" }.
    Action: Delete emailNotifications.
    Expected Output: Object should be { darkMode: true, locale: "en-US" }.
*/

let object={
    darkMode:true,
    emailNotification:true,
    locale:"en-US"
}
delete object.darkMode;
console.log(object)

let object2={
    darkMode:false,
    locale:"en-US"
}
delete object.smsNotification;
console.log(object2 ,"(No error,just no changfe).");