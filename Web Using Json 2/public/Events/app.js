async function loadEventsPage()
{
    let request = new Request('hello.json');
    let response = await fetch(request);
    let json_obj = await response.json();

    loadEventTitle_1(json_obj)
    loadEventTitle_2(json_obj)
    loadEventTitle_3(json_obj)
}

let event_head_1 = document.querySelector('.box1 .head')
let event_desc_1 = document.querySelector('.box1 p')
function loadEventTitle_1(purple_json_obj)
{
    event_head_1.textContent = purple_json_obj.head_event['head_1'];
    event_desc_1.textContent = purple_json_obj['desc'];
}

let event_head_2 = document.querySelector('.box2 .head_1')
let event_desc_2 = document.querySelector('.box2 p')
function loadEventTitle_2(purple_json_obj)
{
    event_head_2.textContent = purple_json_obj.head_event['head_2'];
    event_desc_2.textContent = purple_json_obj['desc'];
}

let event_head_3 = document.querySelector('.box3 .head_2')
let event_desc_3 = document.querySelector('.box3 p')
function loadEventTitle_3(purple_json_obj)
{
    event_head_3.textContent = purple_json_obj.head_event['head_3'];
    event_desc_3.textContent = purple_json_obj['desc'];
}
/*********************************************
 * ====================================Timer JS===================
 -----------------------------------------------************* */

var x = setInterval(function(){
  
    const currYear = new Date().getTime();
    const newTime = new Date('Jan 3,2023 10:00:00').getTime();

    const diff = newTime - currYear
    var hr = Math.floor((diff%(1000*60*60*24))/(1000*60*60))
    var min = Math.floor((diff%(1000*60*60))/(1000*60))
    var sec = Math.floor((diff%(1000*60))/(1000))

    document.getElementById('hrs').innerHTML = hr
    document.getElementById('mins').innerHTML = min
    document.getElementById('seconds').innerHTML = sec

},1000)


var x = setInterval(function(){
  
    const currYear = new Date().getTime();
    const newTime = new Date('Jan 3,2023 10:00:00').getTime();

    const diff = newTime - currYear
    var hr = Math.floor((diff%(1000*60*60*24))/(1000*60*60))
    var min = Math.floor((diff%(1000*60*60))/(1000*60))
    var sec = Math.floor((diff%(1000*60))/(1000))

    document.getElementById('hrs_1').innerHTML = hr
    document.getElementById('mins_1').innerHTML = min
    document.getElementById('seconds_1').innerHTML = sec

},1000)


var x = setInterval(function(){
  
    const currYear = new Date().getTime();
    const newTime = new Date('Jan 3,2023 10:00:00').getTime();

    const diff = newTime - currYear
    var hr = Math.floor((diff%(1000*60*60*24))/(1000*60*60))
    var min = Math.floor((diff%(1000*60*60))/(1000*60))
    var sec = Math.floor((diff%(1000*60))/(1000))

    document.getElementById('hrs_2').innerHTML = hr
    document.getElementById('mins_2').innerHTML = min
    document.getElementById('seconds_2').innerHTML = sec

},1000)
/**************************************************************************************************************** */

/**=========================================================
 * -------------------First PopUP box-----------------------
 ===========================================================*/
let popup1 = document.getElementById('popup');
let regbox1 = document.querySelector('.box1')
function openPopup()
{
    popup1.classList.add("open-popup")
    regbox1.classList.add("blurer")
}
function closePopup()
{
    popup1.classList.remove("open-popup")
    regbox1.classList.remove("blurer")
}

/**=========================================================
 * -------------------Second PopUP box-----------------------
 ===========================================================*/

let popup2 = document.getElementById('popup1');
let regbox2 = document.querySelector('.box2')
function openPopup1()
{
    popup2.classList.add("open-popup1")
    regbox2.classList.add("blurer")
}
function closePopup1()
{
    popup2.classList.remove("open-popup1")
    regbox2.classList.remove("blurer")
}

/**=========================================================
 * -------------------Third PopUP box-----------------------
 ===========================================================*/
let popup3 = document.getElementById('popup2');
let regbox3 = document.querySelector('.box3')
function openPopup2()
{
    popup3.classList.add("open-popup2")
    regbox3.classList.add("blurer")
}
function closePopup2()
{
    popup3.classList.remove("open-popup2")
    regbox3.classList.remove("blurer")
}
loadEventsPage();