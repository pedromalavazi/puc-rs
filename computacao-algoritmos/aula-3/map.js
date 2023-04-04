

var map = new Map();

map.set('45667120879', { nome: 'Pedro', sobrenome: 'Malavazi', idade: 25 });
map.set('pedro', { oi: 'Ola' })
map.delete('pedro');


var map2 = new Map();
map2.set('one', '1');
map2.set('two', '2');

for (const [key, value] of map2) {
    console.log('Key = ' + key);
    console.log('Value = ' + value);
}

