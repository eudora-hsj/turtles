import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import avatar from '../../assets/images/profile-avatar.jpg';
import activityAvatar from '../../assets/images/activity-avatar.svg';
import avatarTurtleLeft from '../../assets/images/profile-avatar-a-left.jpg';
import avatarTurtleRight from '../../assets/images/profile-avatar-a-right.jpg';
import bgTextInformation from '../../assets/images/bg-text-information.svg';
import bgTextLocation from '../../assets/images/bg-text-location.svg';
import bgTextActivity from '../../assets/images/bg-text-activity.svg';
import locationPin from '../../assets/images/location-pin.svg';
import locationPinWhite from '../../assets/images/location-pin-white.svg';
import locationPinBottom from '../../assets/images/location-pin-bottom.svg';
import locationPinBottomWhite from '../../assets/images/location-pin-bottom-white.svg';
import turtle1 from '../../assets/images/turtle1.png';
import turtle2 from '../../assets/images/turtle2.png';
import turtle3 from '../../assets/images/turtle3.png';
import turtle4 from '../../assets/images/turtle4.png';
import turtle5 from '../../assets/images/turtle5.png';
import turtle6 from '../../assets/images/turtle6.png';
import turtle7 from '../../assets/images/turtle7.png';
import turtle8 from '../../assets/images/turtle8.png';
import styled from 'styled-components';

const ProfilePage = styled.div`
  background-color: var(--color-primary-1);
`;

const BgText = styled.div`
  @keyframes move {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: -1270px;
    }
  }

  width: 100%;
  height: 240px;
  z-index: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-repeat: repeat-x;
  background-position-x: 0;
  background-size: contain;
  animation: 16s linear 0s infinite normal none running move;

  &.information {
    background-image: url(${bgTextInformation});
  }

  &.location {
    background-image: url(${bgTextLocation});
  }

  &.activity {
    background-image: url(${bgTextActivity});
  }
`;

const SectionInformation = styled.div`
  margin: 0 auto;
  font-size: 12px;
  background-color: var(--color-primary-1);
`;

const InformationAvatar = styled.div`
  width: 100%;
  position: relative;
  padding: 60px 0 40px;

  .avatar {
    box-sizing: border-box;
    border: 5px solid var(--color-white-1);
    border-radius: 50%;
    width: 400px;
    height: 400px;
    overflow: hidden;
    background-image: url(${avatar});
    background-size: cover;
    background-position: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
  }
`;

const InformationCard = styled.div`
  margin: 0 auto;
  width: 922px;
  padding: 40px 0 0;

  & > div.tab {
    display: inline-block;
    padding: 24px 30px;
    border-radius: 16px 16px 0 0;
    background: var(--color-gray-1);
    font-weight: bold;
    font-size: 22px;
  }

  & > div.card {
    box-sizing: border-box;
    background: var(--color-white-1);
    padding: 18px 30px 0;
    width: 922px;
    height: 737px;

    & > article {
      & > section {
        p {
          font-size: 18px;
          font-weight: 400;
          padding: 24px 5px 18px;
          border-bottom: 1px solid var(--color-primary-1);
        }
      }
    }

    & > article:nth-child(1), & > article:nth-child(3) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 24px;
    }

    & > article:nth-child(3) {
      & > section {
        padding-bottom: 40px;
        border-bottom: 1px solid var(--color-primary-1);

        p {
          &:nth-child(1) {
            border-bottom: unset;
          }
        }

        img {
          overflow: hidden;
          border-radius: 4px;
          width: 100%;
          height: 90%;
          object-fit: cover;
        }
      }
    }
  }
`;

const SwiperWrap = styled.div`
  .swiper-scrollbar {
    display: none;
  }
`;

