import { Contact } from "./contact.js";
const contacts = [];

function displayContacts() {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = ""; 
    contacts.forEach(contact => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${contact.titre}</td>
            <td>${contact.nom}</td>
            <td>${contact.prenom}</td>
            <td>${contact.dateNaissance}</td>
            <td>${contact.telephone}</td>
            <td>${contact.email}</td>
        `;
        resultElement.appendChild(row);
    });
}

document.getElementById("formContact").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const titre = formData.get("titre");
    const nom = formData.get("nom");
    const prenom = formData.get("prenom");
    const dateNaissance = formData.get("dateNaissance");
    const telephone = formData.get("telephone");
    const email = formData.get("email");

    const newContact = new Contact(titre, nom, prenom, dateNaissance, telephone, email);
    contacts.push(newContact);

    displayContacts();

    event.target.reset();
});
