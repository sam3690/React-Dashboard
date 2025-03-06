import React, { useEffect, useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, scales } from "chart.js";
import DistrictRegistration from './DistrictRegistration';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const cData = {
  labels: ["2023", "2024", "2025"],
  datasets: [
    {
      label: "Registration by Year Children 5",
      data: [1,5319,26],

      backgroundColor: ["rgba(116, 160, 243, 0.8)"],
      borderWidhth: 2,
      BiBorderRadius:10,
      hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
      hoverBorderColor: 'rgba(75, 192, 192, 1)',
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: { display: true, text: "Registration by year Children Under 5y",  },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 7500,  // Matches the y-axis top limit (7.5k = 7500)
      ticks: {
        stepSize: 2500,  // Creates ticks at 0, 2500, 5000, 7500
        callback: function(value) {
          return value === 0 ? '0' : `${value/1000}k`;
        }
      },
      grid: {
        display: true,
        color: 'rgba(0, 0, 0, 0.1)'
      }
    }
  }
};

const districtData = {
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

const districtOptions = {
  responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false // Hide default legend since we're using our own selector
      },
      title: {
        display: true,
        text: 'Registration by District',
        font: {
          size: 18
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 20,
        ticks: {
          stepSize: 5
        }
      },
      x: {
        ticks: {
          autoSkip: false
        }
      }
    }
};

