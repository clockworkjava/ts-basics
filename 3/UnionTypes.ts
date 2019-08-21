{
    const dice : 1 | 2 | 3 | 4 = 4;

    interface Person {
        name: string,
        age: number,
        email: string
    }

    interface Pet {
        name: string,
        age: number,
        breed: string
    }

    let union : Person | Pet = {
        name: "Pawel",
        age: 32,
        // email: "cat@cat.com",
        breed: "cat"
    }

    let join : Person & Pet = {
        name: "a",
        age: 3,
        email: "cat@cat.com",
        breed: "cat"
    }
}     