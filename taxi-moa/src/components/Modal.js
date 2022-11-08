import React from 'react';
import styles from './Modal.module.css';
import Map from './Map';
const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, id } = props;

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
          <div className="Map">
            <Map />
          </div>
          <main className={styles.main}>{props.children}</main>
          <footer className={styles.footer}>
            <button className={styles.footerButton} onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