const U5Community = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const districts = ['Ishkashim', 'Maimai', 'Nusai', 'Shughnan', 'Shukai', 'Wakhan', 'Zebok'];
  
  // Initial demo data
  const demoData = {
    '2023': [0, 2, 0, 1, 1, 0, 0],
    '2024': [0, 5, 0, 3, 2, 0, 0],
    '2025': [0, 15, 0, 5, 6, 0, 0]
  };

  // Fetch data for selected year
  const fetchData = async (year) => {
    setIsLoading(true);
    
    try {
      // This would be your actual API call
      // const response = await fetch(`/api/registrations?year=${year}`);
      // const data = await response.json();
      
      // Using demo data instead of API call for now
      const data = demoData[year];
      
      // Simulate network delay
      setTimeout(() => {
        updateChart(data);
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  // Update chart with new data
  const updateChart = (data) => {
    setChartData({
      labels: districts,
      datasets: [
        {
          label: `${selectedYear} Registrations`,
          data: data,
          backgroundColor: 'rgba(144, 238, 144, 0.6)', // Light Green
          borderColor: 'rgba(75, 192, 75, 1)',
          borderWidth: 1,
        }
      ]
    });
  };

  // Fetch data when year changes
  useEffect(() => {
    fetchData(selectedYear);
  }, [selectedYear]);

  // const yearButtonStyle = (year) => ({
  //   padding: '8px 16px',
  //   margin: '0 5px',
  //   borderRadius: '4px',
  //   border: '1px solid #ccc',
  //   background: year === selectedYear ? 'rgba(144, 238, 144, 0.6)' : '#f0f0f0',
  //   fontWeight: year === selectedYear ? 'bold' : 'normal',
  //   cursor: 'pointer'
  // });

  // Fetch data when year changes
  useEffect(() => {
    fetchData(selectedYear);
  }, [selectedYear]);


  return (
    <div className='flex flex-row justify-center items-contain flex-wrap w-full'>
      {/* charts main section */}
      <div className='flex sm:flex-row flex-col flex-wrap justify-start sm:gap-6 gap-3 items-start h-auto w-[800px] p-3'>
        {/* chart 1 start */}
        <div className='flex flex-col justify-between items-center h-[250px] w-[350px] bg-white shadow-lg rounded-lg p-3'>
          <Bar data={cData} options={options} style={{ width: '100%', height: '100%' }} />
        </div>
        {/* chart 1 end */}
        {/* chart 2 */}
        <div className='flex flex-col justify-between items-center h-[250px] w-[350px] bg-white shadow-lg rounded-lg p-3'>
          <div style={{ width: '100%', height: '100%', maxWidth: '800px', margin: '0 auto' }}>
            {/* Main chart */}
            <div style={{ position: 'relative' }}>
              {isLoading && (
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'rgba(255,255,255,0.8)',
                  padding: '10px',
                  borderRadius: '4px',
                  zIndex: 10
                }}>
                  
                </div>
              )}
              
              {chartData && <Bar data={districtData} options={districtOptions} />}
            </div>

            {/* Subtle year selector */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              margin: '10px 0 20px', 
              fontFamily: 'sans-serif',
              fontSize: '14px'
            }}>
              {['2023', '2024', '2025'].map(year => (
                <div 
                  key={year}
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '20px',
                    cursor: 'pointer',
                    color: selectedYear === year ? '#000' : '#777',
                  }}
                  onClick={() => !isLoading && setSelectedYear(year)}
                >
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: '1px solid #999',
                    marginRight: '5px',
                    background: selectedYear === year ? 'rgba(144, 238, 144, 0.8)' : 'white',
                    boxShadow: selectedYear === year ? '0 0 0 2px rgba(144, 238, 144, 0.3)' : 'none'
                  }} />
                  <span>{year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* chart 2 end */}
        {/* chart 3 start */}
          <div className='flex flex-col justify-between items-center h-[250px] w-[350px] bg-white shadow-lg rounded-lg p-3'>
            <Bar data={cData} options={options} style={{ width: '100%', height: '100%' }} />
          </div>
        {/* chart 3 end */}
        {/* chart 4 start */}
        <div className='flex flex-col justify-between items-center h-[250px] w-[350px] bg-white shadow-lg rounded-lg p-3'>
          <div style={{ width: '100%', height: '100%', maxWidth: '800px', margin: '0 auto' }}>
            {/* Main chart */}
            <div style={{ position: 'relative' }}>
              {isLoading && (
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'rgba(255,255,255,0.8)',
                  padding: '10px',
                  borderRadius: '4px',
                  zIndex: 10
                }}>
                  
                </div>
              )}
              
              {chartData && <Bar data={districtData} options={districtOptions} />}
            </div>

            {/* Subtle year selector */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              margin: '10px 0 20px', 
              fontFamily: 'sans-serif',
              fontSize: '14px'
            }}>
              {['2023', '2024', '2025'].map(year => (
                <div 
                  key={year}
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '20px',
                    cursor: 'pointer',
                    color: selectedYear === year ? '#000' : '#777',
                  }}
                  onClick={() => !isLoading && setSelectedYear(year)}
                >
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: '1px solid #999',
                    marginRight: '5px',
                    background: selectedYear === year ? 'rgba(144, 238, 144, 0.8)' : 'white',
                    boxShadow: selectedYear === year ? '0 0 0 2px rgba(144, 238, 144, 0.3)' : 'none'
                  }} />
                  <span>{year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* chart 4 end */}
      </div>
      {/* chart main section end */}
      <div className='flex flex-col flex-wrap justify-betweeon items-center w-[400px] h-[800px} bg-white shadow-lg rounded-lg p-3'>
        {/* starts here */}
        <div className="max-w-sm rounded-lg bg-gray-200 p-4 shadow-md border border-gray-300">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium">Screened:</h2>
            <span className="font-bold text-lg">5419</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                {/* Image placeholder - you'll add your own image here */}
                <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                <span>Male:</span>
              </div>
              <span>50.43%</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                {/* Image placeholder - you'll add your own image here */}
                <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                <span>Female:</span>
              </div>
              <span>49.57%</span>
            </div>

            <div className="border-t border-gray-300 pt-2 mt-2">
              <div className="flex justify-between items-center">
                <span>Follow-up:</span>
                <span className="font-bold">13308</span>
              </div>
            </div>
          </div>
        </div>
        {/* ends here */}
      </div>
    </div>
  )
}

export default U5Community