document.getElementById("download-pdf").addEventListener("click", () => {
    const button = document.getElementById("download-pdf");
    const element = document.querySelector(".container");

    // Hide button
    button.style.display = "none";

    const opt = {
        margin: 0.5,
        filename: "Vraj_Dobariya_Resume.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: {
            unit: "in",
            format: "a4",
            orientation: "portrait"
        }
    };

    html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {
            // Show button again
            button.style.display = "block";
        });
});