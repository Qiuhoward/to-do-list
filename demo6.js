const text = document.getElementById("text");
const date = document.getElementById("date");
const time = document.getElementById("time");
const add = document.getElementById("add");
const remove = document.getElementById("remove");
const list = document.getElementById("list");
const contentList = [];

add.addEventListener("click", function () {
  //push抓取到的值
  contentList.unshift({
    text: text.value,
    date: date.value,
    time: time.value,
  });
  let str = '';
  //item等於跑list裡面的值
  contentList.forEach(function (item) {
    str =
      str +
      `
        <div class="item">
        <div>
          <p>內容：${item.text}</p>
          <p>時間：${item.date} ${item.time}</p>
        </div>
        </div>
        `;
  });
  list.innerHTML = str;
});

let str = "";

remove.addEventListener("click", function () {
  contentList.pop();
  let str = "";
  //item等於跑list裡面的值
  contentList.forEach(function (item) {
    str =
      str +
      `
        <div class="item">
        <div>
          <p>內容：${item.text}</p>
          <p>時間：${item.date} ${item.time}</p>
        </div>
        </div>
        `;
  });
  list.innerHTML = str;
});
