import React from "react";
import * as C from "./styles";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

type RechartCardProps = {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
};

export const RechartCard = ({ data }: RechartCardProps) => {
  return (
    <C.Container>
      <C.AsideLeft>
        <C.LegendContainer>
          <C.Title>Relação</C.Title>
          {data.map((item, index) => (
            <C.Legend key={index}>
              <C.Percent color={item.color}>{item.percent}%</C.Percent>
              <C.Indicator>{item.name}</C.Indicator>
            </C.Legend>
          ))}
        </C.LegendContainer>
      </C.AsideLeft>

      <C.AsideRight>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              labelLine={false}
              dataKey="percent"
            >
              {data.map((value, index) => (
                <Cell key={index} fill={value.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </C.AsideRight>
    </C.Container>
  );
};
