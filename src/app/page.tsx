import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>기말 과제</h1>
      <h3>웹 프로그래밍 기말 과제입니다.</h3>
      <h3>시험 대신 과제로 대체하고 각 항목별로 점수 부여.</h3>
      <h3>추가 알림 내용 어쩌구....</h3>
      <h3>아래 파일을 받아 코드를 작성 후 제출 하면 됩니다</h3>
      <a href="/sample.zip">다운로드</a>
      <div className={styles.task}>
        <Link href={"/static"}>
          <h3>{"1. 계산기 구현 << 클릭 "}</h3>
        </Link>
        <strong>2항 사칙연산이 가능한 계산기를 구현하라</strong>
        <p>조건</p>
        <ol>
          <li>
            <strong>0~100 까지의 자연수 계산이 가능하여야 함</strong>
          </li>
          <li>
            0으로 나누는 경우에 한해서만 예외처리를 적용할 것 그 외 시스템적
            오류는 감점 대상이 아님
          </li>
          <li>해당 문제에 한해서만 css 추가 적용시 추가 점수 부여</li>
        </ol>
      </div>
      <div className={styles.task}>
        <Link href={"/apitest"}>
          <h3>{"2. api 적용 구현 << 클릭 "}</h3>
        </Link>
        <strong>서버로부터 데이터를 송수신을 하라</strong>
        <p>조건</p>
        <ol>
          <li>
            <strong>다음 주소와 api 통신을 적용</strong>
          </li>
          <li>
            <p>GET api</p>
            <p>GET :http://113.198.233.57:3000/api/rest</p>
            <p>해당 페이지에 접근 시 받는 response 에 담긴 문구를 출력</p>
          </li>
          <li>
            <p>POST api</p>
            <p>POST :http://113.198.233.57:3000/api/rest</p>
            <p>
              본인의 이름, 학번을 담아서 전송 후 response에 담긴 문구를 출력
            </p>
          </li>
          <strong>POST api 명세</strong>
          <table>
            <thead>
              <tr className={styles.flexContainer}>
                <th>api 주소</th>
                <th>설명</th>
                <th>데이터 형식</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.flexContainer}>
                <td>POST : http://113.198.233.57:3000/api/rest </td>
                <td>학번 이름 전송 (json 형식으로)</td>
                <td>name : 이름, number : 학번</td>
              </tr>
            </tbody>
          </table>
        </ol>
      </div>
      <div className={styles.task}>
        <Link href={"/chat"}>
          <h3>{"3. 채팅 구현 << 클릭 "}</h3>
        </Link>
        <strong>소캣 서버를 연결하여 채팅을 구현하라</strong>
        <p>조건</p>
        <ol>
          <li>
            <strong>다음 주소와 소캣 통신을 적용</strong>
          </li>
          <li>
            <p>socket 주소</p>
            <p>http://113.198.233.57:3000/chat</p>
          </li>
          <li>
            <p>이벤트의 이름들은 다음과 같다</p>

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
