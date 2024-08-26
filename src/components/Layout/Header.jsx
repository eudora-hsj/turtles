import styled from 'styled-components';

import logo from '../../assets/images/logo.svg';
import iconSoundOn from '../../assets/images/icon-sound-on.svg';
import iconMenu from '../../assets/images/icon-menu.svg';

const HeaderContainer = styled.header`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  position: sticky;
  top: 0;
  z-index: 5;

  div.logo {
    padding: 16px 16px 0;
  }
`;

const HeaderMenu = styled.div`
  background-color: var(--color-black);
  color: var(--color-white-2);
  display: flex;
  align-items: center;
  border-radius: 0 0 0 12px;
  overflow: hidden;
  font-weight: bold;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 22px;
    height: 100%;
    cursor: pointer;

    &:hover {
      background-color: var(--color-gray-2);
    }
  }

  section:nth-child(2) {
    border-right: 1px solid var(--color-gray-2);
    border-left: 1px solid var(--color-gray-2);
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  section button {
    font-size: 1rem;
  }

  img.icon-sound-on {
    filter: invert(100%);
    width: 24px;
    height: auto;
  }

  img.icon-menu {
    margin-right: 10px;
  }
`;
export default function Header() {
    return (<HeaderContainer>
        <div className="logo">
            <img src={logo} className="App-logo" alt="logo"/>
        </div>
        <HeaderMenu>
            <section>
                <button>EN</button>
            </section>
            <section>
                <button>
                    <img className="icon-sound-on" src={iconSoundOn} alt="sound on"/>
                </button>
            </section>
            <section>
                <button>
                    <img className="icon-menu" src={iconMenu} alt="menu"/> MENU
                </button>
            </section>
        </HeaderMenu>
    </HeaderContainer>)
}
