import { Component, OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../Editora';
import { Livro } from '../Livro';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  editoras: Editora[] = [];
  

  livros: Livro[] = [];  

  livrosDetails = '';


  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService) {}
  
  ngOnInit(): void {}

  showLivros(livro: Livro): void {
    this.livrosDetails = `${livro.titulo}, ${livro.resumo}, ${livro.codEditora}, ${livro.autores}`;
  }

  /*removeLivros(livro: Livro) {
    console.log('Excluindo livro')
   this.livros = this.servLivros.remove(this.livros, livro);
  }*/
  
  
}
