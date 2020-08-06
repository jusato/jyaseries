/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'; /* Serve para fazer as páginas sem dar refresh (spa) */
import Home from './pages/Home';
import CadastroSerie from './pages/cadastro/Serie';
import CadastroCategoria from './pages/cadastro/Categoria';

import EditarCategoria from './pages/editar/Categoria';
import EditarSerie from './pages/editar/Serie';
import Watch from './pages/watch';

const Pagina404 = () => (<div>Página 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact /> {/* Como tem "exact" depois, só vai pra home se path for exatamente "/" */}
      <Route path="/watch" component={Watch} />
      <Route path="/cadastro/serie" component={CadastroSerie} /> {/* Se essa linha estivesse depois da linha <Route path="/" component={App} /> (sem "exact"), quando a gente colocasse esse path "/cadastro/serie" na url, ia aparecer a home */}
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/editar/categoria/:id" component={EditarCategoria} />
      <Route path="/editar/serie/:id" component={EditarSerie} />
      <Route component={Pagina404} /> {/* Se vc apagar o path, o que tiver no final aqui (esse componente dessa linha no caso) vai ser o que vai ser carregado independente de qualquer coisa */}

    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
