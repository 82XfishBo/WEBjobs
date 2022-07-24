class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log('你好，我叫' + this.name);
    }
}