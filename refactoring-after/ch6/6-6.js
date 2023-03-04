// 1번 방법
var defaultOwner = { firstName: '마틴', lastName: '파울러' };

export function getDefaultOwner() {
  // return defaultOwner 하면 -> 값이 변경될 가능성이 있음
  return { ...defaultOwner };
}

// 2번 방법
class Person {
  #lastName;
  #firstName;

  constructor(lastName,firstName){
    this.#lastName = lastName;
    this.#firstName = firstName;
  }

  get lastName(){
    return this.#lastName;
  }

  get firstName(){
    return this.#firstName;
  }
}

var defaultOwner = new Person({ firstName: '마틴', lastName: '파울러' });

export function getDefaultOwner() {
  return defaultOwner;
}