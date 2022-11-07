import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Status.module.css';
import Loading from './Loading';
import Card from "react-bootstrap/Card";

function Status() {
  const [mcount, setMCount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setMCount(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'http://220.118.36.168:9100/api/lottenc/kakao/count', {withCredentials: true}
        );

        setMCount(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        //console.log(e);
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div><Loading/></div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!mcount) return null;
  return (
    <tr>
        <td>
            <div className={styles.CardDiv}>
                <Card style={{ width: "8rem" }}>
                    <Card.Body className={styles.Incomplete}>
                        <Card.Text className={styles.CardText}>
                            <div className={styles.NormalText}>미처리</div>
                            <div className={styles.NumberText}>{mcount.incompleteCount}</div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </td>
        <td>
            <div className={styles.CardDiv2}>
                <Card style={{ width: "8rem" }}>
                    <Card.Body>
                        <Card.Text className={styles.CardText}>
                            <div className={styles.NormalText}>처리</div>
                            <div className={styles.NumberText}>{mcount.completeCount}</div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </td>
    </tr>
  );
}

export default Status;