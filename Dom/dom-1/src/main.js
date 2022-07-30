const div = dom.find(`#text>.red`)[0]
console.log(div);

dom.style(div, `color`, `red`);
console.log(div);

const divList = dom.find('.red');
console.log(divList);

dom.each(divList, (n) => console.log(n));