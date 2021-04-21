import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* background-color: white; */
`;

export const DashboardCard = styled.button`
  color: #636569;
  align-items: center;
  border-radius: 20px;
  border: 0px;
  /* background-color: #0099ff; */
  background-color: white;
  display: flex;
  height: 200px !important;
  text-align: center;
  margin-top: 30px;
  width: 340px;
  * {
    width: 100%;
  }
  img {
    width: 80px;
  }
`;

export const DashboardButton = styled.button`
  width: 20rem;
  height: 3rem;
  border-radius: 10px;
  border: 1px solid;
  background-color: white;
  color: #009bdb;
  font-size: 20px;
  margin-right: 3px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
    cursor: pointer;
    color: white;
    background-color: #009bdb;
  }
`;
