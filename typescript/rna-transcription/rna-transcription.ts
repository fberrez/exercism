const dnaToRna = new Map<string, string>([
    ['G', 'C'],                                        
    ['C', 'G'],                                        
    ['T', 'A'],                                        
    ['A', 'U'],                                        
]);

export function toRna(dna: string): string {
    return [...dna].map(n => {
        const rna = dnaToRna.get(n);
        if (rna === undefined) {
            throw new Error('Invalid input DNA.');
        }

        return rna;
    }).join('');
}
