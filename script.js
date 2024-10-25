let MakeaNoteBTN = document.getElementById('makeNoteBtn');
let stickyNotes = document.getElementById('stickyNotes');
MakeaNoteBTN.addEventListener('click', createNote)

let uniqeId = 1;
 function createNote(){
 let note = document.getElementById('note').value;
 let color = document.getElementById('color').value;

 if(note === ""){
     alert("Oops! it's a empty");
     return ;
 }
 let mainDiv = document.createElement('div');
 mainDiv.setAttribute('id', `card${uniqeId}`)
 mainDiv.setAttribute('class', 'card')


 let div2 = document.createElement('div');
 div2.setAttribute('class' , 'headers')

 let cardtitel = document.createElement('h5')
 cardtitel.innerText = `Task ${uniqeId}`;
 div2.append(cardtitel);

 let cross = document.createElement('i')
 cross.setAttribute('class', 'fa-solid fa-xmark cross');
 div2.append(cross);



 let div = document.createElement('div');

 let p = document.createElement('p');
 console.log(color)
 if(color == '#000000'){
     p.style.color = '#fff';
 }else{
     p.style.color = '#000';
 }
 p.innerText = note
 div.append(p) ;

 mainDiv.style.backgroundColor = color;
 mainDiv.append(div2)
 mainDiv.append(div)
 stickyNotes.append(mainDiv);
 
 console.log(note,color)
 uniqeId++;
 }

 let ClearAll = document.getElementById('ClearAll');

 ClearAll.addEventListener("click", function() {
     stickyNotes.innerHTML = "";
 // para.style.display="block";
});