export class Matrix {
    _rows: number[][] = [];
    _columns: number[][] = [];
  constructor(values: string) {
      this._rows = values.split('\n').map(v => v.split(' ').map(n => parseInt(n, 10)));
      for (let i = 0; i < this._rows[0].length; i += 1) {
            this._columns.push(this._rows.map(r => r[i]));
      }
  }

  get rows(): number[][] {
      return this._rows;
  }

  get columns(): number[][] {
      return this._columns;
  }
}
