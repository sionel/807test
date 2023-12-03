import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>기말 고사 대비 연습문제</h1>
      <h3></h3>
      <a href="/sample.zip">다운로드</a>
      <div className={styles.task}>
        <Link href={"/static"}>
          <h3>{"1. 계산기 구현 << 클릭 "}</h3>
        </Link>
        <strong>2항 사칙연산이 가능한 계산기를 구현하라</strong>

        <strong>0~100 까지의 자연수 계산이 가능하여야 함</strong>
      </div>
      <div className={styles.task}>
        <Link href={"/apitest"}>
          <h3>{"2. api 적용 구현 << 클릭 "}</h3>
        </Link>
        <strong>소캣 서버를 연결하여 채팅을 구현하라</strong>
        <hr />
        <h3>API 명세서</h3>
        <ol>
          <div className="endpoint">
            <h4>1. POST 테스트</h4>
            <strong>POST : </strong>
            <code>http://113.198.233.57:3000/api/test/record</code>
          </div>

          <div className="description">
            <h4>Description</h4>
            <p>
              학생의 학번과 점수를 서버로 전송하고, 서버로부터 반환되는 메시지를
              출력합니다.
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
            <pre>{`{  name: string ,  korScore: number}`}</pre>
          </div>
          <hr />
          <div className="endpoint">
            <h4>2. GET 테스트</h4>
            <strong>GET : </strong>
            <code>GET http://113.198.233.57:3000/api/test/record?type=kor</code>
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
        </ol>
      </div>
      <div className={styles.task}>
        <Link href={"/chat"}>
          <h3>{"3. 채팅 구현 << 클릭 "}</h3>
        </Link>
        <strong>소캣 서버를 연결하여 채팅을 구현하라</strong>
        <hr />
        <h3>조건</h3>
        <ol>
          <li>
            <h4>다음 주소와 소캣 통신을 적용</h4>
          </li>
          <li>
            <h4>socket 주소</h4>
            <p>http://113.198.233.57:3000/chat</p>
          </li>
          <li>
            <h4>이벤트의 이름들은 다음과 같다</h4>

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
          </li>
        </ol>
      </div>
    </main>
  );
}
