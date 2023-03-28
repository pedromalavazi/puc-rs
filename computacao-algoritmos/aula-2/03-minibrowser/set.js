// Set não adiciona novos itens caso já exista um com o mesmo valor

var novoSet = new Set();

novoSet.add('backend');
novoSet.add('frontend');
novoSet.add('backend');
novoSet.add('backend');
novoSet.add('backend');
novoSet.add('mobile');

console.log(novoSet);