// let n = 10;


let container = document.createElement("div");

for (i = 1; i < 10 + 1; i += 1) {
    let e = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    p1.textContent = `hello, i am P`;
    e.appendChild(p1);
    p2.textContent = `hello, i am 2P`;
    e.appendChild(p2);
    p3.textContent = `hello, i am 3P`;
    e.appendChild(p3);
    p4.textContent = `hello, i am 4P`;
    e.appendChild(p4);
    e.className = `item-${i}`;
    // e.textContent = `hello world, i am ${i}.`;
    container.appendChild(e);
    console.info("elements added.")
}

container.classList.add("grid-container");
document.body.appendChild(container);
