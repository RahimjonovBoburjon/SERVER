const newFragment = new DocumentFragment();
const block = document.querySelector(".block");
const url = "https://jsonplaceholder.typicode.com/posts";

const getPosts = async function (link) {
    const resp = await fetch(link);
    const data = await resp.json();

    data.forEach((post) => {
        const box = document.createElement("div");
        const title = document.createElement("h2");
        const user = document.createElement("h3");
        const text = document.createElement("p");

        box.classList.add("box");
        title.classList.add("title");
        text.classList.add("text");

        title.textContent = post.title;
        user.textContent = post.userId;
        text.textContent = post.body;

        box.appendChild(title);
        box.appendChild(user);
        box.appendChild(text);

        newFragment.appendChild(box);
    });
    block.appendChild(newFragment);
};
getPosts(url);