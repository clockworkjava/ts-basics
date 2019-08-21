{
    class Rectangle {

        private a : number;
        private b : number;

        constructor(a: number, b : number) {
            this.a = a;
            this.b = b;
        }

        public area = () : number => {
            return this.a*this.b;
        }
    }

    class Square extends Rectangle {

        constructor(a: number) {
            super(a,a);
        }

        public toString = () : string => {
            return "Jestem kwadratem";
        }
    }

    let prostokat : Rectangle = new Rectangle(10,5);
    let kwadrat : Square = new Square(5);

    console.log(prostokat.area());
    console.log(kwadrat.area());
    console.log(kwadrat.toString());
}