const { jsPDF } = window.jspdf;

const savePDF = () => {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;

    doc.setFont("Roboto-Regular");

    doc.text(40, 20, `Ваши имя и фамилия:`);
    doc.text(40, 50, `${name} ${surname}`);
    doc.output();
    doc.save("имя_фамилия.pdf");
};

const testFunction = (e) => {

    let doc = new jsPDF();

    e.preventDefault();

    let string = "";

    const previewContainer = document.getElementById("preview-container");

    previewContainer.innerHTML = "";

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;

    doc.setFont("Roboto-Regular");

    doc.text(40, 20, `Ваши имя и фамилия:`);
    doc.text(40, 50, `${name} ${surname}`);

    doc.output();

    string = doc.output("datauristring");

    var embed = "<embed width='50%' height='500px' src='" + string + "'/>";

    previewContainer.insertAdjacentHTML("afterbegin", embed);
};

document.getElementById("button-submit").addEventListener("click", (e) => {
    testFunction(e);
});
