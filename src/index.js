/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'; /* Serve para fazer as páginas sem dar refresh (spa) */
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (<div>Página 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact /> {/* Como tem "exact" depois, só vai pra home se path for exatamente "/" */}
      <Route path="/cadastro/video" component={CadastroVideo} /> {/* Se essa linha estivesse depois da linha <Route path="/" component={App} /> (sem "exact"), quando a gente colocasse esse path "/cadastro/video" na url, ia aparecer a home */}
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} /> {/* Se vc apagar o path, o que tiver no final aqui (esse componente dessa linha no caso) vai ser o que vai ser carregado independente de qualquer coisa */}

    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
