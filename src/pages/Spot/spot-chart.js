import React from 'react';
import Chart from 'react-apexcharts';

function SpotChart(props) {
    return (
        <Chart options={props.data.options} series={props.data.series} width={500} height={320} />
    )

}
export default SpotChart;