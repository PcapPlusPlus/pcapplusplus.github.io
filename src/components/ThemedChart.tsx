import React from 'react';
import Chart from 'react-google-charts';

interface ThemedChartProps {
  data: Array<string>;
}

function ThemedChart({ data }: ThemedChartProps) {
  // const primaryColor = getComputedStyle(document.body).getPropertyValue('--ifm-color-primary');
  return (
    <Chart
      height={450}
      chartType="ColumnChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title: 'Graphic view',
        chartArea: { left: 0 },
        backgroundColor: 'transparent',
        // colors: [primaryColor],
      }}
      legendToggle
    />
  );
}

export default ThemedChart;
