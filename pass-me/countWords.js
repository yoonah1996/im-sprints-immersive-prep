/*
"countWords" 함수를 작성합니다.

string이 input으로 주어지면, "countWords" 함수는 주어진 문자열의 각 단어들을 키 값으로 갖고 있는 객체를 리턴합니다.
키 값과 더불어, 각 단어의 빈도수를 알아낸 후 값으로 적용합니다.

Notes:
* 만일 빈 문자열이 주어지면, 빈 객체를 리턴해야 합니다.

let output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
*/
// 문자열의 단어들의 갯수를 세는 코딩
// 먼저 문자열의 길이가 0이면 빈 객체를 리턴한다.
// 문자열을 띄어쓰기 단위로 나눠서 배열에 넣어준다.
// 배열 el을 가져왔을 때 acc객체 키에 없다면
// acc[el]이라는 객체를 만들고 값을 1로 지정한다
// (아니면)acc키값에 있다면 acc[el]에 값에 1을 더해준다.
// reduce 로 다돌면 객체를 리턴한다.
function countWords(input) {
  if (input.length === 0) return {};

  const inputList = input.split(' ');

  return inputList.reduce((acc, curr) => {
    if (acc[curr] === undefined) {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }

    return acc;
  }, {});
}


module.exports = countWords;
