class Instrument {}


class Piano {

    name: string;
    price: number;
    priceSale: number;

    constructor(name: string, price: number, priceSale: number) {
        this.name = name;
        this.price = price;
        this.priceSale = priceSale;
    }
}


class Guitare {

    name: string;
    price: number;
    priceSale: number;
    width: number;
    lenght: number;

    constructor(name: string, price: number, priceSale: number) {
        this.name = name;
        this.price = price;
        this.priceSale = priceSale;
    }
}



let garfield = new Animal("Garfield");