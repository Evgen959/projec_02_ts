import styled from "@emotion/styled";
import WeatherBackground from "assets/weather_app_back.jpeg";

export const WeatherPage = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-repeat: no-repeat;
  background-image: url(${WeatherBackground});
  background-size: cover;
`;
export const WeatherTitle = styled.header`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  font-size: 16px;
`;

export const WeatherMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  height: 90%;
  width: 100%;
  gap: 40px;
`;


export const InputContainer = styled.div`
  display: flex;
  height: 30px;
  width: 600px;
  gap: 10px;
`;
