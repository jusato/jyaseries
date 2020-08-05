/* eslint-disable no-console */
import config from '../config';

const URL_SERIE = `${config.URL_BACKEND_TOP}/videos`;

function getAll() {
  return fetch(`${URL_SERIE}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados :(');
    });
}
function getAllWithCategories() {
  return fetch(`${URL_SERIE}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getSerie(id) {
  return fetch(`${URL_SERIE}/${id}`)
    // eslint-disable-next-line consistent-return
    .then(async (res) => {
      if (res.ok) {
        const response = await res.json();
        console.log('Fetch', response);
        return response;
      }
    }).catch((e) => { console.log('Error', e); });
}

function create(objetoDaSerie) {
  return fetch(`${URL_SERIE}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDaSerie), // converter para texto
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados :(');
    });
}

function destroy(id) {
  return fetch(`${URL_SERIE}/${id}`, {
    method: 'DELETE',
  }).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    } throw new Error('Unable to delete');
  });
}
function update(id, data) {
  return fetch(`${URL_SERIE}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    } throw new Error('Cant Update');
  });
}

export default {
  getAllWithCategories,
  getAll,
  getSerie,
  create,
  destroy,
  update,
};
