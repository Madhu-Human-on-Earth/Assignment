// function addText() {
//     var textInput = document.getElementById('textInput').value;
//     document.getElementById('output').innerHTML += '<p>' + textInput + '</p>';
// }

// function previewImage() {
//     var input = document.getElementById('imageInput');
//     var file = input.files[0];
//     var reader = new FileReader();

//     reader.onload = function(e) {
//         document.getElementById('output').innerHTML += '<img src="' + e.target.result + '" alt="Uploaded Image">';
//     };

//     reader.readAsDataURL(file);
// }

// function addImage() {
//     var imageInput = document.getElementById('imageInput').files[0];
//     var reader = new FileReader();

//     reader.onload = function(e) {
//         document.getElementById('output').innerHTML += '<img src="' + e.target.result + '" alt="Uploaded Image">';
//     };

//     reader.readAsDataURL(imageInput);
// }

// function editContent(editButton) {
//     var contentItem = editButton.parentElement;
//     var updatedContent = prompt("Edit content:", contentItem.firstChild.nodeValue);
    
//     if (updatedContent !== null) {
//         contentItem.firstChild.nodeValue = updatedContent;
//     }
// }

// function clearContent() {
//     document.getElementById('output').innerHTML = '';
// }

// Function to add text to the output and save in localStorage
function addText() {
    var textInput = document.getElementById('textInput').value;
    document.getElementById('output').innerHTML += '<p>' + textInput + '</p>';
    saveToLocalStorage();
}

// Function to preview image and save in localStorage
function previewImage() {
    var input = document.getElementById('imageInput');
    var file = input.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('output').innerHTML += '<img src="' + e.target.result + '" alt="Uploaded Image">';
        saveToLocalStorage();
    };

    reader.readAsDataURL(file);
}

// Function to add image and save in localStorage
function addImage() {
    var imageInput = document.getElementById('imageInput').files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('output').innerHTML += '<img src="' + e.target.result + '" alt="Uploaded Image">';
        saveToLocalStorage();
    };

    reader.readAsDataURL(imageInput);
}

// Function to edit content and save in localStorage
function editContent(editButton) {
    var contentItem = editButton.parentElement;
    var updatedContent = prompt("Edit content:", contentItem.firstChild.nodeValue);

    if (updatedContent !== null) {
        contentItem.firstChild.nodeValue = updatedContent;
        saveToLocalStorage();
    }
}

// Function to clear content and save in localStorage
function clearContent() {
    document.getElementById('output').innerHTML = '';
    saveToLocalStorage();
}
function saveContent() {
    // Get the current content
    var content = document.getElementById('output').innerHTML;

    // Save the content to localStorage
    localStorage.setItem('savedContent', content);

    // Optionally, you can display an alert or perform any other action to indicate that the content is saved
    alert('Content saved to localStorage!');
}

// Function to save the current content to localStorage
function saveToLocalStorage() {
    var content = document.getElementById('output').innerHTML;
    localStorage.setItem('savedContent', content);
}

// Function to load content from localStorage
function loadFromLocalStorage() {
    var savedContent = localStorage.getItem('savedContent');
    if (savedContent) {
        document.getElementById('output').innerHTML = savedContent;
    }
}

// Call loadFromLocalStorage when the page loads
window.onload = loadFromLocalStorage;
