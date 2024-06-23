export default class NotesAPI {
  
  static showArchivedNotes() {
  const notes = JSON.parse(localStorage.getItem("items") || "[]");
  return notes.sort((x,y) =>{
    return new Date (x.updated) > new Date (y.updated) ? -1 : 1;
  });
  
  }

static saveNote(save){
const notes = NotesAPI.showArchivedNotes();
notes.push(save);

save.id = Math.floor(Math.random() * 1000000);
save.updated = new Date().toISOString();
localStorage.setItem("items", JSON.stringify(notes));
}


static removeNote(id){

}
}