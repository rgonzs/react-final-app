import React from "react";

import { useGet } from "../../hooks/useFetch/useFetch";
// import {
//   LineChart,
//   // Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";
import { Line } from "react-chartjs-2";

const DashboardChart = () => {
  const { data, isLoading, error } = useGet("http://10.0.5.128:8001/events2");
  const labels = data?.name;
  const chartConfig = {
    labels: labels,
    datasets: [
      {
        label: "Usuarios Agregados",
        data: data?.value,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      {isLoading && <p> Cargando ....</p>}
      {error && (
        <p>
          No se pudo establecer una conexion correcta,
          <br /> intente de nuevo mas tarde
        </p>
      )}
      {data && (
        <Line
          data={chartConfig}
          // width={'100px'}
          // height={'50px'}
          options={{
            maintainAspectRatio: false,
            indexAxis: "x",
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      )}
    </>
  );
};

export default DashboardChart;
