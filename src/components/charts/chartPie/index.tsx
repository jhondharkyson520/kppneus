import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface PieChartProps {
  data: { category: string; value: number }[]; // Dados do gráfico
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const options = {
    chart: {
      id: 'pie-chart',
    },
    labels: data.map((item) => item.category), // Rótulos das fatias
  };

  const series = data.map((item) => item.value); // Valores das fatias

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="pie"
      height={300} // Altura do gráfico
    />
  );
};

export default PieChart;