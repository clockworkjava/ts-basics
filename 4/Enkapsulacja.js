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
                return `${this.firstName} ${this.email.toString()}`;
            };
            this.firstName = name;
            this.email = email;
            this.preferences = [];
        }
        setEmail(email) {
            this.email = email;
        }
        getEmail() {
            console.log(`Email filed was read`);
            return this.email;
        }
        getPreferences() {
            return Object.assign([], this.preferences);
        }
        addPreference(pref) {
            this.preferences.push(pref);
            return this.preferences;
        }
    }
    const email = new Email("pawel", "kurstypescripta.pl");
    const pawel = new Person("Pawel", email);
    console.log(pawel.getEmail());
}
