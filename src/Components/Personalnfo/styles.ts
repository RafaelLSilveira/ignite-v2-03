import { HTMLAttributes } from "react";
import styled from "styled-components";

export const PersonalInfoContainer = styled.div`
  display: flex;
  padding: 40px 32px;
  gap: 32px;
  margin-top: -5%;
  width: 864px;
  height: 212px;
  flex-shrink: 0; 
  border-radius: 10px;
  background: #0B1B2B;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  span {
    color: #C4D4E3;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
`;

interface IAvatarContainer extends HTMLAttributes<HTMLDivElement> {
  url: string;
}

export const AvatarContainer = styled.div<IAvatarContainer>`
  width: 148px;
  height: 148px;
  flex-shrink: 0; 
  border-radius: 8px;
  background: ${(props) => `url(${props.url})` };
  background-repeat: round;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #E7EDF4;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
  }

  a {
    text-decoration: unset;
    color: rgba(50, 148, 248, 1);
  }
`;

export const TextBio = styled.p`
  color: #AFC2D4;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin: 8px 0;
`;