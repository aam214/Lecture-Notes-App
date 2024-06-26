import NotesUI from "./NotesUI.js";
import NotesAPI from "./NotesAPI.js";


const app =document.getElementById("app");
const ui = new NotesUI(app, {
  onAdd (){
    console.log("Note selected!!");
  },
  onEdit(newTitle, newBody){
    console.log(newTitle);
    console.log(newBody);
  },
});

ui.updateSidebar(NotesAPI.showArchivedNotes());