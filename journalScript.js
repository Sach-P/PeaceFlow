var list = document.getElementsByTagName("LI");
var i;
for (i = 0; i < list.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  list[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list1 = document.querySelector('ul');
list1.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    var i;
    for(i = 0; i < list.length; i++){
      if(list[i].className = 'checked'){
        list[i].classList.toggle('checked')
      }
    }
    document.getElementById("dataEntry").style.visibility = "visible";
    ev.target.classList.toggle('checked');
    document.getElementById("enterJournal").style.visibility = "hidden";
    document.getElementById("entryDate").innerHTML = ev.target.getAttribute('name');
    document.getElementById("entryAction").innerHTML = ev.target.getAttribute('action');
    document.getElementById("entrySensation").innerHTML = ev.target.getAttribute('sensation');
    
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var div = document.createElement("div");
  var inputMonth = document.getElementById("month").value;
  var inputDay = document.getElementById("day").value;
  var inputYear = document.getElementById("year").value;
  var inputAction = document.getElementById("action").value;
  var inputSensation = document.getElementById("sensation").value;
  var date = document.createTextNode(inputMonth + " " + inputDay + ", " + inputYear);
  li.appendChild(date);
  li.setAttribute('name', inputMonth + " " + inputDay + ", " + inputYear);
  li.setAttribute('action', inputAction);
  li.setAttribute('sensation', inputSensation)

  if (inputMonth === '') {
    alert("please enter month");
  } 
  else if(inputDay === ''){
    alert("please enter day");
  }
  else if(inputYear === ''){
    alert("please enter year");
  }
  else {
    document.getElementById("journalEntries").appendChild(li);
  }

  document.getElementById("month").value = "";
  document.getElementById("day").value = "";
  document.getElementById("year").value = "";
  document.getElementById("action").value = "";
  document.getElementById("sensation").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function newEntry(){
  document.getElementById("dataEntry").style.visibility = "hidden";
  document.getElementById("enterJournal").style.visibility = "visible";
}

