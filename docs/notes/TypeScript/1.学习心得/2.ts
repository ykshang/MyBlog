interface User {
  speak(): number;
  speak(x: boolean): boolean;
  speak(x: string, y: string): string;
}

function MyFunc(): number;
function MyFunc(x: boolean): boolean;
function MyFunc(x: string, y: string): string;
function MyFunc(x?: boolean | string, y?: string): number | boolean | string {
  if (x === undefined && y === undefined) return 1;
  if (typeof x === "boolean" && y === undefined) return true;
  if (typeof x === "string" && typeof y === "string") return "hello";
  throw new Error("wrong parameters");
}

let xiaohong: User = {
  speak: MyFunc,
};
const xiaobai: User = {
  speak: function(x?: boolean | string, y?: string): any {
    if (x === undefined && y === undefined) return 1;
    if (typeof x === "boolean" && y === undefined) return true;
    if (typeof x === "string" && typeof y === "string") return "hello";
    throw new Error("wrong parameters");
  }
};
