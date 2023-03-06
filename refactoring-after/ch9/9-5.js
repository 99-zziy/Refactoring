const customerRespository = new CustomerRespository();
const order = new Order(data.number,customerRespository.registerCustomer(data.customerId))

class Order {
  constructor(number, customer) {
    this._number = number;
    this._customer = customer;
  }

  get customer() {
    return this._customer;
  }

}

class Customer {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }
}

class CustomerRespository {
  #customer;

  constructor() {
    this.#customer = new Map()
  }

  registerCustomer(id){
    if (!this.#customer.has(id)) {
      this.#customer.set(id, new Customer(id));
    }

    return findCustomer(id);
  }

  findCustomer(id){
    return this.#customer.get(id);
  }
}