const SectionPhoto = styled.div`
  padding: 120px 0;
  box-sizing: border-box;
  border-radius: 0 0 40px 40px;
  margin-bottom: -40px;
  position: relative;
  z-index: 2;
  background-color: var(--color-gray-1);

  .swiper-pagination {
    margin-top: 120px;

  }

  .swiper-slide-prev, .swiper-slide-next {
    transform: scale(0.9);
    opacity: 0.5;
  }

  .swiper-pagination-bullet {
    background: var(--color-swiper-doc-normal);
    width: 10px;
    height: 10px;
  }

  .swiper-pagination-bullet-active {
    width: 24px;
    border-radius: 10px;
    background: var(--color-black);
  }

  .swiper-button-next, .swiper-button-prev {
    background: var(--color-black);
    border-radius: 100%;
    width: 64px;
    height: 64px;

    &::after {
      transform: scale(0.7);
      color: #FFF;
    }
  }

  .swiper-button-next {
    right: 20%;

    &::after {
      margin-left: 4px;
    }
  }

  .swiper-button-prev {
    left: 20%;

    &::after {
      margin-right: 4px;
    }
  }

  .img-wrap {
    img {
      width: 100%;
    }
  }
`;

const SectionLocation = styled.div`
  //font-size: 12px;
  background-color: var(--color-black);
  //padding: 40px 0;
  position: relative;
  height: 880px;
  border-radius: 0 0 40px 40px;
  margin-bottom: -40px;
  z-index: 1;

  .pins {
    padding: 70px 180px;
    display: flex;
    justify-content: space-between;
  }
`;

const Pin = styled.article`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 320px;
  height: 320px;
  position: relative;

  &:nth-child(2n+1) {
    background-image: url(${locationPin});

    &::after {
      background-image: url(${locationPinBottom});
    }
  }

  &:nth-child(2n) {
    background-image: url(${locationPinWhite});
    margin-top: 360px;

    &::after {
      background-image: url(${locationPinBottomWhite});
    }
  }

  &::after {
    content: '';
    display: block;
    width: 120px;
    height: 40px;
    position: absolute;
    bottom: -70px;
    left: 50%;
    transform: translateX(-50%);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  section {
    display: block;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-weight: bold;

    p {
      &:nth-child(1) {
        font-size: 16px;
        margin-bottom: 20px;
      }

      &:nth-child(2) {
        font-size: 40px;
      }
    }
  }
`;

const SectionActivity = styled.div`
  background-color: var(--color-primary-1);
  position: relative;
  margin: auto;

  .swiper-wrapper {
  }

  .swiper-pagination {
    top: 20px;
    pointer-events: none;

  }

  .swiper-pagination-bullet {
    background: #363841;
    width: 44px;
    height: 4px;
  }

  .swiper-pagination-bullet-active {
    border-radius: 2px;
    background: var(--color-primary-1);
  }

  .swiper-button-next, .swiper-button-prev {
    background: var(--color-black);
    border-radius: 100%;
    width: 80px;
    height: 80px;

    &::after {
      transform: scale(0.8);
      color: var(--color-primary-1);
    }
  }

  .swiper-button-next {
    &::after {
      margin-left: 6px;
    }
  }

  .swiper-button-prev {
    &::after {
      margin-right: 6px;
    }
  }

  .info-wrap {
    margin: auto;
    width: 800px;
    padding-top: 60px;
    display: flex;
  }

  .img-wrap {
    width: 560px;
    height: 680px;
    box-sizing: border-box;
    padding-top: 50px;
    margin: 0 auto;
    border-radius: 40px 40px 0 0;
    position: relative;
    background-color: var(--color-black);

    article {
    }

    article:nth-child(1) {
      section {
        margin-bottom: 60px;
        margin-left: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }

      p {
        font-size: 16px;
        display: block;
        width: 100%;
        text-align: left;
        color: #50535E;
      }
    }

    article:nth-child(2) {
      font-size: 28px;
      font-weight: bold;

      section:nth-child(1) {
        text-align: center;
        margin-bottom: 40px;
        color: var(--color-white-2);
      }

      section:nth-child(2) {
        text-align: center;
        padding: 0 40px;

        p {
          width: fit-content;
          padding: 18px 16px;
          margin: auto auto 10px;
          line-height: 40px;
          color: var(--color-black);
          background-color: var(--color-white-2);
        }
      }
    }

    article:nth-child(3) {
      position: absolute;
      border-bottom: 10px;
      left: 50%;
      bottom: 80px;
      transform: translateX(-50%);
      //margin-top: 90px;
      text-align: center;

      button {
        border-radius: 40px;
        padding: 13px 22px;
        font-weight: bold;
        margin-top: auto;
        background-color: var(--color-primary-1);
        color: var(--color-black);
        font-size: 18px;
      }
    }

    article {
    }

  }
`;

