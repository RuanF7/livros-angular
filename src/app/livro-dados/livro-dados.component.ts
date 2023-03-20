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
export class LivroDadosComponent {

  
  livro: Livro = new Livro(0, 0, 'titulo','resumo', ['autores']);

  autoresForm: string = '';

  editoras: Array<Editora> = [];

  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService, private router: Router) { }

  ngOnInit(): void {
    this.servEditora.getEditoras().subscribe((editoras) => {
      this.editoras = editoras
    }
    )
  }


  incluir() {
    this.livro.autores = this.autoresForm.replace(',', '\n').split('\n');
    console.log(this.autoresForm)
    this.servLivros.incluir(this.livro)
    this.router.navigateByUrl('/lista');
  }

}
