/* eslint-disable no-alert */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

import ButtonArea from '../../../components/FormField/ButtonArea';
import {
  Table, Header, Column, Row, Body, Action,
} from '../../../components/Table';
import categoryRepository from '../../../repositorios/categorias';
import Form from '../../../components/Form';
import Container from '../../../components/Container';
import Spinner from '../../../components/Spinner';

function CadastroCategoria() {
  const history = useHistory();
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // const URL_TOP = window.location.hostname.includes('localhost')
    //   ? 'http://localhost:8080/categorias'
    //   : 'https://jyaseries.herokuapp.com/categorias';
    // fetch(URL_TOP)
    //   .then(async (respostaDoServidor) => {
    //     const resposta = await respostaDoServidor.json();
    //     setCategorias([
    //       ...resposta,
    //     ]);
    //   });
    categoryRepository.getAll()
      // eslint-disable-next-line no-shadow
      .then((categorias) => {
        setCategorias([...categorias]);
      });

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Assistindo',
    //       descricao: 'Uma categoria',
    //       cor: '#cbd1ff',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Dar +1 Chance',
    //       descricao: 'Outra categoria',
    //       cor: '#cbd1ff',
    //     },
    //   ]);
    // }, 4 * 1000);
  }, []);

  function handleSubmit(infosDoEvento) {
    infosDoEvento.preventDefault();
    categoryRepository.create({
      titulo: values.titulo,
      link: values.link,
      cor: values.cor,
      link_extra: {
        text: values.descricao,
        url: values.link,
      },
    }).then(() => {
      setCategorias([...categorias, categorias]);
      history.push('/cadastro/categoria');
    });

    clearForm(); // limpar forms toda vez que cadastra

    history.push('/');
  }
  function removeCategory(id) {
    alert('Deseja mesmo remover a categoria?');
    categoryRepository.destroy(id);

    setCategorias(categorias.filter((categoria) => categoria.id !== id));
  }

  return (
    <PageDefault>
      <Container>
        <Form onSubmit={handleSubmit}>
          <h1>Cadastrar Categoria</h1>

          <FormField
            label="Título da Categoria"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />
          <FormField
            label="Link da Categoria"
            type="text"
            name="link"
            value={values.link}
            onChange={handleChange}
          />
          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />
          <FormField
            label="Descrição da Categoria"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />
          <ButtonArea>
            <Button type="submit" secondary>Salvar</Button>
            <Button type="button" onClick={clearForm} secondary>Limpar</Button>
          </ButtonArea>
        </Form>

        {categorias.length === 0 && (
          <div style={{ background: 'black' }}>
            <Spinner>Loading...</Spinner>
          </div>
        )}

        <Table>
          <Header>
            <Row>
              <Column>Titulo</Column>
              <Column>Descrição</Column>
              <Column>Editar</Column>
              <Column>Remover</Column>
            </Row>
          </Header>
          <Body>
            {categorias.map((item) => (
              <Row key={item.id}>
                <Column style={{ width: '30%' }}>{item.titulo}</Column>
                {
                      item.link_extra
                        ? <Column>{item.link_extra.text}</Column>
                        : <Column />
                  }
                <Column style={{ width: '130px' }}>

                  <Link to={`/editar/categoria/${item.id}`}>
                    <Action>
                      Editar
                    </Action>
                  </Link>

                </Column>
                <Column style={{ width: '130px' }}>
                  <Action onClick={() => removeCategory(item.id)}>
                    Remover
                  </Action>

                </Column>
              </Row>
            ))}
          </Body>
        </Table>
        {/* <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <ArrowLeft color="#FFFFFF" size={24} />
          <span style={{ marginLeft: '4px' }}>.</span>
        </Link> */}
      </Container>
      <ButtonArea> </ButtonArea>
    </PageDefault>
  );
}

export default CadastroCategoria;
