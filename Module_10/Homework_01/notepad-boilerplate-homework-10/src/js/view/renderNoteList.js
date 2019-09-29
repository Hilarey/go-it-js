// Напиши функцию renderNoteList(listRef, notes),
// которая получает ссылку на DOM-узел списка ul.note-list и массив объектов заметок,
// вызывает createListItem(note) столько раз, сколько объектов в массиве,
// после чего добавляет все карточки в список.

import createListItem from './createListItem';

function renderNoteList(listRef, notes) {
  // обнулим
  listRef.innerHTML = '';
    // console.log(elem);
    // добавляем новые дочерние элементы
   listRef.append(...notes.map(e => createListItem(e)));
  }

  export default renderNoteList;