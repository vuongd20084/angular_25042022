export class Cart{
    id: String;
    name: String;
    slug: String;
    qty: Number;
    price: Number;

    constructor(
        id?: String, 
        name?: String, 
        slug?: String, 
        qty?: Number, 
        price?: Number){
            this.id = id || '';
            this.name = name || '';
            this.slug = slug || '';
            this.qty = qty || 0;
            this.price = price || 0;
        }
}