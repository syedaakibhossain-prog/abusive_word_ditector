document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");
    const message = document.getElementById("message");
    const postText = document.getElementById("postText");



    button.addEventListener("click", async () => {
        const text = postText.value;
        const response = await fetch("http://localhost:3000/response", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text }),
        });
        const data = await response.json();
        message.textContent = data.message;


    });
});
