import jsPDF from 'jspdf';

const generateReport = () => {
  const doc = new jsPDF();
  doc.text('Credit Score Report', 10, 10);
  doc.save('report.pdf');
};
