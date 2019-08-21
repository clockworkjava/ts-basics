class Email {
    
    name: string;
    domain: string;


    constructor(name: string, domain: string) {
        this.name = name;
        this.domain = domain;
    }

    toString = () : string => {
        return `${this.name}@${this.domain}`
    }

}

class Person {

    firstName: string;
    email: Email;

    constructor(name : string, email : Email) {
        this.firstName = name;
        this.email = email;
    }

    toString = () => {
        return `${this.firstName} ${this.email.toString()}`;
    }
}

const pawel = new Person("Pawel", new Email("pawel", "kurstypescripta.pl"));
console.log(pawel.toString());