//function宣告物件
// function createCard(name){
//     this.cardName=name;

// }

//this會指向綁定的 
//輸出為
//hello 布魯斯  
//hello AA
// class Card{
//     constructor(name){
//         this.name=name;

//     }

//     hello(){
//         console.log("hello",this.name)
//     }
//  }
//  const a=new Card('布魯斯')
//  a.hello()

//  const b={name:'AA'}
//  b.hello=a.hello
//  b.hello()


//箭頭函式讓this綁定在這個class(小技巧)
//  class Card{
//     constructor(name){
//         this.name=name;
        
//     }

//  *****  hello=()=>{
//         console.log("hello",this.name)
//     }
//  }
//  const a=new Card('布魯斯')
//  a.hello()

//  const b={name:'AA'}
//  b.hello=a.hello
//  b.hello()

//繼承  super簡單來說就是可以去父層拿取已經做好的function或是複寫

class Car {
    constructor(name,price){
        this.name=name
        this.price=price
    }

    start(){
        console.log("衝衝衝我好快")
    }
}

class Porshe extends Car{
    constructor(porshe,price){
        super(porshe,price)
    }

    start(){ //我自己的start
        super.start()//拿父層start
        console.log("my Porshe faster than you")
    }

}

const porshe1=new Porshe("my Porshe",10000000000)
porshe1.start()
console.log(porshe1.price) //porshe裡面沒定義只需要建構因為在Car裡面定義好name 跟price變數了



