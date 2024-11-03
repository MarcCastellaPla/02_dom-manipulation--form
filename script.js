const newNoteForm = document.querySelector(".newNoteForm");
const notesListContainer = document.querySelector("#notesList");

newNoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(newNoteForm);
    const noteTitle = formData.get("noteTitle");
    const noteContent = formData.get("noteContent");
    const notePriority = formData.get("notePriority") || "No priority";

    const noteItem = document.createElement("li");
    noteItem.classList.add("noteBase");

    const noteTitleElement = createElement("h3", "newNoteTitle", noteTitle);
    const noteContentElement = createElement("p", "newNoteContent", noteContent);
    const notePriorityElement = createElement("p", "newNotePriority", notePriority);

    noteItem.appendChild(noteTitleElement);
    noteItem.appendChild(noteContentElement);
    noteItem.appendChild(notePriorityElement);

    notesListContainer.appendChild(noteItem);
    newNoteForm.reset();
});

function createElement(tag, className, textContent) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.textContent = textContent;
    return element;
}
