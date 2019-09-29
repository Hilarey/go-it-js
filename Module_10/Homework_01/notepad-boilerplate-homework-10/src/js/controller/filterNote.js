import {notepad} from '../app';
import renderNoteList from '../view/renderNoteList';
import {refs} from '../utils/constant';

function filterNote({target}) {
  const filteredNote = notepad.filterNotesByQuery(target.value);

  renderNoteList(refs.list, filteredNote);
}
export default filterNote;