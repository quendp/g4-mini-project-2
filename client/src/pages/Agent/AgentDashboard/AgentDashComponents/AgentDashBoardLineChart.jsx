import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const AgentDashBoardLineChart = (props) => {

  const [chartData, setChartData] = useState({
    labels: props.dummyChart.map((data) => data.month),
    datasets: [
    {
      label: 'Cosmopolitan Lights',
      data: props.dummyChart.map((data) => data.cosmopolitanLights),
      borderColor: '#b97508',
      backgroundColor: '#ffae00',
      hidden: false,
      borderWidth: 3,
    },
    {
      label: 'Dive Under Water',
      data: props.dummyChart.map((data) => data.diveUnderWater),
      borderColor: '#0066ff',
      backgroundColor: '#00b7ff',
      hidden: true,
      borderWidth: 3,
    },
    {
      label: 'Explore The Summit',
      data: props.dummyChart.map((data) => data.exploreTheSummit),
      borderColor: '#53a19b',
      backgroundColor: '#8ee0c8',
      hidden: true,
      borderWidth: 3,
    },
    {
      label: 'Look Back In History',
      data: props.dummyChart.map((data) => data.lookBackInHIstory),
      borderColor: '#946b2d',
      backgroundColor: '#b49367',
      hidden: true,
      borderWidth: 3,
    },
    {
      label: 'Nature And Culture',
      data: props.dummyChart.map((data) => data.natureAndCulture),
      borderColor: '#169b1b',
      backgroundColor: '#14cf29',
      hidden: true,
      borderWidth: 3,
    }
  ],
})

  return (
    <div className='col-xxl-6 col-xl-6 col-12 mb-4'>
      <div>
        <div>
          <h3 className='text-dark'>Monthly Bookings</h3>
          <div>
            <Line 
            data={chartData}
            options={{
              // backgroundColor: 'rgb(245,245,245)',
              // defaultColor: '#f00',
              elements: {
                line: {
                  tension: 0,
                  borderWidth: 2,
                  borderColor: chartData.datasets[0].borderColor,
                  backgroundColor: chartData.datasets[0].backgroundColor,
                  fill: false,
                  borderJoinStyle: 'round',
                  cubicInterpolationMode: 'monotone',
                  spanGaps: false
                }
              },
            }}
            />
          </div>
         </div>
       </div>
    </div>      
  )
}

export default AgentDashBoardLineChart
