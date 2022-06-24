class Girl{
    name
    age
    images
    sex
    address
    phone
    hobbies

    constructor(name, age, images, sex, address, phone, hobbies) {
        this._name = name;
        this._age = age;
        this._images = images;
        this._sex = sex;
        this._address = address;
        this._phone = phone;
        this._hobbies = hobbies;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get images() {
        return this._images;
    }

    set images(value) {
        this._images = value;
    }

    get sex() {
        return this._sex;
    }

    set sex(value) {
        this._sex = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }

    get hobbies() {
        return this._hobbies;
    }

    set hobbies(value) {
        this._hobbies = value;
    }


}


