const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //corregi la llamada a name
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) { //se hace la funcion async
  try{ //uso de try y catch
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`; //uso de comillas invertidas
} catch (err) {
  handleError(err);
  }
}
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; //se agrego punto y coma y $
}

displayUser('stolinski').catch(handleError);