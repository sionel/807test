import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>A 분반 기말고사 문제</h1>
      <div className={styles.task}>
        <strong>다음 요구사항을 보고 기능을 구현하라</strong>
        <ul>
          <li>
            type이 국어점수와 영어점수가 구분되는 두개의 get api를 사용하여
            반환되는 값을 나타내라
          </li>
          <li>
            이름과 국어점수, 영어점수를 입력받는 input창을 만들고 이름과
            국어점수, 이름과 영어점수 를 전송하는 두개의 post api를 사용하라
          </li>
          <li>소켓 서버에 연결하여라</li>
          <li>
            post api를 사용할 시 발생되는 소캣 통신으로 누가 어떤 값을
            보내었는지 표현하라
          </li>
          <li>일정 시간마다 전송되는 숫자를 로컬 스토리지에 저장하라</li>
        </ul>
        <hr />
        <h3>API 명세서</h3>
        <ul>
          <div className="endpoint">
            <strong>POST : </strong>
            <code>http://113.198.233.57:3000/api/bfa4/record</code>
          </div>
          <div className="description">
            <h4>Description</h4>
            <p>
              본인의 이름과 점수를 서버로 전송합니다.
              <br /> score에 담아서 보낸 점수는 100을 나눈 나머지 값을 저장하게
              됩니다
              <br />
              {`잘못된 값이 post 되었을 경우 '오류' 라는 값을 보냅니다.`}
            </p>
          </div>
          <div className="request-format">
            <h4>Request Format</h4>
            <ul>
              <li>
                <strong>Method :</strong> POST
              </li>
              <li>
                <strong>Content-Type :</strong> <code>application/json</code>
              </li>
            </ul>
          </div>
          <div>
            <h4>Request Body</h4>
            <pre>{`국어 점수일 경우 : {  name: string ,  korScore: number}`}</pre>
            <pre>{`영어 점수일 경우 : {  name: string ,  engScore: number}`}</pre>
          </div>
          <hr />
          <br />
          <div className="endpoint">
            <strong>GET : </strong>
            <code>
              GET http://113.198.233.57:3000/api/bfa4/record?type=korScore
            </code>
            <br />
            <strong>GET : </strong>
            <code>
              GET http://113.198.233.57:3000/api/bfa4/record?type=engScore
            </code>
          </div>
          <div className="description">
            <h4>Description</h4>
            <p>서버로부터 반환되는 메시지를 출력합니다.</p>
          </div>
          <div className="request-format">
            <h4>Request Format</h4>
            <ul>
              <li>
                <strong>Method :</strong> GET
              </li>
            </ul>
          </div>
          <hr />
          <br />
          <div className="description">
            <strong>socket : </strong>
            <code>http://113.198.233.57:3000/chat</code>
          </div>
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
                <td>joinUser</td>
                <td>새로운 유저가 연결됨</td>
                <td>userCount : 유저 수</td>
              </tr>
              <tr className={styles.flexContainer}>
                <td>receiveMessage</td>
                <td>메시지 수신</td>
                <td>
                  userName : 유저 이름 message : 메시지 timeStamp : 전송시간
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <strong>송신 이벤트</strong>
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
                <td>sendMessage</td>
                <td>메시지 전송</td>
                <td>userName : 유저 이름 message : 메시지</td>
              </tr>
            </tbody>
          </table>
        </ul>
      </div>
    </main>
  );
}
