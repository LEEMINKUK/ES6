// 01_클래스 기본 문법
// 동일한 종류의 객체를 여러 개 생성해야 하는 경우 객체 리터럴을 어러 개 생성하기 보다 클래스 문법을 통해 동일한 종류의 객체를 재생성 할 수 있다.

// 01. clss declaration(클래스 선언)
class Student{

    // 생성자를 통해 인스턴스 생성 및 초기화
    // 생성자는 1개 이상 정의 될 수 없으며 생략할 경우 암묵적으로 정의 된다.
    constructor(name){
        this.group = 1;
        this.name = name;
    }
    // 프로토타입 메서드
    introduce(){
        console.log(`안녕하세요. 저는 ${this.group}반 학생 ${this.name} 입니다.`);
    }
};

// Student 클래스를 선언하고 new Student() 를 호출하면 새로운 객체가 생성되며
// 넘겨받은 인수 name 과 함께 constructor 가 자동으로 실행되어 "홍길동" 이 this.name 에 할당된다.
// 클래스 몸체에 정의한 메서드는 기본적으로 프로토타입 메서드가 된다.

let student = new Student("홍길동");
student.introduce();

console.log(typeof Student);    // 클래스는 함수의 한 종류이다.
console.log(Student.prototype.introduce);  // 클래스 내부에 정의한 메서드는 클래스.prototype에 저장된다.
console.log(Object.getOwnPropertyNames(Student.prototype));  // 생성자와 introduce 메서드를 가지고 있다.

function Teacher(name){
    this.group =1;
    this.name = name;
}
Teacher.prototype.introduce = function(){
    console.log(`안녕하세요 저는 ${this.group}반 교사 ${this.name} 입니다.`);
}

let teacher = new Teacher("유관순");
teacher.introduce();

// Student(); // 클래스는 new 키워드 반드시 필요
Teacher();    // 생성자 함수는 new 키워드 생략 가능