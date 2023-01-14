// var count = 0;     全域變數會有問題可以使用閉包的方式closure

// function dogHouse () {
//   var count = 0
//   function countDogs () {
//     count += 1
//     console.log(count + ' dogs')
//   }
//   return countDogs
// }

// function catHouse () {
//   var count = 0
//   function countCats () {
//     count += 1
//     console.log(count + ' cats')
//   }
//   return countCats
// }

// const countDogs = dogHouse()
// const countCats = catHouse()

// countDogs()    // "1 dogs"
// countDogs()    // "2 dogs"
// countDogs()    // "3 dogs"

// countCats()    // "1 cats"
// countCats()    // "2 cats"

// countDogs()    // "4 dogs"

//簡化程式碼
function dog(name) {
  var count = 0;
  return function () {
    count += 1;
    console.log("dog", name, count);
  };
}

function cat(name) {
  var count = 0;
  return function catCount() {
    count += 1;
    console.log("cat:", name, count);
  };
}

const annTotal = dog("ann");
const benTotal = dog("ben"); //這邊dog()回傳dogCount()方法 但定義不能打()
const catTotal = cat();
annTotal();
annTotal();
benTotal();
catTotal();
catTotal();
catTotal();
