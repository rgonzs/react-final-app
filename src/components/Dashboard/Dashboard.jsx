import React from "react";
import {
  DashboardButton,
  DashboardCard,
  CardContainer,
} from "./Dashboard.elements";
import buscar from "../../assets/images/buscar.svg";
import report from "../../assets/images/report.svg";
import shield from "../../assets/images/shield.svg";

const Dashboard = () => {
  return (
    <main>
      <CardContainer id='card-container'>
        <DashboardCard className='card'>
          <div className='card-text'>
            <img src={buscar} alt='Search logo' />
            <h3>Busqueda de Comprobantes</h3>
          </div>
          <DashboardButton>Continuar →</DashboardButton>
        </DashboardCard>
        <DashboardCard className='card card-central'>
          <div className='card-text'>
            <img src={shield} alt='Users' />
            <h3>Gestion de Usuarios</h3>
          </div>
          <DashboardButton>Continuar →</DashboardButton>
        </DashboardCard>
        <DashboardCard className='card'>
          <div className='card-text'>
            <img src={report} alt='Reports logo' />
            <h3>Reportes</h3>
          </div>
          <DashboardButton>Continuar →</DashboardButton>
        </DashboardCard>
      </CardContainer>
    </main>
  );
};

export default Dashboard;
