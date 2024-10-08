export class Contact {
    constructor(titre, nom, prenom, dateNaissance, telephone, email) {
        this.titre = titre;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.telephone = telephone;
        this.email = email;
    }

    getFullName() {
        return `${this.titre} ${this.nom} ${this.prenom}`;
    }

    getInfo() {
        return {
            titre: this.titre,
            nom: this.nom,
            prenom: this.prenom,
            dateNaissance: this.dateNaissance,
            telephone: this.telephone,
            email: this.email
        };
    }
}