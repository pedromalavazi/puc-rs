// Map reescreve o item caso já exista um com a mesma key

// TDD - Test Driven Development

var novoMap = new Map();

// 11/11/2011 as 11 da noite
novoMap.set('11/11/2011 - 23:30', { title: 'titulo do site', url: 'google.com' });
novoMap.set('11/11/2011 - 23:30', {});
novoMap.set('11/11/2011 - 23:31', {});

console.log(novoMap);