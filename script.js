// Canviar DIV del HTML
const $form = window.document.querySelector(".newNoteForm");
console.log($form);

$form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    console.log("HOLA, M'ESTIC EXECUTANT!");

    // Use FormData to get values easily
    const formData = new FormData($form);
    let priorityValue = formData.get("notePriority"); // Get the priority value

    // Check if the priority value is empty
    if (priorityValue) {
        console.log("HOLA, TINC PRIORITAT!!!");
    } else {
        console.log("No tinc prioritat :(");
        priorityValue = "No priority"; // Set default value
    }

    const title = document.createTextNode(formData.get("noteTitle")); // Get title value
    const content = document.createTextNode(formData.get("noteContent")); // Get content value
    const priority = document.createTextNode(priorityValue); // Create priority text node

    console.log(title.textContent);
    console.log(content.textContent);
    console.log(priority.textContent);

    // Example of creating a new DOM node
    const newNode = document.createElement("div");
    newNode.textContent = `Title: ${title.textContent}, Content: ${content.textContent}, Priority: ${priority.textContent}`;

    // Append to a designated section (make sure this selector exists)
    const notesSection = document.querySelector(".notesListHeading");
    notesSection.appendChild(newNode);

    // Reset the form after submission
    $form.reset();
});
