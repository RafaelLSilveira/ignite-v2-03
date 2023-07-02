import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  display: "flex";
  flex-direction:"column";
  margin-top: 72px;
  width: 864px; 
  align-items: center;
  gap: 8;

  input {
    width: 100%;
    padding: 12px 16px; 
    border-radius: 6px;
    margin-top: 8px;
    border: 1px solid var(--base-border, #1C2F41);
    background: var(--base-input, #040F1A); 

    color: #3A536B;
    font-size: 16px;
    font-style: normal;
    font-weight: 400; 
  }
`;

export const SearchHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  p {
    color: #C4D4E3;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
  }

  span {
    color: #7B96B2;
    text-align: right;
    font-size: 14px;
    font-style: normal;
    font-weight: 400; 
  }
`;

export const ListPostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 864px; 
  gap: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: auto;
  height: 260px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #112131; 
  padding: 32px;
  font-style: normal;
  cursor: pointer;
`;

export const PostTitle = styled.p`
  color: #E7EDF4;
  font-size: 20px;
  font-weight: 700;
`;

export const PostDescription = styled.p`
  color: #AFC2D4;
  font-size: 16px;
  font-weight: 400;
`;

export const PostDate = styled.p`
  width: 70%;
  color: #7B96B2;
  font-size: 14px;
  font-weight: 400;
  text-align: end;
`;