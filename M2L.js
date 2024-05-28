document.addEventListener("DOMContentLoaded", function() {
    const docSelect = document.getElementById("Doc-select");
    const docPreview = document.getElementById("doc-preview");

    docSelect.addEventListener("change", function() {
        const selectedValue = docSelect.value;
        
        switch (selectedValue) {
            case "PowerPoint":
                docPreview.src = "Documentation-projet/M2L/Présentation des éléments à créer.pdf";
                break;
            case "DT":
                docPreview.src = "Documentation-projet/M2L/Documentation_Technique.pdf";
                break;
            case "Devis":
                docPreview.src = "Documentation-projet/M2L/Devis - InfraNow_M2L.pdf";
                break;
            case "TrgP":
                docPreview.src = "Documentation-projet/M2L/Triangle_Projet.pdf";
                break;
            case "Gantt":
                docPreview.src = "Documentation-projet/M2L/GanttAP2.pdf";
                break;

            default:
                // Gérer le cas par défaut si nécessaire
                break;
        }
    });
});
