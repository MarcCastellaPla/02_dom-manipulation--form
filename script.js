const newNoteForm = document.querySelector(".newNoteForm");
const notesListContainer = document.querySelector("#notesList");

newNoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(newNoteForm);
    const noteTitle = formData.get("noteTitle");
    const noteContent = formData.get("noteContent");
    const notePriority = formData.get("notePriority") || "No priority";

    const noteItem = document.createElement("div");
    noteItem.classList.add("noteBase");
    noteItem.setAttribute("role", "listitem");

    noteItem.innerHTML = `
        <h3 class="newNoteTitle">${noteTitle}</h3>
        <p class="newNoteContent">${noteContent}</p>
        <p class="newNotePriority">${notePriority}</p>
    `;

    notesListContainer.appendChild(noteItem);
    newNoteForm.reset();
});
