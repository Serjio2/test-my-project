// console.log('Hello world');
// console.log('Again. Hello world');

// const postId = 1;

// fetch(`http://jsonplaceholder.typicode.com/posts/${postId}`)
// .then(response => response.json())
// .then(posts => console.log(posts))
// .catch(error => console.log(error))

const postToAdd = {
    title: "Serjio",
    body: "CRUD is awesome"
};

const options = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(postToAdd),
};


fetch("http://jsonplaceholder.typicode.com/posts", options)
.then(response => response.json())
.then(posts => console.log(posts))
.catch(error => console.log(error))