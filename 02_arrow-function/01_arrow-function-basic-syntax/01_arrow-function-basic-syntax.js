// 화살표 함수 기본 문법
// ES6에서 도입 된 화살표 함수는 function 키워드 대신 화살표를 사용해 좀 더 간략한 방법으로 함수를 선언할 수 있다.
// 화살표 함수는 항상 익명 함수로 정의한다. 본문이 한 줄인 함수를 작성할 때 유용하다.

let message;
message = function () {
    return "hello world";
};

console.log(message());

message = () => {
    return "Arrow Fuction!";
};

console.log(message());

message = () => "Arrow Function are Simple!";

console.log(message());

message = (val1, val2) => "Arrow" + val1 + val2;

console.log(message('Function', '!'));

message = val => "Arrow" + val;

console.log(message('Function are good'));

// 객체 리터럴을 반환하는 경우 소괄호로 감싼다.
// 소괄호로 감싸지 않을 경우 함수 몸체 중괄호로 잘못 해석한다.
const createUser = (id, name) => ({ id, name });
console.log(createUser(1, "유관순"));

// 고차 함수에 인수로 전달 가능하여 일반적인 함수 표현식 보다 표현이 간결해진다.
console.log([1, 2, 3, 4, 5].map(function (val) { return val * 10 }));
console.log([1, 2, 3, 4, 5].map(val => val * 10));
