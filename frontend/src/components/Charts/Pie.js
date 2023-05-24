import { Chart } from "react-google-charts";
import React from "react";

export const data = [
  ["Tipo de imóvel", "Quantidade"],
  ["Kitnet", 30],
  ["Apartamento", 33],
  ["Casa", 33],
  ["Sobrado", 33],
];

export const options = {
  title: "Tipos de imóveis alugados",
  pieHole: 0.4,
  is3D: false,
};

export function Pie() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
      className="chartPie"
    />
  );
}
