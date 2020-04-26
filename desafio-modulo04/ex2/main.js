const buttonElement = document.querySelector('#app button')
const inputElement = document.querySelector('#app input')
const listElement = document.querySelector('#app ul')

function addUser(){
  const userText = inputElement.value;
  printScreen(userText);
  inputElement.value = '';
}

buttonElement.onclick = addUser;

function printScreen(user){
  listElement.innerHTML = '';
  const url = `https://api.github.com/users/${user}/repos`;
  axios.get(url)
    .then(function(response) {
      var datas = response.data;
      for (repositorio of datas){
        var repoElement = document.createElement('li');
        var repoText = document.createTextNode(repositorio.name);

        listElement.appendChild(repoElement);
        repoElement.appendChild(repoText);
        
      }
    })
    .catch(function(error) {
      console.warn(error);
  })
}