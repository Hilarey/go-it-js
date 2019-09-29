import Notepad from './Notepad';
import renderNoteList from './view/renderNoteList';
import {initialNotes} from './db';
import {refs} from './utils/constant';
import deleteNote from './controller/deleteNote';
import editNote from './controller/editNote';
import changePriority from './controller/changePriority';
import addNote from './controller/addNote';
import filterNote from './controller/filterNote';
const notepad = new Notepad(initialNotes);
renderNoteList(refs.list, notepad.notes);

refs.form.addEventListener('submit', addNote);
refs.list.addEventListener('click', changePriority);
refs.list.addEventListener('click', deleteNote);
refs.list.addEventListener('click', editNote);
refs.search.addEventListener('input', filterNote);

export {notepad};