// 03_생성자 오버라이딩
// 클래스가 다른 클래스를 상속 받고 constructor 가 없는 경우에는 비어있는 constructor 가 만들어진다.
// 생성자는 기본적으로 부모 constructor 를 호출한다.
// 이 때 부모 constructor 에도 인수를 모두 전달하는데 클래스에 자체 생성자가 없는 경우엔 이런 일이 모두 자동으로 일어난다.
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

class Deer extends Animal{
    
    constructor(name,weight, legLength){
        super(name,weight);  // super.키워드는 this. 키워드 이전에 반드시 사용.
        this.legLength;
    }

    hide(place){
        console.log(`${this.name}(은)는 ${place}에 숨습니다.`);
    }
}

let deer = new Deer('슬픈 눈망울의 사슴', 40 , 1);
deer.hide('동굴 안');