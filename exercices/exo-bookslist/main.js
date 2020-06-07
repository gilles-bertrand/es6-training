// Book Class : représente un livre
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class : s'occupe de gérer les tâches UI
class UI {
    static displayBooks() {
        // const StoredBooks = [
        //     {
        //         title: "book one",
        //         author: "john doe",
        //         isbn: '12345678'
        //     },
        //     {
        //         title: "book two",
        //         author: "jane doe",
        //         isbn: '87654321'
        //     },
        // ];

        // const books = StoredBooks;

        const books = Store.getBooks();
        books.forEach(book => UI.addBookToList(book))
    }

    // Ajouter un livre à la liste
    static addBookToList(book) {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `
        list.appendChild(row);
    }

    //Supprimer un livre de la liste
    static deleteBook(element) {
        if (element.classList.contains('delete')) {
            element.parentElement.parentElement.remove()
        }
    }

    // Afficher les différentes alertes
    static showAlert(message,className) {
        const div = document.createElement('div');
        // div.classList.add(className);
        div.className = `alert alert-${className}`; // exemple : alert alert-danger ou alert alert-success
        // div.innerHTML = message;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form); //insérer la div devant le form dans container

        // Faire disparaître l'alert après 3 secondes :
        setTimeout(()=> document.querySelector('.alert').remove(), 3000)
    }

    // Vider les champs après ajout d'un livre
    static clearFields() {
        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
        document.getElementById('isbn').value = "";
    }
}

// Store Class : stockage dans localstorage
class Store {
    static getBooks() {
        let books;

        // On vérifie s'il y a déjà des livres stockés, si pas, mon books est un array vide
        if (localStorage.getItem('books') === null) {
            books = []
        } else {
            books = JSON.parse(localStorage.getItem('books')); // le localstorage stocke en string donc on doit convertir en json pour l'utiliser ici
        }

        return books;
    }

    static addBook(book) {
        // Je récupère ce qui existe déjà dans le localstorage en utilisant la méthode qu'on a créée
        const books = Store.getBooks();

        // On ajoute le nouveau livre
        books.push(book);

        // On remet le tout dans le local storage en n'oubliant pas de convertir en string
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.splice(books.findIndex(b => b.isbn === isbn), 1);

        // On remet le tout dans le local storage en n'oubliant pas de convertir en string
        localStorage.setItem('books', JSON.stringify(books));
    }

}

// Event : affichage des livres
document.addEventListener('DOMContentLoaded', UI.displayBooks)

// Event : ajout d'un livre
document.getElementById('book-form').addEventListener('submit', e => {
    e.preventDefault();
    // Récupérer les valeurs du formulaire
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Valider les champs
    if (title === '' || author === '' || isbn === '') {
        // alert("Merci de remplir les champs")
        UI.showAlert("Veuillez remplir tous les champs", "danger") // danger pour compléter la classe alert-danger
    } else {

        // Créer une instance de Book
        const book = new Book(title, author, isbn);

        // Ajouter le livre à la liste via le UI (=visuellement)
        UI.addBookToList(book);

        // Ajouter le livre dans le localStorage (=back)
        Store.addBook(book);

        // Afficher une alert success
        UI.showAlert("Le livre a été ajouté", "success")

        // Vider les champs
        UI.clearFields();

    }
});

// Event : suppression d'un livre
document.getElementById('book-list').addEventListener('click', e => {

    // Supprimer le livre via le UI (visuellement)
    UI.deleteBook(e.target);

    // Supprimer le livre du localstorage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)

    // Afficher une alert success
    UI.showAlert("Le livre a été supprimé", "success")
})