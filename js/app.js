import NotesAPI from "./NotesAPI.js";
import NotesUI from "./NotesUI.js";

const app =document.getElementById("app");
const ui = new NotesUI(app, {
  onNoteSelect (){
    console.log("Note selected!!");
  },
  onEdit(newTitle, newBody){
    console.log(newTitle);
    console.log(newBody);
  }
})
