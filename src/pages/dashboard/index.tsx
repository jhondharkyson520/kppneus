import LineChart  from '../../components/charts/chartLineLiquid'
import PieChart from '../../components/charts/chartPie';

export function Dashboard(){
    const chartLineData = [
        { x: 'Janeiro', y: 12.50 },
        { x: 'Fevereiro', y: 19.50 },
        { x: 'Março', y: 3.50 },
        { x: 'Abril', y: 5.55 },
        { x: 'Maio', y: 2.14 },
      ];

      const chartPieData = [
        { category: 'Maçã', value: 30 },
        { category: 'Banana', value: 45 },
        { category: 'Laranja', value: 25 },
      ];
    
      return (
        <div className="App">
          <h1>Lucro líquido mensal</h1>
          <LineChart data={chartLineData} />

          <h1>Gráfico de Pizza</h1>
            <PieChart data={chartPieData} />
        </div>
      );
    }