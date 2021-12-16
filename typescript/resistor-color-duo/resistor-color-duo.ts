export function decodedValue(colors: string[]) {
    const value = colors.reduce((acc, c, i) => {
        // ignores third+ band
        if (i > 1) {
            return acc;
        }  

        const lc = c.toLowerCase();
        switch(lc) {
            case 'black':
                return acc + '0';
            case 'brown':
                return acc + '1';
            case 'red':
                return acc + '2';
            case 'orange':
                return acc + '3'; 
            case 'yellow':
                return acc + '4'; 
            case 'green':
                return acc + '5'; 
            case 'blue':
                return acc + '6'; 
            case 'violet':
                return acc + '7'; 
            case 'grey':
                return acc + '8'; 
            case 'white':
                return acc + '9'; 
            default:
                throw new Error(`color not valid, got '${c}'`);
        }
    }, '');

    return parseInt(value, 10);
}
