
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

export interface TaxtCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation( options: TaxtCalculationOptions ): [number, number] {

    const {tax, products} = options;

    let total = 0;

    products.forEach( ({ price }) => {
        total += price;
    });

    return [total, tax];

}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    //Si tienes una variable llamada igual a una propiedad javascript
    //infiere que asignaras esa variable a la propiedad sin necesidad
    //de especificarlo
    tax
});