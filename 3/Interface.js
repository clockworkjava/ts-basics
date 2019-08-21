"use strict";
{
    let pawel = {
        name: "Pawel",
        age: 32
    };
    pawel = {
        name: "Pawel",
        age: 32,
        email: "pawel@kurstypescripta.pl"
    };
    let kinga = {
        name: "Kinga",
        age: 35
    };
    const sendEmail = (people) => {
        people.filter(person => person.email).forEach(person => {
            console.log(`Sending email to ${person.email}...`);
        });
        return people;
    };
}
