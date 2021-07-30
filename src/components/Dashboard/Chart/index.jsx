import React from "react";

import { useGetData } from "../../../hooks/useGetData";
import { Line } from "react-chartjs-2";
import { urlApi } from '../../../utils/endpoints';

const Chart = () => {
  const { data, isLoading, error } = useGetData(`${urlApi}/events2`);
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

export default Chart;
