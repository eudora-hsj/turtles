import styled from 'styled-components';

import logoBrand from '../../assets/images/logo-brand.svg';
import logoTitle from '../../assets/images/logo-title.svg';


const FooterContainer = styled.footer`
  font-size: 16px;
  background-color: var(--color-primary-2);
  padding: 80px 80px 120px;
  box-sizing: border-box;
  height: 400px;

  .part-brand {
    img {
      height: 50px;
    }
  }

  .part-contact {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    section {
      font-weight: bold;

      &:first-child {
        font-size: 16px;
        flex-grow: 1;
      }

      &:nth-child(2) {
        font-size: 18px;
        line-height: 29px;
      }

      &:nth-child(3) {
        font-size: 18px;
        margin-left: 100px;

        img {
          width: 120px;
        }
      }

    }
  }
`;

export default function Footer() {
    return (
        <FooterContainer>
            <div className="part-brand">
                <img src={logoTitle} alt="logo"/>
            </div>
            <div className="part-contact">
                <section>
                    <p>© 2021 Turtle Spot Taiwan</p>
                </section>
                <section>
                    <p>contact us :</p>
                    <p>tstservice@gmail.com</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                </section>
                <section>
                    <p>sponsor :</p>
                    <img src={logoBrand} className="App-logo" alt="logo"/>
                </section>
            </div>
        </FooterContainer>
    )
}
