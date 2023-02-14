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

const res = await fetch('/home', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({}),
});
