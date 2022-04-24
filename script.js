let myLibrary = [
    ["Holes", "Louis Sachar", 251, true],
    ["Dark Inside", "Jeyn Roberts", 368, true],
    ["Rage Within", "Jeyn Roberts", 368, false]
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        var is_read = "not read yet"
        if (read) {
            is_read = "read already"
        }
        return (title + " by " + author + ", " + pages + " pages, " + is_read)
    }
}

function addBookToLibrary() {
    // do stuff here
}