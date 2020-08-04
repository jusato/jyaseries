/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import Container from '../../../components/Container';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositorios/videos';
import categoriasRepository from '../../../repositorios/categorias';

import ButtonArea from '../../../components/FormField/ButtonArea';
import Form from '../../../components/Form';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
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
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

    videosRepository.create({
      titulo: values.titulo,
      url: values.url,
      categoriaId: categoriaEscolhida.id,
    }).then(() => {
      console.log('Cadastro com sucesso!');
      clearForm();
      history.push('/');
    });
  }
  return (
    <PageDefault>
      <Container>
        <Form onSubmit={handleSubmit}>
          <h1>Cadastro de Série</h1>

          <FormField
            label="Título do Vídeo"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />
          <FormField
            label="URL do Vídeo"
            type="text"
            name="url"
            value={values.url}
            onChange={handleChange}
          />
          <FormField
            label="Categoria do Vídeo"
            type="datalist"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
            suggestions={categoryTitles}
          />
          <ButtonArea>
            <Button type="submit">Salvar</Button>
            <Button type="reset" secondary>Limpar</Button>
          </ButtonArea>

        </Form>

        <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
      </Container>
    </PageDefault>
  );
}
export default CadastroVideo;
