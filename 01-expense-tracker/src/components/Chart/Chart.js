import React from 'react';

import ChartBar from './ChartBar';
import '../../style/Chart.css';

function Chart({ dataPoints }) {
  const valueArr = dataPoints.map((data) => data.value);
  const MaximumNum = Math.max(...valueArr);

  return (
    <div className="chart">
      {dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={MaximumNum}
          label={data.label}
        />
      ))}
    </div>
  );
}

export default Chart;
