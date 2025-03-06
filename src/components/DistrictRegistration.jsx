import React from 'react';
import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend
);

const DistrictRegistration = () => {
    const data = {
        labels: ['Ishkashim', 'Maimai', 'Nusai', 'Shughnan', 'Shukai', 'Wakhan', 'Zebok'],
        datasets: [
          {
            label: '2023',
            data: [0, 0, 0, 0, 0, 0, 0],
            backgroundColor: 'rgba(169, 169, 169, 0.6)', 
          },
          {
            label: '2024',
            data: [0, 0, 0, 0, 0, 0, 0],
            backgroundColor: 'rgba(169, 169, 169, 0.6)', 
          },
          {
            label: '2025',
            data: [15, 0, 5, 6, 0, 0],
            backgroundColor: 'rgba(144, 238, 144, 0.6)', 
          }
        ]
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Registration by District',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 20,
            title: {
              display: true,
              text: 'Number of Registrations'
            }
          }
        }
      };
    
      return (
      <div className=' flex flex-row justify-between items-center h-auto w-[350px] bg-white shadow-lg rounded-lg  p-3'>
        <Bar data={data} options={options} />
      </div>
    )
}

export default DistrictRegistration