import Livro from './model/livro';
import $ from 'jquery';

const livro = new Livro('O Bixão',100,1);

$('body').append(`<h1>${livro.nome}</h1>`)
$('body').append(`<h2>Preço: R$${-(livro.precoComDesconto())}</h2>`)