import { useState } from "react";

import styled from "styled-components";

import Spinner from './loading-load.gif';

const Container = styled.div`
  padding : 170px 670px;
  // display : flex;
  align-items : center
`;

const Button = styled.button`
  background-color : #5cb85c;
  width : 150px;
  padding : 5px 5px;
  border-radius : 12px;
  color : white;
  cursor : pointer;
`;

const SpinnerGif = styled.img`
  max-width : 25px;
`;

const App = () => {

  const [isLoading, setIsLoading] = useState(false);

  //const checkIsClicked () {}

  return (
    <Container>
      <h3>Disabling the button and adding a loader on being clicked</h3>
      <Button onClick={()=> {
         setIsLoading(true);

        //  **we use a fake timer that assumes data has been fetched
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
      }//**end of arrow fn
      disabled={isLoading} //** for disabling the button when clicked */
      >
        {
          //!!! : means else
          isLoading ? <SpinnerGif src={Spinner} alt='spinner' /> : 'Load Data'
        }
      </Button>
    </Container>
  ); 
}

export default App;
