import * as api from "../services/api";

class Notepad {
  constructor() {
    this._notes = [];
  }

  getNotes() {
    return this._notes;
  }

  getAsyncNotes() {
    return api.getNotes().then(arr => {
      this._notes = arr;
      return this._notes;
    });
  }

  findNoteById(id) {
    return this._notes.find(item => item.id === id);
  }
  // saveLocale() {
  //   try {
  //     localStorage.setItem('notes', JSON.stringify(this._notes));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  saveNote(note) {
    return api.saveNotes(note).then(note => {
      this._notes.push(note);
      // this.saveLocale();
      return note;
    });
  }

  deleteNote(id) {
    return api.deleteNotes(id).then(() => {
      this.getAsyncNotes();
      // this.saveLocale();
    });
  }

  updateNoteContent(id, updatedContent) {
    const note = this.findNoteById(id);
    if (!note) return;
    Object.assign(note, updatedContent);
    // this.saveLocale();
    return api.updateNotes(id, note);
  }
  // updateNoteContent(id, updatedContent) {
  //   return api.updateNotes(id, updatedContent).then(() => {
  //     Object.assign(this.findNoteById(id), updatedContent);
  //     return (this);
  //   });
  // }
  updateNotePriority(id, priority) {
    this.findNoteById(id).priority = priority;
  }

  filterNotesByQuery(query) {
    return this._notes.filter(
      ({ title, body }) =>
        title.toLowerCase().includes(query.toLowerCase()) ||
        body.toLowerCase().includes(query.toLowerCase())
    );
  }

  filterNotesByPriority(priority) {
    return this._notes.filter(e => e.priority === priority);
  }
}

export default Notepad;
