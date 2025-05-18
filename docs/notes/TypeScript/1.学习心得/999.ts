interface Style {
  color: string;
}

type Shape = {
  name: string;
};
class Size {
  width: number;
  height: number;
}
interface Circle extends Style, Shape, Size {
  radius: number;
}
