export function isPangram(sentence: string) {
    const counters = new Map<string, number>();
    'abcdefghijklmnopqrstuvwxyz'.split('').forEach(l => counters.set(l, 0));
    // updates counters
    const lowerSentence = sentence.toLowerCase();
    lowerSentence.split('').forEach(l => {
        const counter = counters.get(l);
        // breaks if the character is not a valid letter
        if(counter === undefined) {
            return;
        }   

        counters.set(l, counter + 1);
    });

    const values: number[] = [] 
    counters.forEach((value, key) => values.push(value));
    return values.every(v => v > 0); 
}
