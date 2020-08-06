/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

import useForm from '../../../hooks/useForm';

import Form from '../../../components/Form';
import FormField from '../../../components/FormField';
import ButtonArea from '../../../components/FormField/ButtonArea';

import Button from '../../../components/Button';

import seriesRepository from '../../../repositorios/series';
import categoriasRepository from '../../../repositorios/categorias';

function EditarSerie(route) {
  const history = useHistory();
  const { id } = route.match.params;
  const [titulo, setTitulo] = useState('');
  const [url, setUrl] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [categoriaId, setCategoriaId] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [categoriaNome, setCategoriaNome] = useState('');
  const { handleChange, values } = useForm({
    categoria: '',
  });

  const [categorias, setCategorias] = useState([]);
  // eslint-disable-next-line no-shadow
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });

    seriesRepository.getSerie(id)
      .then((serie) => {
        setTitulo(serie.titulo || '');
        setUrl(serie.url || '');
        setCategoriaNome(serie.categoriaNome || '');
        setCategoriaId(serie.categoriaId || 0);
      });
    // eslint-disable-next-line
  }, []);

  const { clearForm } = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

    seriesRepository.update(id, {
      titulo,
      url,
      categoriaNome: categoriaEscolhida.titulo,
      categoriaId: categoriaEscolhida.id,
    }).then(() => {
      alert('Série Atualizada!');
    // eslint-disable-next-line no-shadow
    }).catch((e) => {
      console.log(e);
    });

    clearForm();
    history.push('/cadastro/serie');
  }

  return (

    <PageDefault>
      <Form onSubmit={handleSubmit}>
        <h1>Editar Série</h1>

        <FormField
          label="Título da Série"
          type="text"
          name="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <FormField
          label="Link da Série"
          type="text"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
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
          <Button type="submit">Salvar</Button>
          <Button type="button" secondary>Limpar</Button>
        </ButtonArea>
      </Form>

      <Link to="/cadastro/serie" style={{ display: 'flex', alignItems: 'center' }}>
        {/* <ArrowLeft color="#FFFFFF" size={24} /> */}
        <span style={{ marginLeft: '4px' }}>Voltar para cadastro</span>
      </Link>
    </PageDefault>
  );
}
export default EditarSerie;
