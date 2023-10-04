import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface LineChartProps {
  data: { x: string; y: number }[]; // Dados do gráfico
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const options = {
    chart: {
      id: 'line-chart',
    },
    xaxis: {
      categories: data.map((item) => item.x), // Rótulos no eixo X
    },
  };

  const series = [
    {
      name: 'Valor ', // Nome da série
      data: data.map((item) => item.y), // Valores da série
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={300} // Altura do gráfico
    />
  );
};

export default LineChart;