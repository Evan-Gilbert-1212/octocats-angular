export interface IOctocats {
  data: Object;
}

export class Octocats implements IOctocats {
  constructor(public data: Object) {}
}
