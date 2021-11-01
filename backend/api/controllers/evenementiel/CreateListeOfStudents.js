const fs = require("fs");
const PDFDocument = require("pdfkit");
var blobStream = require('blob-stream');
function createInvoice(lstStudents, path) {
  let doc = new PDFDocument({ size: "A4", margin: 50 });

  generateHeader(doc,'Liste des etudiants');

  generateTable(doc, lstStudents);
  generateFooter(doc,lstStudents);
  doc.end();




  doc.save();

  doc.pipe(fs.createWriteStream(path));


  return doc;
}

function generateHeader(doc,invoice) {

}


function generateTable(doc, invoice) {
  let i;
  console.log(invoice)
  const invoiceTableTop = 100;

  doc.font("Helvetica-Bold");




  generateTableRow(
    doc,
    invoiceTableTop,
    'Date Application',
    'Master',
    'Etudiant',
   'Etablissement',
    'Etat',
    'Score'
  )


  generateHr(doc, invoiceTableTop + 20);
  doc.font("Helvetica");

  for (i = 0; i < invoice.length; i++) {

    const position = invoiceTableTop + (i + 1) * 30;

      generateTableRow(
        doc,
        position,
       invoice[i].dateApp,
       invoice[i].Master,
       invoice[i].Etudiant,
       invoice[i].Etab,
       invoice[i].Etat,
       invoice[i].Score.toFixed(2)

      );




    generateHr(doc, position + 20);
  }




}

function generateFooter(doc,invoice) {
}

function generateTableRow(
  doc,
  y,
  Désignation,
  Quantité,
  PrixHT,
  TVA,
  Remise,
   totalht
) {
  doc
    .fontSize(7)
    .text(Désignation, 50, y)
    .text(Quantité, 180, y)
    .text(PrixHT, 250, y)
    .text(TVA, 320, y)
    .text(Remise, 380, y, { width: 60, align: "left" })
    .text(totalht, 440, y, { width: 60, align: "right" })

}


function generateHr(doc, y) {
  doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
}





module.exports = {
  createInvoice
};
