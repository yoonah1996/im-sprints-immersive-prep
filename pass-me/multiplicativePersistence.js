/*
multiplicativePersistence 함수를 작성합니다.

multiplicativePersistence 함수는 양수를 파라미터로 받는 함수로,
각 자릿의 숫자들을 곱한 결과물들이 하나의 숫자가 될 때까지 반복적으로 곱한 후,
최후의 한 자리 숫자를 리턴하는 함수입니다.

예를 들어 786을 인자로 넘길 경우, 함수는 0을 리턴해야 합니다.
7 * 8 * 6 -> 336
3 * 3 * 6 -> 54
5 * 4 -> 20
2 * 0 -> 0

*/
// num을 문자열로 바꾼다음 문자 하나나를 잘라 배열에 넣은 다음 reduce 로 각 배열을 모두 곱해준다
// 만약 모두 곱한 값이 10보다 작다면 그 값을 리턴해주고 아니면 multiplicativePersistence에 값을 넣어 다시 각 자리 수를 곱해둔다.
function multiplicativePersistence(num) {
  // return () => (num < 10 ? num :
  // num = multiplicativePersistence(String(num).spilt('').reduce((a, b) => a * b), 1));
  const result = String(num).split('').reduce((a, b) => a * b, 1);
  return result < 10 ? result : multiplicativePersistence(result);
}
module.exports = multiplicativePersistence;
