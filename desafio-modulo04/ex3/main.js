const buscarGitHub = (username) => {
  axios.get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
          limparDiv()
          console.log(response.data)
          inserirNaPagina(response.data)
      })
      .catch((error) => {
          limparDiv()
          console.warn('Usuário não encontrado')
          menssage('Usuário não encontrado')
      });
}

const divELement = document.querySelector("#app")

const inserirNaPagina = (repositorios) => {
  let ulElement = document.createElement('ul')
  repositorios.forEach(element => {
      let liElemente = document.createElement('li')
      liElemente.setAttribute('title', element.name)
      liElemente.appendChild(document.createTextNode(element.name))

      ulElement.appendChild(liElemente)
  });
  divELement.appendChild(ulElement)
}

const btnElement = document.querySelector("#inputDiv #buscarRepo")
btnElement.onclick = () => {
  limparDiv()
  menssage('Carregando...')

  const inputElement = document.querySelector("#username")
  buscarGitHub(inputElement.value)
}

const menssage = (msg) => {
  divELement.appendChild(document.createTextNode(msg))
}

const limparDiv = () => {
  divELement.innerHTML = ''
}