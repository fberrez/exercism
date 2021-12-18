const MIN_DICE: number = 1;
const MAX_DICE: number = 6;

export class DnDCharacter {
  public strength: number;
  public dexterity: number;
  public constitution: number;
  public intelligence: number;
  public wisdom: number;
  public charisma: number;
  public hitpoints: number;

  public constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  public static rolldice(): number {
      return Math.floor(Math.random() * (MAX_DICE - MIN_DICE + 1) + MIN_DICE)
  }

  public static generateAbilityScore(): number {
      return new Array(4).fill(0).map(v => DnDCharacter.rolldice()).sort((a,b) => a - b).slice(0,3).reduce((acc, v) => acc + v, 0);
  }

  public static getModifierFor(abilityValue: number): number {
      return Math.floor((abilityValue - 10) / 2);
  }
}
