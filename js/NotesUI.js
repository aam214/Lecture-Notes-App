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
    <div class="select-notes">
  <div class="list-heading">Cell Biology</div>
  <div class="list-body">mDNA is acquired from maternal DNA.</div>
  <div class="list-time-stamp">Tuesday 06/19/24 10:02 AM</div>
  </div>
  </div>
</div>
  </div>
  <div class="preview">
  <input class="title-input" type="text" placeholder="Title for Notes...">
  <textarea class="notes-body">Notes...</textarea>
</div>
    
    
    
    `


  }
}