import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import 'react-clock/dist/Clock.css';
import styled from "styled-components"


const Wrapper = styled.div`
  float: right;
  padding-right: 2rem;
  @media screen and (max-width: 750px){
    display: none;
  }
`

function ClockComp() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Wrapper>
      <Clock value={value}/>
    </Wrapper>
  );
};

export default ClockComp;
