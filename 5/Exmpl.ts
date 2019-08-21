{
interface WrapType<X> {
    value: X
}

let age : WrapType<number> = { value: 5 };
let pawel : WrapType<string> = { value: "pawel" }

function wrap<FooBar>(x : FooBar) : WrapType<FooBar> {
    return {
        value: x
    }
}

const x : WrapType<number> = wrap<number>(5);
wrap<string>("pawel");

interface Person {
    age: number,
    name: string,
    email?: string
}

const p : WrapType<Person> = wrap<Person>({name: "pawel", age: 32});

}