import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { ContentHeader } from "../../components/ContentHeader";
import { Select } from "../../components/Select";
import * as C from "./styles";
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import { WalletCard } from "../../components/WalletCard";
import { StatusWalletCard } from "../../components/StatusWalletCard";
import happy from '../../assets/happy.svg';

export const Dashboard = () => {
  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth())
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );

  const monthsMemo = useMemo(() => {
    let uniqueMonths: string[] = [];

    [...expenses, ...gains].forEach((item) => {
      const date = new Date(item.date);
      const month = date.getMonth();

      if (!uniqueMonths.includes(String(month))) {
        uniqueMonths.push(String(month));
      }
    });

    return uniqueMonths.map((item) => {
      let months = [
        "Jan",
        "Fev",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dec",
      ];
      return {
        value: item,
        label: months[parseInt(item)],
      };
    });
  }, [[...expenses, ...gains]]);

  const yearsMemo = useMemo(() => {
    let uniqueYears: string[] = [];
    [...expenses, ...gains].forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(String(year))) {
        uniqueYears.push(String(year));
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, [[...expenses, ...gains]]);

  const totalExpensesMemo = useMemo(() => {
      let total: number = 0;
      expenses.forEach( item => {
        const date = new Date(item.date);
        const year = date.getFullYear();
        const month = date.getMonth();

        if(String(month) === monthSelected && String(year) === yearSelected){
          try {
            total += Number(item.amount);
          } catch (error) {
            console.log(error);
          }
        }

      });

      return total;
  }, [...expenses, monthSelected, yearSelected]);

  const totalGainsMemo = useMemo(() => {
    let total: number = 0;
    gains.forEach( item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth();

      if(String(month) === monthSelected && String(year) === yearSelected){
        try {
          total += Number(item.amount);
        } catch (error) {
          console.log(error);
        }
      }

    });

    return total;
}, [...gains, monthSelected, yearSelected]);

const totalSaldoMemo = useMemo(() => {
      let total: number = 0;
      return total = (totalGainsMemo - totalExpensesMemo)
  }, [...gains, ...expenses, monthSelected, yearSelected]);

  const message = useMemo(() => {
      if(totalSaldoMemo > 0) {
        return `Seu saldo fechou POSITIVO esse mes, parabéns!`;
      } else {
        return `Seu saldo fechou NEGATIVO esse mes, voçê precisa economizar mais!`;
      }
  }, [totalSaldoMemo]);



  console.log(totalExpensesMemo);

  return (
    <C.Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
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

     <C.Content>
        <WalletCard title="Saldo" amount={totalSaldoMemo} subtitle="Wallet Card" color="#4E41F0" icon="dollar"  />
        <WalletCard title="Entradas" amount={totalGainsMemo} subtitle="Wallet Card" color="#03BB85" icon="up"  />
        <WalletCard title="Saídas" amount={totalExpensesMemo} subtitle="Wallet Card" color="#E44C4E" icon="down"  />

        <StatusWalletCard icon={happy} title="Bem vindo!" description="Aqui tem tudo que voçê precisa saber sobre sua carteira digital" message={message} />
     </C.Content>
    </C.Container>
  );
};
