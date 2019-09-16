class Notepad {
    constructor(notes) {
    // Перенеси свойства и методы объекта notepad в конструктор
      this._notes = notes;
    }
    get notes() {
      return this._notes;
    }
    findNoteById(id) {
      return this._notes.find(e => e.id === id);
    }
    saveNote(note) {
      this._notes.push(note);
      return this;
    }
    deleteNote(id) {
      for (let i = 0; i < this.notes.length; i += 1) {
        if (this.notes[i].id === id) {
          this.notes.splice(i, 1);
          break;
        }
      }
    }
    updateNoteContent(id, updatedContent) {
      Object.assign(this.findNoteById(id), updatedContent);
    }
    updateNotePriority(id, priority) {
      this.findNoteById(id).priority = priority;
    }
    filterNotesByQuery(query) {
      const newArr = [];
      for (const obj of this.notes) {
        const titleLower = obj.title.toLowerCase();
        const bodyLower = obj.body.toLowerCase();
        if (titleLower.includes(query) || bodyLower.includes(query)) {
          newArr.push(obj);
        }
      }
      return newArr;
    }
    filterNotesByPriority(priority) {
      return this._notes.filter(e => e.priority === priority);
    }
    // для хрома
    static Priority = {
      LOW: 0,
      NORMAL: 1,
      HIGH: 2,
    }
  }
  //для ноде
  // static get Priority() {
  //   return {
  //     LOW: 0,
  //     NORMAL: 1,
  //     HIGH: 2,
  //   };
  // }