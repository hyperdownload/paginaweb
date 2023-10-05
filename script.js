document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const elementContainer = document.getElementById("elementContainer");

    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const elementsPerPage = 8; 
    let currentPage = 0; 

    const elements = [
        { name: "Elemento 1", link: "https://www.ejemplo.com/enlace1",image:"3ragen.png" },
        { name: "Elemento 2", link: "https://www.ejemplo.com/enlace2",image:"3ragen.png"},
        { name: "Elemento 3", link: "https://www.ejemplo.com/enlace3",image:"3ragen.png" },
        { name: "Elemento 4", link: "https://www.ejemplo.com/enlace4",image:"3ragen.png" },
        { name: "Elemento 5", link: "https://www.ejemplo.com/enlace5",image:"3ragen.png" },
        { name: "Elemento 6", link: "https://www.ejemplo.com/enlace6",image:"3ragen.png" },
        { name: "Elemento 7", link: "https://www.ejemplo.com/enlace7",image:"3ragen.png" },
        { name: "Elemento 8", link: "https://www.ejemplo.com/enlace8",image:"3ragen.png" },
        { name: "eri gay", link: "https://www.ejemplo.com/enlace8",image:"3ragen.png" },
    ];

    function showElements() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredElements = elements.filter((element) =>
            element.name.toLowerCase().includes(searchTerm)
        );

        const startIndex = currentPage * elementsPerPage;
        const endIndex = startIndex + elementsPerPage;
        const currentPageElements = filteredElements.slice(startIndex, endIndex);

        elementContainer.innerHTML = "";

        currentPageElements.forEach((element) => {
            const div = document.createElement("div");
            div.className = "element";

            const img = document.createElement("img");
            img.src = element.image;
            img.alt = element.name;
            div.appendChild(img);

            const text = document.createElement("p");
            text.textContent = element.name;
            div.appendChild(text);

            div.addEventListener("click", () => {
                window.location.href = element.link;
            });

            elementContainer.appendChild(div);
        });

        prevButton.disabled = currentPage === 0;
        nextButton.disabled = endIndex >= filteredElements.length;
    }

    prevButton.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            showElements();
        }
    });

    nextButton.addEventListener("click", () => {
        const startIndex = currentPage * elementsPerPage;
        if (startIndex + elementsPerPage < elements.length) {
            currentPage++;
            showElements();
        }
    });

    searchInput.addEventListener("input", showElements);

    showElements();
});