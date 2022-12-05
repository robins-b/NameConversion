let input = document.getElementById("text");
let btn = document.getElementById("convert-btn");
let camel = document.getElementById("camel-case");
let pascal = document.getElementById("pascal-case");
let snake = document.getElementById("snake-case");
let screamSnake = document.getElementById("screaming-snake-case");
let kebab = document.getElementById("kebab-case");
let screamKebab = document.getElementById("screaming-kebab-case");

function camelCase(val) {
  let line = val.split(" ").map((word) => {
    return word[0].toUpperCase().concat(word.slice(1));
  });
  return line[0].toLowerCase().concat(line.slice(1));
}

function pascalCase(val) {
  return val
    .split(" ")
    .map((word) => word[0].toUpperCase().concat(word.slice(1)))
    .join("");
}

function snakeCase(val) {
  return val.split(" ").join("_");
}

function screamingSnakeCase(val) {
  return val.split(" ").join("_").toUpperCase();
}

function kebabCase(val) {
  return val.split(" ").join("-");
}

function screamingKebabCase(val) {
  return val.split(" ").join("-").toUpperCase();
}

btn.addEventListener("click", () => {
  camel.innerText = camelCase(input.value);
  pascal.innerText = pascalCase(input.value);
  snake.innerText = snakeCase(input.value);
  screamSnake.innerText = screamingSnakeCase(input.value);
  kebab.innerText = kebabCase(input.value);
  screamKebab.innerText = screamingKebabCase(input.value);
});
