export default class NotesUI{
  constructor(root, {onSelect, onAdd, onEdit, onDelete} = {}) {
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
    <div class="preview">
    <input class="title-input" type="text" placeholder="Title for Notes...">
    <textarea class="notes-body">Enter Notes...</textarea>
    </div>
    `;


  }
}