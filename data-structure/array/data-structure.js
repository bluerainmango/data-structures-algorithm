//! 입력한 데이터가 memory 범위를 초과할때?
Math.pow(6, 100); // 6.533186235000709e+77
Math.pow(6, 100000); // Infinity 반환

//! Array 용량 계산하는 법, 각 method 속도
const strings = ["a", "b", "c", "d"]; // 선언된 strings는 RAM에 저장되고, strings[2] 등에 의해 호출
// 만약 32 bit system이라 치면, 1개의 문자/숫자를 저장하는데 32 bit(4 byte: 8 bit 짜리 address가 총 4 줄)가 필요.
// 'a'를 저장하려면 4 byte 가 필요하고, 총 4개의 문자를 저장해야하니,
// 4 * 4 = 16 bytes of stroage 가 필요

//! Access
strings[2]; //* O[2]

//! Push
strings.push("e"); //* O(1)

//! Pop
strings.pop(); //* O(1)

//! Unshift
strings.unshift("x"); //* O(n). strings[0] 자리에 신규 값을 추가하면, 그 옆에 있던 모든 값들이 오른쪽으로 한 칸씩 밀려나기에 n의 속도가 걸리는 것임.

//! Splice
strings.splice(2, 0, "alien"); //* O(n). 원래는 O(n/2)등 이나 drop constant rule에 의해 O(n):최악의 경우.
