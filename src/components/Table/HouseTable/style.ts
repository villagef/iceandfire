import styled from "styled-components";

export const HouseTableWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  box-shadow: 5px 5px 14px 0px rgba(101, 102, 115, 1);
  border-radius: 10px;
`;

export const HouseTableRow = styled.div`
  width: 80%;
  padding: 10px;
  border-bottom: 1px solid #c9c9c9;
  text-align: left;
`;

export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: gray;
  display: inline-block;
  padding-right: 5px;
  margin: 0;
`;
