{

    interface Person {
        name: string,
        age: number,
        email?: string
        toString: () => string;
    }

    let pawel : Person = {
        name: "Pawel",
        age: 32
    }

    pawel = {
        name: "Pawel",
        age: 32,
        email: "pawel@kurstypescripta.pl"
    }

    let kinga : Person = {
        name: "Kinga",
        age: 35
    } 

    const sendEmail = (people : Person[]) : Person[] => {

        people.filter(person => person.email).forEach(person => {
            console.log(`Sending email to ${person.email}...`);
        })

        return people;
    }

   
}