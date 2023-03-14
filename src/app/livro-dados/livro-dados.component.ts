import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../Editora';
import { Livro } from '../Livro';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {

  ListaLivros: any;
  ValorSelecionado: any;

  livro: Livro[] = [] ;

  autoresForm: string = '';

  editoras: Editora[] = [];

  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService, private router: Router) { }

  ngOnInit(): void {
  }

  incluir(livro: Livro): void {
    this.autoresForm = `${livro.titulo}, ${livro.resumo}, ${livro.codEditora}, ${livro.autores}`;
  }

}
