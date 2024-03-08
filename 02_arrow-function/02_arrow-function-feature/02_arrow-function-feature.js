// 02_화살표 함수의 특징
// 화살표 함수는 기존의 함수보다 표현만 간략한 것이 아니라 내부 동작 또한 간략화 되어 있다.

let theater = {
    store : "건대점",
    title : ["어벤져스","겨울왕국","스파이더맨","라이온킹","알라딘"],

    showMovieList(){
        this.title.forEach(
            // 화살표 함수 본문에서 this에 접근하면 외부에서 값을 가져오므로
            // this.store은 theater.store "건대점"을 의미한다.
        title => console.log(this.store + ':' + title)
        );
    }

    // showMovieList(){
    //     this.title.forEach(function(title){
    //         console.log(this.store+ ':' + title);
    //     });
    // }
};

theater.showMovieList();

// 화살표 함수는 new 와 함께 호출할 수 없다.
const arrowFunc = () => {};

// 화살표 함수는 생성자 함수로 사용할 수 없다
// new arrowFunc();
// 화살표 함수는 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 프로토타입도 생성하지 않는다.
console.log(arrowFunc.hasOwnProperty('prototype'));

class Animal {

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    move(loseWeight) {
        if (this.weight > loseWeight){
            this.weight -= loseWeight;
        console.log(`${this.name}(은)는 움직임으로 인해 ${loseWeight}kg 감량되어 ${this.weight}kg 이 되었습니다.`);
    }
}
}

class Tiger extends Animal{

    move(loseWeight){

        setTimeout(()=>super.move(loseWeight),1000); // 지연시간 mm초 단위로 설정
        console.log('먹이를 찾아 산기슭을 어슬렁');
    }
}

let tiger = new Tiger("백두산 호랑이", 90);
tiger.move(1);

// 화살표 함수는 arguments 를 지원하지 않는다.
// 화살표 함수는 본인의 arguments 3,4 가 아닌 상위 스코프인 즉시 실행 함수의 arguments 1,2 를 참조한다.
(function(){
    const arrowFunc = () => console.log(arguments);
    arrowFunc(3,4);
})(1,2);