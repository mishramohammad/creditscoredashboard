import jsPDF from 'jspdf';

const generateReport = (income, creditHistory, outstandingDebt, creditScore) => {
  const doc = new jsPDF();
  doc.text('Credit Score Report', 10, 10);

  // Add credit score information to the report
  doc.text(`Income: $${income}`, 10, 30);
  doc.text(`Credit History: ${creditHistory}`, 10, 40);
  doc.text(`Outstanding Debt: $${outstandingDebt}`, 10, 50);
  doc.text(`Credit Score: ${creditScore}`, 10, 60);

  doc.save('report.pdf');
};

export default generateReport;
