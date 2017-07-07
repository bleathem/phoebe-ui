export class Pipeline {
  public packageBuilds: PackageBuild[];

  constructor(public key: string, public id: number) {
    this.id = id;
    this.key = key;
  }
}

export class PackageBuild {
  constructor(public key: number, public id: number) {
    this.id = id;
    this.key = key;
  }
}

export class TestCase {
  constructor(public key: string, public id: number) {
    this.id = id;
    this.key = key;
  }
}
