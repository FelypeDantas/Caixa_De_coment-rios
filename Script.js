const InputName = document.getElementById("InputName");
const TextComment = document.getElementById("InputText");
const form = document.getElementById("formulario");
const commentPost = document.getElementById("commentPost");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let P = document.createElement("p");
    P.classList = "p-2 d-flex text-wrap flex-wrap";
    P.innerHTML = `<strong>${InputName.value}: </strong> &nbsp ${TextComment.value}`;
    commentPost.appendChild(P);
    InputName.value = " ";
    TextComment.value = " ";
    InputName.focus();
});