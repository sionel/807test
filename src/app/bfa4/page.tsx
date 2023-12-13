import React from "react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>A 분반 기말고사 문제</h1>
      <div className={styles.task}>
        <h2>다음 요구사항을 보고 기능을 구현하라</h2>
        <ol>
          <li>
            두 버튼을 만들어 각 타입의 점수를 가져오는 get api(1)를 참고하여
            구현하라.
            <br />
            api사용시 반환되는 문구를 받아 표현하여야 한다.
            <br />
            점수의 type은 두가지로 국어, 영어가 있으며 해당 타입의 파라미터는
            kor, eng 로 나타낸다.
            <br />
            표현되는 값들은 모두 순차적으로 쌓여 표시되어야 한다.
          </li>
          <li>
            두 버튼과 두 입력창을 만들어 각 타입의 점수를 등록하는 post api(2)를
            참고하여 구현하라.
            <br />
            api사용시 반환되는 문구를 받아 표현하여야 한다.
            <br />
            점수의 type은 두가지로 국어, 영어가 있으며 Request Body안에 type으로
            받을 데이터를 요청하라
            <br />
            표현되는 값들은 모두 순차적으로 쌓여 표시되어야 한다.
          </li>
          <li>소캣 주소(3)를 참고하여 소켓 서버에 연결하여라</li>
          <li>
            누군가 post api를 사용할 시 발생되는 소켓 수신 이벤트(4)를 참고하여
            통신하라.
            <br />
            나타내는 표현은 다음과 같다
            <br />
            <strong>
              {"'{userName}님이 {type}점수를 {score}점으로 변경하였습니다.'"}
            </strong>
          </li>
          <li>
            일정 시간마다 소캣 수신 이벤트(5)를 참고하여 수신 받는 속담을 로컬
            스토리지에 저장하라
            <br />
            무작위의 속담이 수신되지만 마지막에 수신된 하나의 문장만 보관하면
            되고
            <br />
            어떤 식으로 저장하든 상관 없이 로컬 스토리지에 저장되는 모습만
            보이면 된다.
          </li>
        </ol>
      </div>
      <div className={styles.task}>
        <h2>API 및 통신 명세서</h2>
        <ol>
          <h4>
            <li>GET API 명세서</li>
          </h4>

          <strong>
            {`get api 주소 : http://113.198.233.57:3000/api/bfa4/record?type="kor" || "eng"`}
          </strong>
          <br />
          <br />
          <table>
            <thead>
              <tr className={styles.flexContainer}>
                <th>설명</th>
                <th>response.body</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.flexContainer}>
                <td>점수 정보 요청</td>
                <td>{"{'XX점수는 XX점 입니다.'}"}</td>
              </tr>
            </tbody>
          </table>
          <br />
          <h4>
            <li>POST API 명세서</li>
          </h4>
          <strong>
            post api 주소 : http://113.198.233.57:3000/api/bfa4/record
          </strong>
          <br />
          <br />
          <table>
            <thead>
              <tr className={styles.flexContainer}>
                <th>설명</th>
                <th>request.body 타입</th>
                <th>response.body</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.flexContainer}>
                <td>
                  {
                    "점수 정보 등록 및 수정 (단 등록되는 점수는 100을 나눈 나머지가 등록이 된다.)"
                  }
                </td>
                <td>
                  {`{userName : string, score: number , type : 'kor' || 'eng'}`}
                </td>
                <td>{"XX점수를 XX점으로 설정하였습니다."}</td>
              </tr>
            </tbody>
          </table>
          <h4>
            <li>소켓 명세서</li>
          </h4>
          <strong>소캣 주소 : http://113.198.233.57:3000/bfa4</strong>

          <br />
          <br />
          <strong>수신 이벤트</strong>
          <table>
            <thead>
              <tr className={styles.flexContainer}>
                <th>이벤트 이름</th>
                <th>설명</th>
                <th>데이터 형식</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.flexContainer}>
                <td>
                  <strong>(4)</strong>changeScore
                </td>
                <td>점수 post 발생 시 받는 정보</td>
                <td>{"{userName, score, type }"}</td>
              </tr>
              <tr className={styles.flexContainer}>
                <td>
                  <strong>(5)</strong>proverb
                </td>
                <td>일정 시간마다 속담을 송신</td>
                <td>{"{proverb}"}</td>
              </tr>
            </tbody>
          </table>
        </ol>
      </div>
    </main>
  );
}
