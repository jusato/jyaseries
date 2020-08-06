/* eslint-disable no-shadow */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import Container from '../../../components/Container';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import seriesRepository from '../../../repositorios/series';
import categoriasRepository from '../../../repositorios/categorias';

import ButtonArea from '../../../components/FormField/ButtonArea';
import Form from '../../../components/Form';
import Spinner from '../../../components/Spinner';

import {
  Table, Header, Column, Row, Body, Action,
} from '../../../components/Table';

function CadastroSerie() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const [series, setSeries] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values, clearForm } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
    seriesRepository.getAll()
      .then((series) => {
        setSeries([...series]);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

    seriesRepository.create({
      titulo: values.titulo,
      url: values.url,
      categoriaNome: categoriaEscolhida.titulo,
      categoriaId: categoriaEscolhida.id,
    }).then(() => {
      console.log('Cadastro com sucesso!');
      setSeries([...series, series]);
      clearForm();
      history.push('/');
    });
  }
  function removeSerie(id) {
    alert('Deseja mesmo remover a série?');
    seriesRepository.destroy(id);

    setSeries(series.filter((serie) => serie.id !== id));
  }
  return (
    <PageDefault>
      <Container>
        <Form onSubmit={handleSubmit}>
          <h1>Cadastro de Série</h1>

          <FormField
            label="Título da Série"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />
          <FormField
            label="URL da Série"
            type="text"
            name="url"
            value={values.url}
            onChange={handleChange}
          />
          <FormField
            label="Categoria da Série"
            type="datalist"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
            suggestions={categoryTitles}
          />
          <ButtonArea>
            <Button type="submit" secondary>Salvar</Button>
            <Button type="reset" onClick={clearForm} secondary>Limpar</Button>
          </ButtonArea>
        </Form>
        {series.length === 0 && (
          <div style={{ background: 'black' }}>
            <Spinner>Loading...</Spinner>
          </div>
        )}

        <Table>
          <Header>
            <Row>
              <Column>Título</Column>
              <Column>Categoria</Column>
              <Column>Editar</Column>
              <Column>Remover</Column>
            </Row>
          </Header>
          <Body>
            {series.map((item) => (
              <Row key={item.id}>
                <Column style={{ width: '30%' }}>{item.titulo}</Column>
                <Column style={{ width: '30%' }}>{item.categoriaNome}</Column>
                <Column style={{ width: '130px' }}>

                  <Link to={`/editar/serie/${item.id}`}>
                    <Action>
                      Editar
                    </Action>
                  </Link>

                </Column>
                <Column style={{ width: '130px' }}>
                  <Action onClick={() => removeSerie(item.id)}>
                    Remover
                  </Action>

                </Column>
              </Row>
            ))}
          </Body>
        </Table>

        {/* <Link to="/">.</Link> */}
      </Container>
      <ButtonArea> </ButtonArea>
    </PageDefault>
  );
}
export default CadastroSerie;
