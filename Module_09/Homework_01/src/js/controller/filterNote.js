refs.search.addEventListener('input', filterNote);

function filterNote({target}) {
  const filteredNote = notepad.filterNotesByQuery(target.value);

  renderNoteList(refs.list, filteredNote);
}