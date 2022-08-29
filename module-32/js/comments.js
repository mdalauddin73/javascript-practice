function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}
function displayComments(comments) {
    const commentsContainer = document.getElementById('comments-container');
    for (const comment of comments) {
        const commentsDiv = document.createElement('div');
        commentsDiv.innerHTML = `
        <h3>id: ${comment.id}</h3>
        <h4>Name: ${comment.name}</h4>
        <h5>Email: ${comment.email}</h5>    
        `;
        commentsContainer.appendChild(commentsDiv);
    }
}
loadComments();