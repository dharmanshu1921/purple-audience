async function loadAboutPage(){
  let request = new Request("About.json")
  let response = await fetch(request)

  let json_obj = await response.json()

  loadTitle(json_obj)
  loadMission(json_obj)
  loadVision(json_obj)
  loadAttributes(json_obj)
}

/*-------------------------------------------------
===========TITLE OF WEBPAGE AND INTRO==========================
-------------------------------------------*/

let nice = document.querySelector('.container h1'), 
nice1= document.querySelector('.container h2'),
nice2 = document.querySelector('.container p')
function loadTitle(purple_json_obj)
{
   nice.textContent = purple_json_obj.Title['title1'];
   nice1.textContent = purple_json_obj.Title['title2'];
   nice2.textContent = purple_json_obj.Title['title3'];
}
/*-------------------------------------------------
===========MISSION==========================
-------------------------------------------*/

function loadMission(purple_json_obj)
{
  let h1 = document.querySelector('.box1 h1');
  h1.textContent = purple_json_obj.Attributes['MISSION'];
  let descr = document.querySelector('.box1 p')
  descr.textContent = purple_json_obj['Desc'];
}
/*-------------------------------------------------
===========VISION=========================
-------------------------------------------*/

function loadVision(purple_json_obj)
{
  let h1 = document.querySelector('.box2 h1');
  h1.textContent = purple_json_obj.Attributes['VISION'];
  let descr = document.querySelector('.box2 p')
  descr.textContent = purple_json_obj['Desc'];
}

/*-------------------------------------------------
===========ATTRIBUTES==========================
-------------------------------------------*/
function loadAttributes(purple_json_obj)
{
  let h1 = document.querySelector('.box3 h1');
  h1.textContent = purple_json_obj.Attributes['VIRTUES'];
  let descr = document.querySelector('.box3 p')
  descr.textContent = purple_json_obj['Desc'];
}

/*-------------------------------------------------
===========SCROLL EFFECT==========================
-------------------------------------------*/


loadAboutPage();