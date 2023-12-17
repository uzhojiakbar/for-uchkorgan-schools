import styled from "styled-components";

const media = {
  mobile: "(max-width: 500px)",
  tablet: "(max-width: 740px)",
  MinLaptop: "(max-width: 890px)",
};

const NavbarDesign = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: var(--navbar-background-color);
  color: white;
  width: 100vw;
`;
const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  color: var(--title-color);

  cursor: pointer;

  @media ${media.MinLaptop} {
    font-size: 25px;
  }
  @media ${media.tablet} {
    font-size: 20px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;

  gap: 25px;
  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;

    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 0;
      height: 4px;
      background-color: white;
      transition: 0.5s;
    }

    &:hover::after {
      width: 100%;
    }
  }
  .option {
    display: none;
  }

  @media ${media.MinLaptop} {
    a {
      font-size: 13px;
    }
  }

  @media ${media.tablet} {
    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100%;

    padding: 10px;

    display: flex;
    flex-direction: column;
    gap: 2px;

    display: ${({ bar }) => (bar ? "flex" : "none")};
    background-color: var(--navbar-background-color);
    .option {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
      width: 100%;
      padding: 10px 15px;
      .title {
      }
      .close {
        display: flex;
        font-size: 20px;
      }
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;

      border-bottom: 1px solid rgba(255, 255, 255, 0.7);
      width: 100%;
      height: 80px;
      overflow: auto;
      text-align: center;
      padding: 15px 0;

      &::after {
        width: 0 !important;
      }
    }
  }
`;

const Options = styled.div`
  .box {
    width: 50px;
    height: 50px;
    border: 1px solid white;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;

    &:hover {
      font-weight: 900;
      background-color: var(--title-color);
    }
  }

  .fa-bars {
    display: none;
  }

  @media ${media.tablet} {
    .fa-bars {
      display: flex;
    }
  }
`;

export { NavbarDesign, Title, Links, Options };
