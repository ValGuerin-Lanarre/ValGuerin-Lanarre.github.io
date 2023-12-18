document.addEventListener("DOMContentLoaded", function() {
    const docSelect = document.getElementById("Doc-select");
    const docPreview = document.getElementById("doc-preview");

    docSelect.addEventListener("change", function() {
        const selectedValue = docSelect.value;

        switch (selectedValue) {
            case "PowerP":
                docPreview.src = "Documentation-projet/Infra NOw/Entreprise.pdf";
                break;
            case "BusinessPlan":
                docPreview.src = "Documentation-projet/Infra NOw/Buisness plan infra-now.pdf";
                break;
            case "KBIS":
                docPreview.src = "Documentation-projet/Infra NOw/KBIS (1).pdf";
                break;
            case "ML":
                docPreview.src = "Documentation-projet/Infra NOw/Mentions légales.pdf";
                break;

            default:
                // Gérer le cas par défaut si nécessaire
                break;
        }
    });
});
