==================================

3 tipos 
const = imutavel dentro do proprio bloco
let = criado somente no bloco criado
var = ultrapassa o bloco em que foi criado

==================================

Avaliação de Desempenho
operações primitivas = 1 contagem
- atribuição de valores
- chamadas de métodos
- operações aritméticas
- comparação de dois números
- acesso a um arranjo
- retorno de um método

==================================

Arrays
push - adiciona elemento na ultima posicao
pop - remove o elemento da ultima posicao
shift - remove o elemento da primeira posicao 
unshift - adiciona elemento na primeira posicao
splice - adiciona elemento em posicao especifica 
slice - retorna copia do array


Pilha (LIFO) 
  - push
  - pop

Fila (FIFO)
  - push
  - shift

==================================

Set (conjuntos)
  - Nao permite armazenamento de dados iguais

==================================

Maps
  - Não guardam posição, elas trabalham com chave-valor;
  - Chaves não se repetem
  - Valores podem se repetir

==================================

Lista Encadeada

 - Simples: Os nós(nodo) só sabem o próximo elemento
 - Duplo: Os nós(nodo) sabem o próximo e o anterior

 - ajuda a evitar o realocamento dos dados caso queira adicionar um elemento no começo ou no final da lista
 - trabalha com referências

==================================

Arvores

  - Estruturas de dados não lineares
  - Todo nodo V de T diferente da raiz tem um único nodo pai, w
  
  - Dois nodos que são filhos do mesmo pai, são irmãos
  - Um nodo V é externo se não tem filhos
  - Um nodo V é interno se tem um ou mais filhos

  - Nodo interno = galho
  - Nodo externo = folha

  - Grau: 
    - É o número de sub-arvores de um nodo
    - Grau = 0, quando o nodo não possui filhos

  - Nível de um nodo:
    - Número de linhas que liga o nodo à raíz

  - Altura
    - É o nível mais alto da árvore

==================================

Recursão

  - A recursão é alcançada chamando-se a mesma função

==================================

Árvore Binária 

  - é uma arvore ordenada onde:
    - todos o nodos tem no máximo dois filhos
    - cada filho é rotulado por (da esquerda ou da direita)
    - na ordenação o filho da esquerda precede o da direita

  - árvore binária cheia = cada nodo tem 0 ou 2 filhos

  - apresenta 4 informações:
    - valor
    - pai
    - filho da esquerda
    - filho da direita


  - Formas de Busca/caminho
    
    - profundidade
      - pré-fixado (entrega o resultado antes de ir pro próximo nodo)
      - pós-fixado (entrega o resultado depois de navegar até o fim ou até uma folha)
      - central (entrega o resultado depois de voltar do primeiro filho e antes de ir para o próximo filho)
    
    - largura (entrega os elementos do mesmo nível inteiro antes de ir para o próximo nível)

==================================

Tipos de Algoritmos

  - Divisão e conquista
    - Quebra o problema em partes menores independentes 
    - Combina os resultados

  - Programação dinâmica
    - Quebra o problema em partes menores independentes 
    - Não combina os resultados

  - Gulosos (greedy)
    - Considera os melhoramentos locais para definir caminhos
  
  - Algoritmo de backtracking
    - Considera rever a partir de um ponto ótimo passado caso o atual não seja bom

===================================

Tipos de ordenação

  - Bubble Sort
    - Compara dois elementos por vez, passando por todo o vetor n^2 vezes

  - Selection Sort
    - Restringe o número de trocas realizadas ao longo da ordenação
      - Compara com todos do array para localizar o que deve ser trocado

  - Insertion Sort
    - Abre espaço para inserção

  - Merge Sort
    - Explore a recursividade 

  - Quick Sort
    - Define pivô
    - Quebra o problema no pivô
    - Refefine o pivô pra cada segmento
    - Retorna ordenando

==================================

Tipos de Busca

  - Busca linear/sequencial 
    - Investiga cada elemento da estrutura
      
  - Busca binária
    - Sorteia uma posição e verifica se o valor desejado está antes ou depois do local sorteado

