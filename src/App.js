import React,{useMemo}  from "react";
import styled from "styled-components";
import bg from './img/bg.png'
import {MainLayout} from './styles/LayoutStyle'
import Orb from './components/Orb/orb'
import Navigation from './components/Navigation/Navigation'
import Incomes from "./components/Incomes/Incomes";
import Expenses from './components/Expenses/Expenses';
import { useGlobalContext } from "./context/GlobalContext";
import Dashboard from "./components/Dashboard/Dashboard";


function App() {
  const global = useGlobalContext()
  console.log(global)
  const [active, setActive] = React.useState(1);
  const orbMemo = useMemo(() => {
    return <Orb />
  },[])
 
  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Incomes />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }
  return (
    <AppStyled bg = {bg} className="App">
      {orbMemo}
      <MainLayout>
      <Navigation active={active} setActive={setActive} />
      <main>
        {displayData()}
      </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div `
height: 100vh;
background-image: url(${props => props.bg});
position: relative;
main{
  flex: 1;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 30px;
  overflow-x: hidden;
  &::-webkit-scrollbar{
    width: 0;
  }
}
`

export default App;
