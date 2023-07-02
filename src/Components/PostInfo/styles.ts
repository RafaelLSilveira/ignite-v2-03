import styled from "styled-components";

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    color: #7B96B2;
    font-size: 16px;
    font-style: normal;
    font-weight: 400; 
  }
  
  p {
    color: #E7EDF4;
    font-size: 24px;
    font-style: normal;
    font-weight: 700; 
  }
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  a {
    text-decoration: unset;
    color: rgba(50, 148, 248, 1);
  }
`;

export const PostFooter = styled.div`
  display: flex;
  gap: 8px;

  svg:nth-child(n + 2) {
    margin-left: 16px;
  }
`;