export class Robot {
   static readonly ALPHA =  [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z' ];
   static readonly NO_OF_ALPHA = 2;
   static readonly NO_OF_NUMBERS = 3;
   static usedNames = new Set<string>();

  _name: string = '';
  constructor() {
        this._name = this.genRandomName();
  }

  public get name(): string {
      return this._name;
  }

  public resetName(): void {
        this._name = this.genRandomName();
  }

  public static releaseNames(): void {
      this.usedNames.clear();
  }

  private randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private genRandomName(): string {
    let name = '';

    for(let i = 0; i < Robot.NO_OF_ALPHA; i += 1) {
        name += Robot.ALPHA[this.randomNumber(0, Robot.ALPHA.length)];
    }
    
    for(let i = 0; i < Robot.NO_OF_NUMBERS; i += 1) {
        name += this.randomNumber(0, 10);
    }

    if (Robot.usedNames.has(name)) {
        return this.genRandomName();
    }

    Robot.usedNames.add(name);
    return name;
  }
}
