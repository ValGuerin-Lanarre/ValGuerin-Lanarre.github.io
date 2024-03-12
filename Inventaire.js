document.addEventListener("DOMContentLoaded", function() {
    const docSelect = document.getElementById("Doc-select");
    const docPreview = document.getElementById("doc-preview");

    docSelect.addEventListener("change", function() {
        const selectedValue = docSelect.value;

        switch (selectedValue) {
            case "Inventaire-doc":
                docPreview.src = "Documentation-projet/Inventaire/Inventaire Baies IPSSI.pdf";
                break;


            default:
                // Gérer le cas par défaut si nécessaire
                break;
        }
    });
});
