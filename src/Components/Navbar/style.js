import styled from "styled-components";

// const media = {
//   Tablet: "",
// };

const NavbarDesign = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: rgba(28, 43, 75, 1);
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
`;

const Links = styled.div`
  display: flex;
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
`;

export { NavbarDesign, Title, Links, Options };
