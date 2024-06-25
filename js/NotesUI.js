export default class NotesUI{
  constructor(root, { onSelect, onAdd, onEdit, onDelete } = {}) {
    this.root = root;
    this.onSelect = onSelect;
    this.onAdd = onAdd;
    this.onEdit = onEdit;
    this.onDelete = onDelete;
    this.root.innerHTML = `
    <div class="side-bar">
    <button class="button-53" role="button">Save Notes</button>
    <div class="note-list">
    </div>
    </div>
    <div class="preview">
    <input class="title-input" type="text" placeholder="Title for Notes...">
    <textarea class="notes-body">Enter Notes...</textarea>
    </div>
   
    `;
  
    const addNotebutton =this.root.querySelector(".button-53");
    const titleEnter = this.root.querySelector(".title-input");
    const inputBody = this.root.querySelector(".notes-body");

    addNotebutton.addEventListener("click", () =>{
      this.onAdd();
    });

    [titleEnter, inputBody].forEach(inputNow => {
      inputNow.addEventListener("blur", () => {
      const newTitle = titleEnter.value.trim();
      const newBody = inputBody.value.trim();
     
      this.onEdit(newTitle, newBody);
      });
    });
  } 
  // Hide sidebar by default
sidebarList(id, title, body, updated) {
  const maxBodyLength = 60;

  return `<div class="select-notes" select-note-id ="${id}">
  <div class="list-title">${title}</div>
  <div class="list-body">
  ${body.substring(0, maxBodyLength)}
  ${body.length > maxBodyLength ? "..." : ""}
  </div>
  <div class="list-time-stamp">${updated}</div>
  </div>
 `;
}
}