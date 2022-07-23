let container = document.createElement("section");

for (i = 1; i < 10 + 1; i += 1) {
  let e = document.createElement("figure");
  let p1 = document.createElement("output");
  let p2 = document.createElement("output");
  let p3 = document.createElement("output");
  let p4 = document.createElement("output");
  p1.textContent = `hello, i am P \n`;
  e.appendChild(p1);
  p2.textContent = `hello, i am 2P \n`;
  e.appendChild(p2);
  p3.textContent = `hello, i am 3P \n`;
  e.appendChild(p3);
  p4.textContent = `hello, i am 4P \n`;
  e.appendChild(p4);
  e.className = `item-${i}`;
  // e.textContent = `hello world, i am ${i}.`;
  container.appendChild(e);
  console.info("elements added.");
}

container.classList.add("grid-container");
document.body.appendChild(container);
