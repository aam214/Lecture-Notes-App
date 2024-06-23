import NotesAPI from "./NotesAPI.js";

NotesAPI.saveNote({
  id: 286852,
  title: "This is a new title.",
  body:" I am a new note."
})

console.log(NotesAPI.showArchivedNotes());