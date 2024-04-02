

export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Cesar',
}

const passenger2: Passenger = {
    name: 'Fernando',
    children: ['Naitalia', 'Elizabeth']
}

const printChildren = ( passenger: Passenger ) => {
    
    const howManyChildren = passenger.children?.length || 0;
    //const howManyChildren = passenger.children?.length;

    console.log( passenger.name, howManyChildren );

    return howManyChildren;

}

printChildren( passenger2 );

printChildren( passenger1 );