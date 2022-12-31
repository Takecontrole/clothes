import styled from "styled-components";
import { mobile } from "../responsive";
import "./font.css"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Image = styled.img`
  height: 100%;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Title = styled.div`
color: #fcf5f5;
font-size: 11px;
position: absolute;
text-align: center;


`;
const Desc = styled.div`
margin: 10px;
`;
const Astro = () => {
  return (
    <Container>
     <ImgContainer>
              <Image src="https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=718&q=80" />
              <Image src="https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=718&q=80" />
            </ImgContainer>
            <Title>
            
            <Desc className="container">
            Привет, мы ASTRO STORE. Мы любим нашу планету. Мы также любим выглядеть хорошо и не понимаем почему кому-то приходится выбирать что-то одно.
           </Desc>
           <Desc className="container">
           Вот почему мы используем только биоразлагающиеся и перерабатываемые материалы, чтобы сделать высококачественную и стильную одежду. Для вас и вашей планеты!
           </Desc>
          
            <Desc className="container">
            1% процент от суммы покупки идёт в фонд поддержки экосистемы и спасения вымирающих видов.
            </Desc>
           
</Title>
    </Container>
    );
};
    export default Astro;