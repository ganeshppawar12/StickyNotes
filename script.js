let MakeaNoteBTN = document.getElementById("makeNoteBtn");
let stickyNotes = document.getElementById("stickyNotes");
let note = document.getElementById("note");



MakeaNoteBTN.addEventListener("click", createNote);

let uniqeId = 1;
function createNote() {
let color = document.getElementById("color").value;


  if (note.value === "") {
    alert("Oops! it's a empty");
    return;
  }


  let mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", `card${uniqeId}`);
  mainDiv.setAttribute("class", "card");

  let div2 = document.createElement("div");
  div2.setAttribute("class", "headers");

  let cardtitel = document.createElement("h5");
  cardtitel.innerText = `Task ${uniqeId}`;
  div2.append(cardtitel);

  let cross = document.createElement("i");
  cross.setAttribute("class", "fa-solid fa-xmark cross");
  cross.setAttribute("onclick", `deleteCard(card${uniqeId})`);
  div2.append(cross);

  let div = document.createElement("div");

  let p = document.createElement("p");
  p.setAttribute('class', 'para')
  
 
  p.innerText = note.value;
  div.append(p);

  mainDiv.style.backgroundColor = color;

  mainDiv.append(div2);
  mainDiv.append(div);
  stickyNotes.append(mainDiv);
  if (color == "#000000") {
    document.getElementById(`card${uniqeId}`).style.color = "#fff"
    p.style.color = "#fff";
  } else {
    p.style.color = "#000";
    document.getElementById(`card${uniqeId}`).style.color = "#000"

  }
  note.value = "";
  uniqeId++;
}

function deleteCard(id) {
    console.log(id);
  
    id.style.transition = "transform 0.5s ease"; 
    id.style.transform = "scale(0.1)";          
    setTimeout(() => {
      id.remove();
    }, 500); 
  }

let ClearAll = document.getElementById("ClearAll");

ClearAll.addEventListener("click", function () {
  stickyNotes.innerHTML = "";

  uniqeId = 1;
});