export default function Profile() {
    const photos = [turtle1, turtle2, turtle3, turtle4, turtle5, turtle6, turtle7, turtle8]
    const activities = [
        {date: '2018/05/14', text: '最新目擊！', location: '花瓶岩到美人洞'},
        {date: '2018/05/11', text: '目擊！', location: '花瓶岩'},
        {date: '2018/05/04', text: '最新目擊最新目擊最新目擊最新目擊最新目擊！', location: '花美人'},
        {date: '2018/05/01', text: '最新目擊最新目擊擊！', location: '美人洞'},
        {date: '2018/04/14', text: '最新目擊！', location: '花美人'}
    ]


    return (<ProfilePage>
        <SectionInformation>
            <InformationAvatar>
                <div className="avatar"></div>
                <BgText className="information"></BgText>
            </InformationAvatar>
            <InformationCard>
                <div className="tab">
                    <h2>淡定哥 #TW01H0064</h2>
                </div>
                <div className="card">
                    <article>
                        <section>
                            <p>名字：淡定哥</p>
                            <p>體型：成年龜</p>
                            <p>右臉鰭片：眼下四片</p>
                            <p>命名者：Chun-Ting Jeffery Liu</p>
                        </section>
                        <section>
                            <p>品種：綠蠵龜</p>
                            <p>背甲花紋：迷彩</p>
                            <p>左臉鰭片：眼下三片</p>
                            <p>回報者：陳坤田</p>
                        </section>
                    </article>
                    <article>
                        <section>
                            <p>外型特徵：背甲中間受傷，2017/03/24記錄到時已經有受傷了，目前看起來還沒好。</p>
                        </section>
                    </article>
                    <article>
                        <section>
                            <p>右臉：</p>
                            <img src={avatarTurtleRight} alt="右臉圖片"/>
                        </section>
                        <section>
                            <p>左臉：</p>
                            <img src={avatarTurtleLeft} alt="左臉圖片"/>
                        </section>
                    </article>
                </div>
            </InformationCard>
        </SectionInformation>
        <SectionPhoto>
            <SwiperWrap className="photo">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={120}
                    slidesPerView={2}
                    centeredSlides={true}
                    navigation
                    pagination={{clickable: true}}
                    scrollbar={{draggable: true}}
                    loop={true}
                >
                    {photos.map((photo, index) => (<SwiperSlide key={index}>
                        <div className="img-wrap">
                            <img src={photo} alt={`photo-${index}`}/>
                        </div>
                    </SwiperSlide>))}
                </Swiper>
            </SwiperWrap>
        </SectionPhoto>
        <SectionLocation>
            <BgText className="location"></BgText>
            <div className="pins">
                <Pin>
                    <section>
                        <p>最愛潛點</p>
                        <p>花瓶岩</p>
                    </section>
                </Pin>
                <Pin>
                    <section>
                        <p>最愛潛點</p>
                        <p>美人洞</p>
                    </section>
                </Pin>
            </div>
        </SectionLocation>
        <SectionActivity>
            <SwiperWrap className="activity">
                <BgText className="activity"></BgText>
                <div className="info-wrap">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}
                        slidesPerView={1}
                        centeredSlides={true}
                        navigation
                        pagination={{clickable: true}}
                        scrollbar={{draggable: true}}
                        loop={true}
                    >
                        {activities.map((activity, index) => (<SwiperSlide key={index}>
                            <div className="img-wrap">
                                <article>
                                    <section>
                                        <img src={activityAvatar} alt="active"/>
                                        <p>目擊動態</p>
                                    </section>
                                </article>
                                <article>
                                    <section>
                                        <p className="date">{activity.date}</p>
                                    </section>
                                    <section>
                                        <p>{activity.text}</p>
                                        <p>{activity.location}</p>
                                    </section>
                                </article>
                                <article>
                                    <button>VIEW POST</button>
                                </article>
                            </div>
                        </SwiperSlide>))}
                    </Swiper>
                </div>
            </SwiperWrap>
        </SectionActivity>
    </ProfilePage>)
}
