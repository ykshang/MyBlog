class b {
  constructor(
    public a: string,
    public b?: string,
  ) {
  }
}

class c extends b {
  constructor(
    public c: string,
    public d?: string,
  ) {
    super(c);
  }
}
