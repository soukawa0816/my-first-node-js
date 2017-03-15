'use strict';
const number = process.argv[2] || 0;
//node プログラムファイル(app.js)　[引数(これが２ってこと)]　引数をひっぱってきてconstに代入
//なかったりしたら0が代入される（条件付き論理場)falsyな場合は
let sum = 0;
for (let  i = 1;i <= number; i++){
    sum = sum + i;
}
console.log(sum);