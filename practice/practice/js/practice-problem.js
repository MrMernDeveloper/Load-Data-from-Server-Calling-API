const loadApi = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
    .then(data =>displayData(data))
}

const displayData = (comments) => {
    const allComments = comments.slice(0, 20);
    console.log(allComments)
    
    const dataSection = document.getElementById('data-section');
    allComments.forEach(comment => {
        console.log(comment);
        const dataDiv = document.createElement('div')
        dataDiv.classList.add('design')
        dataDiv.innerHTML = `
        <h5>Name:${comment.name}</h5>
        <p>Email:${comment.email}</p>
        <p>Body:${comment.body} </P>
        
        
        `
        dataSection.appendChild(dataDiv)
    } )
}

loadApi();