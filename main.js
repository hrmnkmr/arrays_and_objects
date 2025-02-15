//1,3つ以上の値を用意して変数に代入してください。その1番目と3番目をコンソールで表示してください。
var number = [1, 2, 3, 4]; // 数値として配列を定義
console.log(number[0]); // 1番目の値を表示
console.log(number[2]); // 3番目の値を表示
//1はここまで
//3,3つほどプロパティを用意したオブジェクトを用意してコンソールで表示してください。
var feeling = {
	name: "二郎",
	age: 35,
	condition: "良好",
};
// オブジェクト全体を表示
console.log(feeling);
//3はここまで
//4,オブジェクトを3つ用意してそれを配列として代入してください。配列の0番目と3番目を表示させ、その中のkeyを指定してコンソールに表示させてください。
var weather = [{
	month: '7月',
	day: 3,
	forecast: '晴れ'
}, {
	month: '7月',
	day: 4,
	forecast: '曇り'
}, {
	month: '7月',
	day: 5,
	forecast: '雨'
}, {
	month: '7月',
	day: 6,
	forecast: '雷雨'
}];
console.log(weather[0]);
console.log(weather[3]);
console.log(weather[0].forecast); // "晴れ"
console.log(weather[3].forecast); // "雷雨"
//4はここまで