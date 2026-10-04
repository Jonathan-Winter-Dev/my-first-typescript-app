export default class Account {
  name: string;
  balance: number;
  id: string;
  isPlatinum: boolean;

  constructor(name: string, isPlatinum: boolean) {
    this.name = name;
    this.balance = 0;
    this.id = crypto.randomUUID();
    this.isPlatinum = isPlatinum;
  }
}
