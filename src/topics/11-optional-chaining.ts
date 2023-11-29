
export interface Passenger{
    name : string;
    children?: string[];
}

const passenger1: Passenger = {
    name : 'Nestor'
}

const passenger2: Passenger = {
    name : 'Nestor',
    children : ['Maria', 'Jose']
}

const printChildren = ( passenger: Passenger ) => {

    const howManyChildren = passenger.children?.length || 0;
    
    console.log(passenger.name, howManyChildren);
    
}

printChildren( passenger1 );
printChildren( passenger2 );