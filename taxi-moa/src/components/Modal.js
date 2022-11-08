import React from "react";
import styles from "./Modal.module.css";
import { useState } from "react";
import Map from "./Map";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, user } = props;

  console.log(user);

  const [setReason] = useState(null);

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
                  {user.departure_point}
                </div>
              </div>
              <div className={styles.detailInfo_title}>
                목적지 :
                <div className={styles.detailInfo_value}>
                  {user.arrival_point}
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
              <Map user={user} />
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
