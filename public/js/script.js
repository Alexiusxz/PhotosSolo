const signUp = window.document.forms.signUpForm;
const search = window.document.forms.searchForm;
const publish = document.querySelector('#apiContainer');
const myEntry = document.querySelector('#myEntry');
const container = document.querySelector('#container');
// регистрация
signUp?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const response = await fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: e.target.email.value,
      name: e.target.name.value,
      password: e.target.password.value,
    }),
  });
  const result = await response.json();
  if (result === 200) { window.location.replace('/'); } else {
    alert('Недопустимые данные для регистрации');
    window.location.replace('/signup');
  }
});
// api function
async function getApi(value) {
  const response = await fetch(`https://api.pexels.com/v1/search?query=${value}`, {
    method: 'GET',
    headers: { Authorization: 'miCOtH0dj9K6egWAij7Eqjz9MvfpdCenqLUeLGOyGGnTZ3h2mIbVlHjk', 'Content-Type': 'application/json' },
  });
  const resApi = await response.json();
  return resApi;
}
// search Api
search?.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    const api = await getApi(e.target.search.value);
    const apiArr = api.photos;
    const apiContainer = document.querySelector('#apiContainer');
    apiArr.forEach((photo) => {
      const div = document.createElement('div');
      div.classList = 'col-md-6 col-lg-4 filtr-item mb-5 ';
      div.innerHTML = `
      <div class="card border-dark">
        <div class="card-header bg-dark text-light">
          <h5 class="m-0">${e.target.search.value}</h5>
        </div>
        <img   class=" d-block rounded-0" src=${photo.src.medium} alt=${photo.alt} />
        <div class="d-flex card-footer"><button class="btn btn-outline-dark btn-sm ms-auto" type="button"><span style="display:none">${e.target.search.value}, ${photo.src.medium} </span>опубликовать</button></div>
      </div>
    `;
      apiContainer.appendChild(div);
    });
  } catch (error) {
    console.error(error);
  }
});
// опубликовать
publish?.addEventListener('click', async (e) => {
  if (e.target.tagName === 'BUTTON') {
    const tag = e.target.attributes.class.ownerElement.children[0].innerText.split(',')[0];
    const img = e.target.attributes.class.ownerElement.children[0].innerText.split(',')[1];

    const response = await fetch('/lk', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tag, img }),
    });
    const result = await response.json();
    if (result) {
      e.target.attributes.class.ownerElement.innerText = 'Опубликовано!';
      e.target.attributes.class.ownerElement.disabled = true;
    }
  }
});
// удалить, скрыть
myEntry?.addEventListener('click', async (e) => {
  if (e.target.tagName === 'BUTTON') {
    if (e.target.name === 'delete') {
      const entryId = e.target.id;
      const response = await fetch('/lk', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entryId }),
      });
      const result = response.json();
      if (result) {
        const deleteDiv = document.querySelector(`#delete${entryId}`);
        deleteDiv.style.display = 'none';
      } else {
        alert('не удалось удалить =(');
      }
    }

    // скрыть
    if (e.target.name === 'hide') {
      const entryId = e.target.id;
      const divHide = document.querySelector(`#footer${entryId}`);
      console.log(divHide);
      const response = await fetch('/lk', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entryId }),
      });
      const result = response.json();
      if (result) {
        divHide.style.backgroundColor = 'red';
      }
    }
  }
});

// likes
container?.addEventListener('click', async (e) => {
  const id = e.target.id.slice(4);
  if (e.target.name === 'like') {
    const response = await fetch('/home/like', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    const result = await response.json();
    if (result.created) {
      const span = document.querySelector(`#span${id}`);
      span.innerText = result.counter.rating;
      e.target.style.backgroundColor = 'black';
      e.target.style.color = 'white';
    } else {
      const span = document.querySelector(`#span${id}`);
      span.innerText = result.counter.rating;
      e.target.style.backgroundColor = 'white';
      e.target.style.color = 'black';
    }
  }
});
