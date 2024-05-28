document.addEventListener("DOMContentLoaded", function() {
    const docSelect = document.getElementById("Doc-select");
    const docPreview = document.getElementById("doc-preview");

    docSelect.addEventListener("change", function() {
        const selectedValue = docSelect.value;

        switch (selectedValue) {
            case "Eurlstf":
                docPreview.src = "Documentation-projet/ELS/Eurl.pdf";
                break;


            default:
                // Gérer le cas par défaut si nécessaire
                break;
        }
    });
});
