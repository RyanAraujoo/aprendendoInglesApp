export class Heart {
  constructor(
    public full: boolean = true,
    public urlFullHeart: string = '../../assets/full-Heart.png',
    public urlEmptyHeart: string = '../../assets/empty-Heart.png'
  ) {}

  setHeart(): string {
    if (this.full) {
      return this.urlFullHeart;
    } else {
      return this.urlEmptyHeart;
    }
  }
}
