export class Player {
  captain: boolean;
  name: string;
  image: string;
  constructor(name: string, image: string, captain: boolean) {
    this.name = name;
    this.image = image;
    this.captain = captain;
  }
  static compare(a: Player, b: Player): number {
    return a.compareTo(b);
  }
  compareTo(that: Player): number {
    if (this.captain && !that.captain) {
      return -1;
    }
    else if (that.captain && !this.captain) {
      return 1;
    }
    else {
      return this.name.localeCompare(that.name);
    }

  }
}
