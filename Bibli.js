document.addEventListener("DOMContentLoaded", function() {
    const docSelect = document.getElementById("Doc-select");
    const docPreview = document.getElementById("doc-preview");

    docSelect.addEventListener("change", function() {
        const selectedValue = docSelect.value;

        switch (selectedValue) {
            case "Cdc":
                docPreview.src = "Documentation-projet/Bibliotheque/ap1_cahier_des_charges.pdf";
                break;
            case "MU":
                docPreview.src = "Documentation-projet/Bibliotheque/MANUEL UTILISATEUR.pdf";
                break;
            case "RGPD":
                docPreview.src = "Documentation-projet/Bibliotheque/mise_en_conformite_rgpd_et_securite.pdf";
                break;

            default:
                // Gérer le cas par défaut si nécessaire
                break;
        }
    });
});
