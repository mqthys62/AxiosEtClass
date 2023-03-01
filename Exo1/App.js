// Exercice 1: Utilisation d'Axios avec l'API JSONPlaceholder

const main = (userId) => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`, {}).then((res) => console.log(res))
}
    
main(1);