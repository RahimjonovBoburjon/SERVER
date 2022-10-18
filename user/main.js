const body = document.querySelector('#body');
const temp = document.querySelector('#temp').content;
const row = temp.querySelector("#row");

const getDate = async function () {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();

    data.forEach((user) => {
        const rowClone = row.cloneNode(true);
        const userNames = rowClone.querySelector(".user-name");
        const userEmails = rowClone.querySelector(".user-email");
        const userWebs = rowClone.querySelector(".user-web");
        userNames.textContent = user.name;
        userEmails.textContent = user.email;
        userWebs.textContent = user.website;
        userEmails.setAttribute("href", `mailto:${user.email}`);
        userWebs.setAttribute("href", `https://${user.website}`);
        body.appendChild(rowClone);
    });
};
getDate();