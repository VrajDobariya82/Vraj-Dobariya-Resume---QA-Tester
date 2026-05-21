const downloadButton = document.getElementById("download-pdf");

if (downloadButton) {
  downloadButton.addEventListener("click", () => {
    const element = document.querySelector(".container");

    if (!element || typeof html2pdf === "undefined") {
      return;
    }

    const opt = {
      margin: 0.4,
      filename: "Vraj_Dobariya_QA_Tester_Resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 3, logging: true, scrollY: 0 },
      jsPDF: {
        unit: "in",
        format: [8.5, 11],
        orientation: "portrait"
      }
    };

    html2pdf().set(opt).from(element).save();
  });
}
