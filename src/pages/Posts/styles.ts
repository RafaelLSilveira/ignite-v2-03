import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .postMarkdown {
    width: 864px;
    padding: 40px 32px;
    flex-direction: column;
    align-items: center;
    gap: 24px; 

    color: #AFC2D4;
    font-size: 16px;
    font-style: normal;
    font-weight: 700; 

    img {
      width: 864px;
      border-radius: 9px;
    }
  }
`;