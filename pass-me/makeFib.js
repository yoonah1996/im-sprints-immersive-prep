/*
makeFib 함수를 작성합니다.

makeFib 함수는 클로저의 형태로 작성되며, 리턴된 함수가 호출될 때마다 피보나치 수열을 순차적으로 출력합니다.
피보나치 수는 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 됩니다.

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

이 함수는 recursive 혹은 iterative한 방법 중 어떤 방법으로든 구현할 수 있습니다.

예제
---

var fn = makeFib();
fn(); // 0
fn(); // 1
fn(); // 1
fn(); // 2
fn(); // 3
fn(); // 5

*/
// 실행횟수인 count를 0으로 초기화 시킨다.
// 재귀함수를 작성한다.
// 누를때 count에 1 더해주고 finnum함수에 num를 넘겨 재귀함수를 실행시킨다.
function makeFib() {
  let count = 0;

  const finnum = (num) => (num < 2 ? num : finnum(num - 1) + finnum(num - 2));

  return () => { count += 1; return finnum(count - 1); };
}

module.exports = makeFib;
