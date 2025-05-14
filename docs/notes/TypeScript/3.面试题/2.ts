type User = {
  name: string;
};
interface Man extends User {
  age: number;
}
const user: Man = {
  name: '123',
  age: 123
}
