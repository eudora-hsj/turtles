import styled from 'styled-components';
import LayoutHeader from '../../components/Layout/Header';
import LayoutFooter from '../../components/Layout/Footer';
import Profile from '../../components/Profile/Profile';
import '../../style/App.css';

const AppContainer = styled.div`
  background-color: var(--color-primary-1);
  max-width: 100vw;
`;


function App() {
    return (
        <AppContainer>
            <LayoutHeader/>
            <Profile/>
            <LayoutFooter/>
        </AppContainer>
    );
}

export default App;
