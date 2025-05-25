class b {
  constructor(public a: string, public b?: string) {}
}

class c extends b {
  constructor(public readonly a: string, public b: string, public d?: string) {
    super(a);
  }
}
