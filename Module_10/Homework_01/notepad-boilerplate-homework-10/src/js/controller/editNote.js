import { notepad } from "../app";

function editNote(event) {
  event.preventDefault();
  const { target } = event;
  const li = target.closest(".note-list__item");
  const { id } = li.dataset;
  const note = notepad.findNoteById(id);
  const title = li.querySelector(".note__title");
  const body = li.querySelector(".note__body");

  if (
    target.dataset.action === "edit-note" ||
    target.parentNode.dataset.action === "edit-note"
  ) {
    li.classList.toggle("active");
  }
  if (li.classList.contains("active")) {
    title.setAttribute("contenteditable", true);
    body.setAttribute("contenteditable", true);
    note.title = title.textContent;
    note.body = body.textContent;
    title.style.color = "#f72";
    body.style.color = "#f72";
    target.style.color = "#c14";
    target.style.borderRadius = "50%";
  } else {
    title.setAttribute("contenteditable", false);
    body.setAttribute("contenteditable", false);
    target.style.color = "unset";
    title.style.color = "unset";
    body.style.color = "unset";
  }
}

// function editNote({ target }) {
//   if (target.nodeName !== "I") return;
//   if (target.parentNode.dataset.action === "edit-note") {
//     const li = target.closest(".note-list__item");
//     const { id } = li.dataset;
//     const note = notepad.findNoteById(id);

//     const title = li.querySelector(".note__title");
//     const body = li.querySelector(".note__body");

//     note.title = title.textContent;
//     note.body = body.textContent;

//     title.style.color = "#f72";
//     body.style.color = "#f72";
//     target.style.backgroundColor = "#f72";
//     target.style.color = "#c14";
//     target.style.borderRadius = "50%";
//     title.setAttribute("contenteditable", true);
//     body.setAttribute("contenteditable", true);
//   }
// }

export default editNote;
