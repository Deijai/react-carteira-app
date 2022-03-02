import React, { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { ContentHeader } from "../../components/ContentHeader";
import { Filters } from "../../components/Filters";
import { MovimentCard } from "../../components/MovimentCard";
import { Select } from "../../components/Select";
import * as C from "./styles";
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import { formatCurrency, formatDate } from "../../utils/formatFunc";

type DataProps = {
  item: {
    description: string;
    amountFormat: string;
    type: string;
    frequency: string;
    dateFormat: string;
  };
};
export const List = () => {
  const [data, setData] = useState<DataProps[]>();
  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth())
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );
  const [frequency, setFrequency] = useState<string[]>(['recorrente', 'eventual']);

  const { type } = useParams();

  const title = useMemo(() => {
    return type === "entry-balance" ? "Entradas" : "Saídas";
  }, [type]);

  const lineColor = useMemo(() => {
    return type === "entry-balance" ? "#03BB85" : "#E44C4E";
  }, [type]);

  //carregar a lista
  const listData = useMemo(() => {
    return type === "entry-balance" ? gains : expenses;
  }, [type]);

  const monthsMemo = useMemo(() => {
    let uniqueMonths: string[] = [];

    listData.forEach( item => {
      const date = new Date(item.date);
      const month = date.getMonth();

      if(!uniqueMonths.includes(String(month))){
        uniqueMonths.push(String(month));
      }

    });

    return uniqueMonths.map( (item) => {
      let months = ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'];
      return {
        value: item,
        label: months[parseInt(item)]
      }
    });
    
  }, [listData]);

  const yearsMemo = useMemo(() => {

    let uniqueYears: string[] = [];
    listData.forEach( item => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if(!uniqueYears.includes(String(year))){
          uniqueYears.push(String(year));
      }    

    });

    return uniqueYears.map( (year) => {      
      console.log(year);
        return {
          value: year,
          label: year
        }
    });

  }, [listData]);

  console.log(yearsMemo);

  const handleFilterFrequency = (type: string) => {
     const alreadyFrequency = frequency.findIndex( item => item === (type.toLowerCase()) );

     if(alreadyFrequency >= 0){
       const filter = frequency.filter( item => item === type.toLowerCase());
       console.log(filter);
       setFrequency(filter);
     } else {
      setFrequency(['recorrente', 'eventual']);
     }
  }

  useEffect(() => {
    const filteredDate = listData.filter((item) => {
      const date = new Date(item.date);
      let dayAtual = date.getDate();
      let monthAtual = date.getMonth();
      let yearAtual = date.getFullYear();

      return (
        String(monthAtual) === monthSelected &&
        String(yearAtual) === yearSelected && frequency.includes(item.frequency)
      );
    });

    const dataFormatter = filteredDate.map((item) => {
      return {
        item: {
          description: item.description,
          amountFormat: formatCurrency(parseFloat(item.amount)),
          type: item.type,
          frequency: item.frequency,
          dateFormat: formatDate(item.date),
        },
      };
    });

    setData(dataFormatter);
  }, [listData, monthSelected, yearSelected, frequency]);


  console.log("Frequency:", frequency);

  return (
    <C.Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <Select
          onChange={(e) => setMonthSelected(e.target.value)}
          options={monthsMemo}
          defaultValue={monthSelected}
        />
        <Select
          onChange={(e) => setYearSelected(e.target.value)}
          options={yearsMemo}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Filters frequency={String(frequency)} handleFilterFrequency={handleFilterFrequency} />

      <C.Content>
        {data?.map((i, index) => (
          <MovimentCard
            key={index}
            color={i.item.frequency === "recorrente" ? "#F7931B" : "#E44C4E"} 
            cardColor="#313862"
            tagColor={lineColor}
            title={i.item.description}
            subtitle={`${i.item.dateFormat} ${i.item.frequency}`}
            amount={i.item.amountFormat}
          />
        ))}
      </C.Content>
    </C.Container>
  );
};
