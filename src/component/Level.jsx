import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Level() {
  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartoptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["volume", "services"],
      datasets: [
        {
          // label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: "#A9DFD8",
          borderColor: [
            
          ],
          borderWidth: 1,
        },
      ],
    });
    setChartoptions({
      plugins: {
        legend: {
          position: "top",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <Bar data={chartData} options={chartOptions} />
      {/* <BarChart
      xAxis={[{ scaleType: 'band', data: ['volume', 'services'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
     height={500}
     width={600}
      
    /> */}
    </>
  );
}

export default Level;
