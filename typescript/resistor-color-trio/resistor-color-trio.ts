function parseColor(color: string): number {
    const lc = color.toLowerCase();
    switch(lc) {
        case 'black':
            return 0;
        case 'brown':
            return 1;
        case 'red':
            return 2;
        case 'orange':
            return 3; 
        case 'yellow':
            return 4; 
        case 'green':
            return 5; 
        case 'blue':
            return 6; 
        case 'violet':
            return 7; 
        case 'grey':
            return 8; 
        case 'white':
            return 9; 
        default:
            throw new Error(`color not valid, got '${lc}'`);
    }
}

function decodedValue(colors: string[]): string {
    const value = colors.reduce((acc, c, i) => {
        // ignores third+ band
        if (i > 1) {
            return acc;
        }  

        return `${acc}${parseColor(c)}`;
    }, '');

    return value;
}

function addZeroes(value: string, nbZero: number): string {
    for (let i = 1; i <= nbZero; i += 1) {
        value = value.concat('0');    
    }

    return value;
}

export function decodedResistorValue(colors: string[]): string {
    // slices the two first colors to get the ohms value 
    const value = decodedValue(colors.slice(0,2));
    const third = colors[2];
    if (third === undefined) {
       return `${value} ohms`; 
    }
    
    const nbZero = parseColor(third);
    const valueWithZeroes = addZeroes(value, nbZero);
    const totalZero =[...value].filter(v => v === '0').length + nbZero; 
    const nbZeroToRemove = totalZero < 3 ? 0 : 3;
    const unit = totalZero < 3 ? 'ohms' : 'kiloohms';

    // removes zeroes if the unit is kiloohms
    return `${totalZero < 3 ? valueWithZeroes : valueWithZeroes.slice(0, -3)} ${unit}`; 
}
