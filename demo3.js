




const people1={
    height:170,
    weight:65
}


const people2={
    height:185,
    weight:100
}
let peoples=[people1,people2]
//構造函數
function createCard(name){
    this.cardName=name;

}
// function a(){}
// let a=function (){}
// let a=()=>{}解決this問題
  const a1 =new createCard("小名")
  console.log(a1,a1.cardName);



console.log('people  people2_height',peoples[0],people2.height)