document.addEventListener("DOMContentLoaded", function() {
    const docSelect = document.getElementById("Doc-select");
    const docPreview = document.getElementById("doc-preview");

    docSelect.addEventListener("change", function() {
        const selectedValue = docSelect.value;

        switch (selectedValue) {
            case "PowerPoint11":
                docPreview.src = "Documentation-projet/AP4/Présentation des éléments à créer.pdf";
                break;
            case "Usecase":
                    docPreview.src = "Documentation-projet/AP4/Use Case.pdf";
                break;
            case "Activité":
                docPreview.src = "Documentation-projet/AP4/Activité all_merged.pdf";
                break;
            case "Classe":
                docPreview.src = "Documentation-projet/AP4/diagramme classe.pdf";
                break;
            case "MockUP":
                docPreview.src = "Documentation-projet/AP4/MockUp.pdf";
                break;
            case "Gantt":
                docPreview.src = "Documentation-projet/AP4/DIagramme Gantt.pdf";
                break;


            default:
                // Gérer le cas par défaut si nécessaire
                break;
        }
    });
});
