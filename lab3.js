// 3) Classes are a template for creating objects

class Client{
    constructor(name,id,adress){
        this.name = name;
        this.id = id;
        this.adress=adress;
    }
}
let user1 = new Client("wisam",1234,"Vancouver")
console.log(user1);


// 6) using extend

class Orders extends Client {
    constructor(name,id,adress,orderNumber,quantity){
        super(name,id,adress)
        this.orderNumber = orderNumber;
        this.quantity = quantity;
    }
}
let order1 = new Orders("wisam",1234,"Vancouver",1012,4)
console.log(order1);


// 7) ncaught SyntaxError: A class may only have one constructor

class Client{
    constructor(name,id,adress){
        this.name = name;
        this.id = id;
        this.adress=adress;
    }
    constructor(test){
        this.test =test;
    }
}
let user1 = new Client("wisam",1234,"Vancouver")
console.log(user1);