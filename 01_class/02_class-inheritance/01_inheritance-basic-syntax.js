// 02_클래스 상속
// 클래스 상속을 사용하면 클래스를 다른 클래스로 확장할 수 있다.

// 01. 상속 기본 문법
class Animal{

    constructor(name, weight){
        this.name = name;
        this.weight =weight;
    }

    eat(foodWeight){
        this.weight+= foodWeight;
        console.log(`${this.name}(은)는 ${foodWeight}kg의 식사를 하고 ${this.weight}kg 이 되었습니다.`);
    }

    move(loseWeight){
        if(this.weight > loseWeight)
            this.weight -= loseWeight;
            console.log(`${this.name}(은)는 움직임으로 인해 ${loseWeight}kg 감량되어 ${this.weight}kg 이 되었습니다.`);
        
    }
}

let animal = new Animal("동물",30);
animal.eat(1);
animal.move(0.5);

class Human extends Animal {

    develop(language){
        console.log(`${this.name}(은)는 ${language}로 개발을 합니다.`);
    }
}

let human = new Human("수강생", 70);
human.eat(2);
human.move(1);
human.develop("javaScript");