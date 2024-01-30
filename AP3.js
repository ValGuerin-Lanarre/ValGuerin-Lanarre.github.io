document.addEventListener("DOMContentLoaded", function() {
    const docSelect = document.getElementById("Doc-select");
    const docPreview = document.getElementById("doc-preview");

    docSelect.addEventListener("change", function() {
        const selectedValue = docSelect.value;

        switch (selectedValue) {
            case "ManuelUtilisateur":
                docPreview.src = "Documentation-projet/AP3/MANUEL UTILISATEUR.pdf";
                break;
            case "DOcTech":
                docPreview.src = "Documentation-projet/AP3/DOCUMENTATION TECHNIQUE.pdf";
                break;
            default:
                // Gérer le cas par défaut si nécessaire
                break;
        }
    });
});
