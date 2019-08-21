{
    interface Person {
        name: string,
        age: number,
        email?: string
    }

    interface Child extends Person {
        favouriteColor: string;
    }

    interface Adult extends Person {
        favouriteBeverage: string;
    }

    let alicja : Child = {
        name: "Alicja",
        age: 5,
        favouriteColor: "Pink"
    }

    interface Driver {

    }

    interface CoffeeeDrinker extends Person, Adult, Driver {

    }

}