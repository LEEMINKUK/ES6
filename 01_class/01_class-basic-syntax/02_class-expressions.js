// 02_클래스 표현식

// 1. 익명 클래스 표현식
let Tutor = class {
    teach(){
        console.log('안녕하세요');
    }
};

new Tutor().teach();

// 2. 기명 클래스 표현식
let Tutee = class MyTutee {
    learn(){
        console.log('반갑습니다');
    }
};

new Tutee().learn();