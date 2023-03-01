class Personne {
    constructor(userId) {
        this.userId = userId;
        this.display()
    }
    async display() {
        if (!this.userId) {
            console.log('erreur')
        }
        const userData = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.userId}`, {});

        if (!userData) {
            return console.log('utilisateur introuvable');
        }
        const {name, email} = userData.data
        console.log(name, email)
    }
}

let personneA = new Personne(2);
console.log(personneA);