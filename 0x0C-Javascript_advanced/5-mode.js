function changeMode(size, weight, transfrom, background, color) {
  return function () {
    const body = document.querySelector("body");
    body.style.fontSize = size;
    body.style.fontWeight = weight;
    body.style.transform = transfrom;
    body.style.backgroundColor = background;
    body.style.color = color;
  };
}

function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  /* HTML */
  const body = document.querySelector("body");

  const p = document.createElement("p");
  p.innerText = "Welcome Holberton";
  body.appendChild(p);

  const ButtonSpooky = document.createElement("button");
  ButtonSpooky.innerText = "Spooky";
  const ButtonDark = document.createElement("button");
  ButtonDark.innerText = "Dark mode";
  const ButtonScreamMode = document.createElement("button");
  ButtonScreamMode.innerText = "Scream mode";

  body.appendChild(ButtonSpooky);
  body.appendChild(ButtonDark);
  body.appendChild(ButtonScreamMode);

  ButtonSpooky.onclick = spooky;
  ButtonDark.onclick = darkMode;
  ButtonScreamMode.onclick = screamMode;
}

main();
