function checaIdade(idade){
  return new Promise(function(resolve,reject) {
    if (idade>=18) {
      resolve('É maior que 18.');
    }
    else if (idade<18) {
      resolve('É Menor que 18');
    }
    else {
      reject('Tipo de dado errado');
    }
  })
}

checaIdade('1dasda9')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  })