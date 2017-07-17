export class Pipeline {
  public packageBuilds: PackageBuild[];

  constructor(public key: string, public id: number) {
    this.id = id;
    this.key = key;
  }
}

export class PackageBuild {
  public testSuites: TestSuite[];
  constructor(public key: number, public id: number) {
    this.id = id;
    this.key = key;
    this.testSuites = [];
  }
}

export class TestSuite {
  public testCases: TestCase[];

  constructor(public key: string) {
    this.key = key;
    this.testCases = [];
  }
}

export class TestCase {
  constructor(public key: string, public count: number) {
    this.key = key;
    this.count = count;
  }
}
