document.addEventListener("DOMContentLoaded", function() {
    const docSelect = document.getElementById("Doc-select");
    const docPreview = document.getElementById("doc-preview");

    docSelect.addEventListener("change", function() {
        const selectedValue = docSelect.value;

        switch (selectedValue) {
            case "DepBack":
                docPreview.src = "Documentation-projet/Deploiement/Déploiement_Backend.pdf";
                break;
            case "Depfront":
                docPreview.src = "Documentation-projet/Deploiement/IPSSI - Déploiement front.pdf";
                break;
            case "Depmob":
                docPreview.src = "Documentation-projet/Deploiement/DepMobil.pdf";
                break;

            default:
                // Gérer le cas par défaut si nécessaire
                break;
        }
    });
});
