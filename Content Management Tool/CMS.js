document.addEventListener('DOMContentLoaded', function(){
    var form = document.querySelector('#contentForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        var title = document.querySelector('#title').value;
        var description = document.querySelector('#description').value;
        var image = document.querySelector('#image').value;
        var description = document.querySelector('#video').value;

        var contentList = document.querySelector('#contentList');
        contentList.innerHTML = `
        <h1>Blog Details</h1>
        <h2>Title: ${title}</h2>
        <p>Description: ${description}</p>
        <img src="${image}" alt="Blog Image">
        <p> Video: ${video}</p>
        `;
    });
});