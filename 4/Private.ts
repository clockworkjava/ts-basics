{

    class Email {
        
        private name: string;
        private domain: string;
    
    
        constructor(name: string, domain: string) {
            this.name = name;
            this.domain = domain;
        }
    
        private toString = () : string => {
            return `${this.name}@${this.domain}`
        }
    
    }
    
    class Person {
    
        private firstName: string;
        private email: Email;
    
        constructor(name : string, email : Email) {
            this.firstName = name;
            this.email = email;
        }
    
        private toString = () => {
            // return `${this.firstName} ${this.email.toString()}`;
        }
    }
    
    const email : Email = new Email("pawel", "kurstypescripta.pl");
    
    const pawel = new Person("Pawel", email );
    // console.log(pawel.toString()); 
    
}