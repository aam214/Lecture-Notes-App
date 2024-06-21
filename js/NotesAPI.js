export default class NotesAPI {
  
  static grabNotes() {
  const notes = JSON.parse(localStorage.getItem("items") || "[]");
  return notes;
  
  }

static saveNote(save){
const notes = NotesAPI.getAllNotes();
notes.push(save);

save.id = Math.floor(Math.random() * 1000);
save.updated = new Date().toISOString();
localStorage.setItem( items, JSON.stringify(notes));
}


static removeNote(id){

}
}