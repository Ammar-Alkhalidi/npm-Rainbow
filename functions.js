const colors = ["red", "green", "yellow", "blue", "magenta", "cyan"];
let i = 0;

export default function getNextColor() {
  const color = colors[i++];
  if (i === colors.length) {
    i = 0;
  }
  return color;
}
