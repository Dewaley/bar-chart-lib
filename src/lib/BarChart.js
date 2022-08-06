import Chart from './Chart'

const BarChart = ({data}) => {
  return (
    <Chart
      dataVal={
        data.length > 0
          ? data.map((item) => item.value)
          : null
      }
      labels={data.map((item) => item.name)}
    />
  )
}

export default BarChart