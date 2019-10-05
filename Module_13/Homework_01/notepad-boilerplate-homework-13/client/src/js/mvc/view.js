import template from '../templates/note.hbs';
import refs from '../utils/refs';

const refreshList = (notes = []) => {
  const htmlNotesList = notes.map(note => template(note)).join("\n");
  refs.list.innerHTML = "";
  refs.list.insertAdjacentHTML("afterbegin", htmlNotesList);
};

export { refreshList };
