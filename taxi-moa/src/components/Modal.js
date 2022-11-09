import React, { useEffect } from "react";
import styles from "./Modal.module.css";
import { useState } from "react";
import Map from "./Map";
import axios from "axios";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, user } = props;

  console.log(user);

  // 
  const [location, setLocation] = useState({
    departure: '',
    arrival: ''
  });

  const { departure, arrival } = location;

  const changeLocation = (e) => {
    const { value, name } = e; // 우선 e.target 에서 name 과 value 를 추출
    setLocation({
      ['departure']: e.departure,
      ['arrival']: e.arrival // name 키를 가진 값을 value 로 설정

    });

  }

  const [reason, setReason] = useState(null);

  useEffect(() => {
    const fetchSave = async () => {
      try {
        const response = await axios.post(
          'http://220.118.36.168:9100/api/lottenc/kakao/save', 
            {...user, 
              ['reason']: reason}, { withCredentials: true }
        );

        console.log(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        console.log(e);
      }
    };

    fetchSave();
  }, [reason]);

  const saveReason = (e) => {
    setReason(e.target.value);
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? styles.openModal : styles.modal}>
      {open ? (
        <section className={styles.section}>
          <header className={styles.header}>
            {header}
            <button className={styles.buttonClose} onClick={close}>
              &times;
            </button>
          </header>
          <main className={styles.main}>
            <div className={styles.detailInfo}>
              <div className={styles.detailInfo_title}>
                이름(사번) :
                <div className={styles.detailInfo_value}>
                  {user.member_identifier}
                </div>
              </div>
              <div className={styles.detailInfo_title}>
                출발지 :
                <div className={styles.detailInfo_value}>
                  ({location.departure}) {user.departure_point}
                </div>
              </div>
              <div className={styles.detailInfo_title}>
                목적지 :
                <div className={styles.detailInfo_value}>
                  ({location.arrival}) {user.arrival_point}
                </div>
              </div>
              <div className={styles.detailInfo_title}>
                금액 :
                <div className={styles.detailInfo_value}>
                  {user.service_fare} 원
                </div>
              </div>
              <div className={styles.detailInfo_title}>
                출발시간 :
                <div className={styles.detailInfo_value}>
                  {user.departure_time}
                </div>
              </div>
              <div className={styles.detailInfo_title}>
                도착시간 :
                <div className={styles.detailInfo_value}>
                  {user.arrival_time}
                </div>
              </div>
              <div className={styles.detailInfo_title}>
                이용 목적 :
                <input
                  className={styles.detailInfo_value}
                  type="text"
                  name="reason"
                  defaultValue={user.reason}
                  onChange={(e) => {
                    setReason(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <Map user={user} changeLocation={changeLocation} />
            </div>
          </main>
          <footer className={styles.footer}>
            <button className={styles.footerButton} onClick={close}>
              Save
            </button>
            <button className={styles.footerButton} onClick={close}>
              Close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
