{

class Email {
    
    public name: string;
    public domain: string;


    constructor(name: string, domain: string) {
        this.name = name;
        this.domain = domain;
    }

    public toString = () : string => {
        return `${this.name}@${this.domain}`
    }

}

class Person {

    public firstName: string;
    public email: Email;

    constructor(name : string, email : Email) {
        this.firstName = name;
        this.email = email;
    }

    public toString = () => {
        return `${this.firstName} ${this.email.toString()}`;
    }
}

const pawel = new Person("Pawel", new Email("pawel", "kurstypescripta.pl"));
console.log(pawel.toString()); 

}