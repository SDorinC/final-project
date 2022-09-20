export class User {
    constructor(name, password) {
        this._name = name;
        this._password = password;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }
}

export class Admin extends User {
    constructor(name, password) {
        super(name, password);
        this._loginLevel = 1;
        this._name = name;
        this._password = password;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }


    get loginLevel() {
        return this._loginLevel;
    }
}

export class Editor extends User {
    constructor(name, password) {
        super(name, password);
        this._loginLevel = 2;
        this._name = name;
        this._password = password;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }


    get loginLevel() {
        return this._loginLevel;
    }
}

export class Teacher extends User {
    constructor(name, password, subject, classes, photo) {
        super(name, password);
        this._loginLevel = 3;
        this._name = name;
        this._password = password;
        this._subject = subject;
        this._classes = classes;
        this._photo = photo;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }


    get loginLevel() {
        return this._loginLevel;
    }

    get subject() {
        return this._subject;
    }

    set subject(value) {
        this._subject = value;
    }


    get classes() {
        return this._classes;
    }

    set classes(value) {
        this._classes = value;
    }

    get photo() {
        return this._photo;
    }

    set photo(value) {
        this._photo = value;
    }
}

export class Student extends User {
    constructor(name, password, schoolCl, grades, absences) {
        super(name, password);
        this._loginLevel = 4;
        this._name = name;
        this._password = password;
        this._grades = grades;
        this._absences = absences;
        this._schoolCl = schoolCl;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }


    get loginLevel() {
        return this._loginLevel;
    }

    get schoolCl() {
        return this._schoolCl;
    }

    set schoolCl(value) {
        this._schoolCl = value;
    }

    get grades() {
        return this._grades;
    }

    set grades(value) {
        this._grades = value;
    }

    get absences() {
        return this._absences;
    }

    set absences(value) {
        this._absences = value;
    }
}