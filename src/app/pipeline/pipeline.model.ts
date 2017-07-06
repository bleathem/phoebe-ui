export class Pipeline {
  public key: string;
  public id: number;

  constructor(key: string, doc_count: number) {
    this.id = doc_count;
    this.key = key;
  }
}
