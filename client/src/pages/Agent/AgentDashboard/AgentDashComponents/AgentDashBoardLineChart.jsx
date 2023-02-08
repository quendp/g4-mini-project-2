import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const DUMMY_CHART = [
  {
    id: 1,
    month: 'Jan',
    cosmopolitanLights: 20,
    diveUnderWater: 22,
    exploreTheSummit: 32,
    lookBackInHIstory: 13,
    natureAndCulture: 26,
  },
  {
    id: 2,
    month: 'Feb',
    cosmopolitanLights: 23,
    diveUnderWater: 35,
    exploreTheSummit: 56,
    lookBackInHIstory: 24,
    natureAndCulture: 27,
  },
  {
    id: 3,
    month: 'Mar',
    cosmopolitanLights: 36,
    diveUnderWater: 27,
    exploreTheSummit: 33,
    lookBackInHIstory: 13,
    natureAndCulture: 15,
  },
  {
    id: 4,
    month: 'Apr',
    cosmopolitanLights: 42,
    diveUnderWater: 14,
    exploreTheSummit: 22,
    lookBackInHIstory: 43,
    natureAndCulture: 56,
  },
  {
    id: 2,
    month: 'May',
    cosmopolitanLights: 56,
    diveUnderWater: 44,
    exploreTheSummit: 54,
    lookBackInHIstory: 30,
    natureAndCulture: 23,
  },
]

const AgentDashBoardLineChart = () => {

  const [chartData, setChartData] = useState({
    labels: DUMMY_CHART.map((data) => data.month),
    datasets: [
    {
      label: 'Cosmopolitan Lights',
      data: DUMMY_CHART.map((data) => data.cosmopolitanLights),
      borderColor: '#b97508',
      backgroundColor: '#ffae00',
      hidden: false,
      borderWidth: 3,
    },
    {
      label: 'Dive Under Water',
      data: DUMMY_CHART.map((data) => data.diveUnderWater),
      borderColor: '#0066ff',
      backgroundColor: '#00b7ff',
      hidden: true,
      borderWidth: 3,
    },
    {
      label: 'Explore The Summit',
      data: DUMMY_CHART.map((data) => data.exploreTheSummit),
      borderColor: '#53a19b',
      backgroundColor: '#8ee0c8',
      hidden: true,
      borderWidth: 3,
    },
    {
      label: 'Look Back In History',
      data: DUMMY_CHART.map((data) => data.lookBackInHIstory),
      borderColor: '#946b2d',
      backgroundColor: '#b49367',
      hidden: true,
      borderWidth: 3,
    },
    {
      label: 'Nature And Culture',
      data: DUMMY_CHART.map((data) => data.natureAndCulture),
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
              title: {
                display: true,
                text: 'Custom Chart Title'
              },
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
