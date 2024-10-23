import Plot from 'react-plotly.js';

const PieChartWidget = () => {
  const data = [
    {
      labels: ['Product A', 'Product B', 'Product C', 'Product D'],
      values: [3000, 1500, 4000, 2500],
      type: 'pie',
      textinfo: 'label+percent',
      marker: { colors: ['blue', 'orange', 'green', 'red'] },
    },
  ];

  const layout = {
    title: 'Market Share of Products',
  };

  return (
    <Plot
      data={data}
      layout={layout}
      style={{ width: '100%', height: '400px' }}
    />
  );
};

export default PieChartWidget;
