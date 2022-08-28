const loadLovers = () => {
    fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(data => displayLovers(data.results))

}

const displayLovers = (users) => {
    console.log(users)
    const loverDiv = document.getElementById('your-section');
    for (const user of users) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('design')
        newDiv.innerHTML = `
        <h3>Name: ${user.name.title}  ${user.name.first}  ${user.name.last}</h3>
        <h5>Email: ${user.email}</h5>
        <h5>Gender: ${user.gender}</h5>
        <h6>Cell:${user.cell}</h6>
        `
        loverDiv.appendChild(newDiv)
    }
    
}

loadLovers();