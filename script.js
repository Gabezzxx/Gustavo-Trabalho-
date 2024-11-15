const resources = {
    programacao: [
        { title: "Video Aula de  HTML e CSS", url: "https://www.youtube.com/watch?v=w7sIMxxVELs" },
        { title: "Video Aula JavaScript", url: "https://www.youtube.com/watch?app=desktop&v=sKQVC7raYd4" },
        { title: "Video Aula Python", url: "https://www.youtube.com/watch?v=BxMtSb2w9Sk" },
        { title: "Video Aula SQL", url: "https://www.youtube.com/watch?v=6M-jFECiHog" }
    ],
    design: [
        { title: "Video Aula de C#", url: "https://www.youtube.com/watch?v=PKMm-cHe56g" },
        { title: "Video Aula de C++", url: "https://www.youtube.com/watch?v=McbdxZ3Se2U" }
    ]
};

function showCategory(category) {
    const content = document.getElementById("content");
    content.innerHTML = ""; 

    if (resources[category]) {
        resources[category].forEach(resource => {
            const link = document.createElement("a");
            link.href = resource.url;
            link.textContent = resource.title;
            link.target = "_blank";

            const div = document.createElement("div");
            div.appendChild(link);

            content.appendChild(div);
        });
    } else {
        content.innerHTML = "<p>Categoria não encontrada.</p>";
    }
}