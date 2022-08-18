import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;
{ /* creo el grafico que llame a distintas variables */ }
const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  { /* matriz para recorrer historial de criptos y obtener precios */ } 
  const coinPrice = [];
  { /* matriz para recorrer historial de criptos y obtener marcas de tiempo*/ }
  const coinTimestamp = [];
  { /* creo diferentes bucles paraque salgan de 1 en 1 en la matriz de precio */ }
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }
  { /* creo diferentes bucles para que salgan las marcas de tiempo de la matriz anterior */ }
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    const date = new Date(coinHistory?.data?.history[i].timestamp);
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp*1000).toLocaleDateString());  }
    { /* que datos y opciones y lo relaciono con el array Timestamp */ }
    const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };
  { /* que opciones dentro de la grafica */ }
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      { /* creo una linea de cierre automatico que acepta datos y opciones */ }
      <Line data={data} options={options} />
    </>
  );
};
export default LineChart;
