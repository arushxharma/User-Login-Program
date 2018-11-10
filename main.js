
const form = document.getElementById('signUp-form');

form.addEventListener('submit', createUser);

function createUser(e){
  e.preventDefault();

 let formdata = new FormData(form);
 console.log(formdata.get('fullname'));





}
