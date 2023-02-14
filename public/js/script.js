// import { createClient } from 'pexels';

// const client = createClient('miCOtH0dj9K6egWAij7Eqjz9MvfpdCenqLUeLGOyGGnTZ3h2mIbVlHjk');

// const a = async () => {
//   const query = 'Nature';

//   const result = await client.photos.search({ query, per_page: 1 });
//   console.log(result);
// };
// a();

async function getApi() {
  const response = await fetch(`https://api.pexels.com/v1/search?query=${value}`, {
    method: 'GET',
    headers: { Authorization: 'miCOtH0dj9K6egWAij7Eqjz9MvfpdCenqLUeLGOyGGnTZ3h2mIbVlHjk', 'Content-Type': 'application/json' },
    // body: JSON.stringify({}),
  });
  const resApi = await response.json();
}

// const res = await fetch('/home', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({}),
// });
/// /////////////////////////////////////////////////////////////

const signUp = window.document.forms.signUpForm;

signUp?.addEventListener('submit', async (e) => { // регистрация
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
