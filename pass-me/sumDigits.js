/*
"sumDigits" 함수를 작성합니다.

숫자가 주어졌을때, "sumDigits" 함수는 숫자의 각 자리수를 모두 더한 값을 반환합니다.
만약 숫자가 음수라면, 첫번째 자릿수는 음수로 고려되어야 합니다.

let output1 = sumDigits(1148);
console.log(output1); // --> 14

let output2 = sumDigits(-316);
console.log(output2); // --> 4
*/
// num을 문자열로 바꾸고 한자리씩 나눠 배열에 넣어준다
// 만약 num이 0보다 작으면 num을 잘라 넣어둔 배열의 0번째 배열(-)를 빼준다. 그리고 그 배열의 [0]배열에 * 1을 해준다.
// 배열을 모두 숫자로 바꾼 뒤, 모든 배열을 더해준다.
// 리턴
function sumDigits(num) {
  const numArr = String(num).split('');

  if (num < 0) { numArr.shift(); numArr[0] *= -1; }

  return numArr.map((el) => el * 1).reduce((acc, curr) => acc + curr);
}

module.exports = sumDigits;
