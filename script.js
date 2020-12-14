const { jsPDF } = window.jspdf;

const doc = new jsPDF();

const savePDF = () => {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;

    doc.setFont('Roboto-Regular')

    doc.text(40, 20, `Ваши имя и фамилия:`)
    doc.text(40, 50, `${name} ${surname}`)
    doc.save("имя_фамилия.pdf");
};

document.getElementById("button-submit").addEventListener("click", () => {
    savePDF()
});
