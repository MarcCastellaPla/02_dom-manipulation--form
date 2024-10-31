const newNoteForm = document.querySelector(".newNoteForm");
const notesListContainer = document.querySelector(".notesList");

newNoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(newNoteForm);
    const noteTitle = formData.get("noteTitle");
    const noteContent = formData.get("noteContent");
    const notePriority = formData.get("notePriority") || "No priority";

    const noteItem = document.createElement("div");
    noteItem.classList.add("note");
    noteItem.setAttribute("role", "listitem");

    noteItem.innerHTML = `
        <h3 class="noteTitle">${noteTitle}</h3>
        <p class="noteContent">${noteContent}</p>
        <p class="notePriority">${notePriority}</p>
    `;

    notesListContainer.appendChild(noteItem);
    newNoteForm.reset();
});
