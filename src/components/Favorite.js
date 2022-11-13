import styled from "styled-components";

export const StyledFavorites = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }
  section {
    width: 100%;
    padding: 16px;
    div {
      display: flex;
      grid-auto-flow: column;
      grid-gap: 20px;
      a {
        align-items: center;
        flex-direction: column;
        display: flex;
        span {
            padding-top: 8px;
            display: flex;
            padding-right: px;
            color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;