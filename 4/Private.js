"use strict";
{
    class Email {
        constructor(name, domain) {
            this.toString = () => {
                return `${this.name}@${this.domain}`;
            };
            this.name = name;
            this.domain = domain;
        }
    }
    class Person {
        constructor(name, email) {
            this.toString = () => {
                // return `${this.firstName} ${this.email.toString()}`;
            };
            this.firstName = name;
            this.email = email;
        }
    }
    const email = new Email("pawel", "kurstypescripta.pl");
    const pawel = new Person("Pawel", email);
    // console.log(pawel.toString()); 
}
