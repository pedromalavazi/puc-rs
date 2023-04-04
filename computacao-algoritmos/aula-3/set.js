// Sets nao armazenam valores repetidos dentro de si;

var set = new Set();

set.add(1);
set.add(1);
set.add(1);
set.add(1);
set.add(2);
set.add(2);

console.log(set);


console.log(set.has(3));