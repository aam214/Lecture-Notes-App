export default class NotesAPI {
  
  static showArchivedNotes() {
  const notes = JSON.parse(localStorage.getItem("items") || "[]");
  return notes.sort((x,y) =>{
    return new Date (x.updated) > new Date (y.updated) ? -1 : 1;
  });
  
  }

static saveNote(toBeSaved){
const notes = NotesAPI.showArchivedNotes();
const chronicled = notes.find(note => note.id ==toBeSaved.id);
  if (chronicled){
chronicled.title = toBeSaved.title;
chronicled.body = toBeSaved.body;
chronicled.updated = new Date().toISOString();
} else {
  toBeSaved.id = Math.floor(Math.random() * 1000000);
  toBeSaved.updated = new Date().toISOString();
  notes.push(toBeSaved);
}

localStorage.setItem("items", JSON.stringify(notes));
}


static removeNote(id){
  const notes = NotesAPI.showArchivedNotes();
  const newNotes = notes.filter(note => note.id != id);
  localStorage.setItem("items", JSON.stringify(newNotes));
}
}