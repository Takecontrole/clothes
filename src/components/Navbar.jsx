import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import "./font.css"

const Container = styled.div`
  background-color: black;
  outline: none;
  color: white;
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;






const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
  
        font-size: 30px;

        @include mobile{
          font-size: 20px;
        }

        span {
          font-size: inherit;
          color: #fcf5f5;
        }

        .ityped-cursor {
          animation: blink 1s infinite;
        }

        @keyframes blink {
            50%{
                opacity: 1;
            }
            75%{
                opacity: 0,;
            }
            100%{
                opacity: 0;
            }
        }
      
`;

  
const Navbar = () => {
  
  const textRef = useRef();
  
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Astro", "Store",],
    });
  }, []);
  return (
    <Container>
      <Wrapper>
        
        <Center>
          <Logo className="logo"><span ref={textRef}></span></Logo>
        </Center>
        
      </Wrapper>
    </Container>
  );
};

export default Navbar;
