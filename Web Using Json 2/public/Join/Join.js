async function loadJoinPage(){
  let request = new Request("Join.json")
  let response = await fetch(request)

  let json_obj = await response.json()
  loadTitle(json_obj)
  loadFormTitle(json_obj)
  loadFormLinks(json_obj)
}


let cont_h1 = document.querySelector('.container h1'), 
cont_h2= document.querySelector('.container h2'),cont_3 = document.querySelector('.container p')

function loadTitle(purple_json_obj)
{
   cont_h1.textContent = purple_json_obj.Title['Title1'];
   cont_h2.textContent = purple_json_obj.Title['Title2'];
   cont_3.textContent = purple_json_obj['descr'];
}

let form_title = document.querySelector('.title')
function loadFormTitle(purple_json_obj)
{
  form_title.textContent =purple_json_obj['Form_title'];
}



window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}


let popup = document.getElementById('popup');
let form_box = document.querySelector('.form-container')
function openPopup()
{
    popup.classList.add("open-popup")
    form_box.classList.add("blurer")
}
function closePopup()
{
    popup.classList.remove("open-popup")
    form_box.classList.remove("blurer")
}

loadJoinPage()