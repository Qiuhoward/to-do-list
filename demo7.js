const { a = "hello" } = "22"; //curly brace const預設值先定義 a=hello
const [b = "hello"] = "aell"; //中括號  print b=a

/** ES6寫法 解構賦值
 *  從陣列解構賦值
    從物件解構賦值(或是從混用物件或陣列)
    非物件或非陣列解構賦值
    解構賦值時給定預設值
    搭配函式的傳入參數使用
 */

/**
 * 從陣列解構賦值
 */
const [x, , z] = [1, 2, 3];
console.log(z); //z=3

const [s, v, ...c] = [2, 2, 3];
console.log(c);

const [, , , aa, bb] = [1, 2, 3];
console.log(aa, bb); //aa=undefined bb=undefined

/**
 * 從物件解構賦值(或是從混用物件或陣列);
 */
const { xx } = { xx: 5 };
console.log(xx); //xx=5

const { yy: yy } = { yy: 5 };
console.log(yy); //yy=5

//簡化前一個 結果跟前一個 一樣
const { yyy } = { yyy: 5 };
console.log(yyy); //yyy=5

// ES7+的物件屬性其餘運算符
const { ee, ff, ...gg } = { dd: 1, ss: 4 };
console.log("ee", ee, "\nff", ff, "\ngg", gg);

const {
  name,
  price: [one, two],
} = { name: "frank", price: [, 9999] };
console.log("name:", name, "\none:", one, "\ntwo:", two);

/**
 * function給與參數
 */

function func1({ a, b }) {
  return a + b;
}

console.log(func1({ a: 1, b: 2 }));

function func2({ a = 2, b = 5 }) {
  return a + b;
}

console.log(func2({ a: 5, b: 11 })); //function會複寫預設值

//function會複寫預設值
function func2({ a = 2, b = 5 }) {
  return a + b;
}

console.log(func2({ a: 5, b: 11 })); //16
//console.log(func2()) 會有錯要加上下面那行{}因為有定義
console.log(func2({})); //7
//.log(func2(null))//會報錯
console.log(func2({ a: void 0, b: 1 })); //3    a:void 0 =a用預設值

function func3({ a = 2, b = 5 } = { a: 3, b: 5 }) {
  //注意二次給值竟然要:而不是=
  console.log(a + b);
}

func3({ a: 5, b: 11 }); //16
func3({}); //用預設值
func3(); //第二次值
func3({ a: void 0, b: null }); //2




