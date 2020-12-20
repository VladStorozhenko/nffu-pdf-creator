const { jsPDF } = window.jspdf;

const bdayInput = document.getElementById("bday");
const coachBlock = document.getElementById("coach");
const coachLabel = document.getElementById("coach-label");

let needCoach = false;

const checkBirthDay = (bday) => {
    const BirthDateFormat = +new Date(bday);

    let years = (Date.now() - BirthDateFormat) / 31557600000;
    
    if (years < 14) {
        coachBlock.style.display = "block";
        coachLabel.style.display = "block";
        needCoach = true;
    } else {
        coachBlock.style.display = "none";
        coachLabel.style.display = "none";
        needCoach = false;
    }
};

bdayInput.addEventListener("change", (e) => checkBirthDay(e.target.value));

const initiateDownload = (doc, name, surname) => {
    const downloadButton = document.getElementById("button-download");

    downloadButton.addEventListener("click", () =>
        doc.save(`${name}_${surname}`)
    );
};

const processPDF = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const coach = document.getElementById("coach").value;
    const company = document.getElementById("company").value || "Эльдорадо";
    const bday = document.getElementById("bday").value;

    if (!name || !surname || !company || !bday) {
        alert("Пожалуйста, заполните все поля!");
        return;
    }

    if (needCoach && !coach) {
        alert("Введите имя Вашего тренера!");
        return;
    }

    let doc = new jsPDF();
    let string = "";
    let logo =
        "data:image/jpeg;base64,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";

    doc.addImage(logo, "JPEG", 10, 10);

    const previewContainer = document.getElementById("preview-container");

    previewContainer.innerHTML = "";

    doc.setFont("Roboto-Regular");

    let previewText = "";

    if (needCoach) {
        previewText = `Я ${name} ${surname}, обязаюсь работать за хлеб в компании ${company}. Мне меньше 14 лет, поэтому моим тренером будет ${coach}`;
    } else {
        previewText = `Я ${name} ${surname}, обязаюсь работать за хлеб в компании ${company}. Мне больше 14 лет и тренер мне не нужен`;
    }

    let splitTitle = doc.splitTextToSize(previewText, 190);

    doc.text(10, 40, splitTitle);

    let lorem =
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, deserunt totam? Repellendus aperiam consequatur est voluptas rerum, itaque natus quidem autem inventore obcaecati cupiditate possimus porro dicta molestias totam accusantium, illo eos. Impedit nulla deleniti quos aut pariatur ad perspiciatis, dignissimos numquam inventore blanditiis, ullam esse quam ipsa nostrum beatae adipisci maxime? Necessitatibus ea, est incidunt rerum provident fugiat vitae impedit sit vel nihil dignissimos minus ipsam reprehenderit sequi voluptas temporibus aperiam asperiores pariatur nulla in tempora, distinctio modi voluptatem. Asperiores aliquam perspiciatis nesciunt omnis, natus assumenda reiciendis quasi alias itaque temporibus, neque esse? Ex modi voluptates incidunt optio provident?";

    let splitLorem = doc.splitTextToSize(lorem, 190);

    doc.text(10, 65, splitLorem);

    doc.output();

    string = doc.output("datauristring");

    var embed =
        "<embed class='pdf-embed' src='" +
        string +
        "'/><button class='button-download' id='button-download'>Скачать в виде PDF файла</button>";

    previewContainer.insertAdjacentHTML("afterbegin", embed);

    initiateDownload(doc, name, surname);
};

document.getElementById("button-submit").addEventListener("click", (e) => {
    processPDF(e);
});
