import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "Tipo de imóvel",
    "Quantidade",
    { role: "style" },
    {
      sourceColumn: 0,
      role: "annotation",
      type: "string",
      calc: "stringify",
    },
  ],
  ["Ocupado", 130, "#ff9e0c", null],
  ["Desocupado", 121, "#ff9e0c", null],
  ["Reforma", 99, "#ff9e0c", null],
];

export const options = {
  title: "Contagem dos Status dos Imóveis",
  width: 600,
  height: 400,
  bar: { groupWidth: "95%" },
  legend: { position: "none" },
};

export function Bar() {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
      className="chartBar"
    />
  );
}
