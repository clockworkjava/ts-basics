{

    class Email {
        
        private name: string;
        private domain: string;
    
    
        constructor(name: string, domain: string) {
            this.name = name;
            this.domain = domain;
        }
    
        public toString = () : string => {
            return `${this.name}@${this.domain}`
        }
    
    }
    
    class Person {
    
        private firstName: string;
        private email: Email;
        private preferences: string[];
    
        constructor(name : string, email : Email) {
            this.firstName = name;
            this.email = email;
            this.preferences = [];
        }
    
        public toString = () => {
            return `${this.firstName} ${this.email.toString()}`;
        }

        public setEmail(email: Email) : void {
            this.email = email;
        }

        public getEmail() : Email {
            console.log(`Email filed was read`);
            return this.email;
        }

        public getPreferences() : string[] {
            return Object.assign([], this.preferences);
        }

        public addPreference(pref : string) : string[] {
            this.preferences.push(pref);
            return this.preferences;
        }
    }
    
    const email : Email = new Email("pawel", "kurstypescripta.pl");
    
    const pawel = new Person("Pawel", email );
    console.log(pawel.getEmail()); 
    
}