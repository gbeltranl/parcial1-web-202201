const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');

function render(usr){
  message.innerText = usr.username;
  const tracks = document.createElement('div');
      table.appendChild(tracks);
    usr.tracks.forEach(element => {
      let cont = `<tr>
      ${element}
      </tr>`
      tbody.innerHTML += cont;
    });

  

}
enterButton.addEventListener('click', (event) => {
  //Implementar lógica del button submit
  //console.log(event);
  //console.log(input.value);
  const data = getUser(input.value);
  event.preventDefault();
});

/**
 * Llamado al backend con queryParam
 * @param {*} username
 */
async function getUser(username) {
  //console.log(username);
  const resp = await fetch(`api/users/${username}`);
  const data = await resp.json();
  console.log('data from back', data);
  render(JSON.parse(data));
  //printValues(data);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
