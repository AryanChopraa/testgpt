```javascript
// src/public/js/notes.js

document.addEventListener('DOMContentLoaded', function() {
    const noteDisplay = document.getElementById('note-display');
    const searchInput = document.getElementById('note-search-input');
    const filterInput = document.getElementById('note-filter-input');
    const saveButton = document.getElementById('note-save-button');
    const exportButton = document.getElementById('note-export-button');

    // Function to display notes
    function displayNotes(notes) {
        noteDisplay.innerHTML = '';
        notes.forEach(note => {
            const noteElement = document.createElement('div');
            noteElement.textContent = note;
            noteDisplay.appendChild(noteElement);
        });
    }

    // Function to search notes
    function searchNotes() {
        const searchTerm = searchInput.value;
        fetch(`/api/notes/search?term=${searchTerm}`)
            .then(response => response.json())
            .then(data => displayNotes(data.notes));
    }

    // Function to filter notes
    function filterNotes() {
        const filterTerm = filterInput.value;
        fetch(`/api/notes/filter?term=${filterTerm}`)
            .then(response => response.json())
            .then(data => displayNotes(data.notes));
    }

    // Function to save note
    function saveNote() {
        const noteContent = noteDisplay.textContent;
        fetch('/api/notes/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ note: noteContent }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Note saved successfully!');
            } else {
                alert('Failed to save note.');
            }
        });
    }

    // Function to export note
    function exportNote() {
        const noteContent = noteDisplay.textContent;
        fetch('/api/notes/export', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ note: noteContent }),
        })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'note.txt';
            a.click();
        });
    }

    // Event listeners
    searchInput.addEventListener('input', searchNotes);
    filterInput.addEventListener('input', filterNotes);
    saveButton.addEventListener('click', saveNote);
    exportButton.addEventListener('click', exportNote);
});
```