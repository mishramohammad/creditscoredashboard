import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Income', 'Credit History', 'Outstanding Debt'],
  datasets: [
    {
      label: 'Credit Score Components',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const MyBarChart = () => <Bar data={data} />;
