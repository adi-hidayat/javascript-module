export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    detail() {
        let obj = {
            'productName' : this.name,
            'productPrice' : this.price
        }

        return obj;
    }

}