// class : property와 행동 정의 가능

class Animal {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;

        this.x = 0;
        this.y = 0;
    }
    move(_x, _y) {
        const self = this
        function move2() {
            console.log(self.x)
        }
        // const move3 = () => {
        //     console.log(this.x)
        // }
        // arrow function은 this 사용 가능, move2 = move3로 작동함
        move2(); // or use move2.bind(this)
        this.x += _x;
        this.y += _y;
    }
}

class Dog extends Animal{
    constructor(name, age, color) {
        super(name, age, color);

        this.weight = 20
    }
    bark() {
        console.log(`Bowwow! I'm ${this.name}. I'm ${this.age} years old. My color is ${this.color}. ${this.weight}kg now.`)
    }
}
class Cat extends Animal{
    constructor(name, age, color){
        super(name, age, color);
        this.weight = 10;
    }

    bark() {
        console.log(`Meow! I'm ${this.name}. I'm ${this.age} years old. My color is ${this.color}. ${this.weight}kg now.`)
    }
    eat(){
        this.weight += 1;
    }
}
const cat = new Cat('Bob', 10, 'blue')
cat.bark();
cat.move(1,1)


const dog = new Dog('Pretty', 3, 'Red')
dog.bark()
dog.move(3,3)

const Animal2 = function (name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

Animal2.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
}
// funciton 사용해서 class와 동일하게 사용 가능
// class로 해도 prototype 사용가능

const animal2 = new Animal2('hi', 20, 'green');

// OOP
// class : c++, c$, java, ...