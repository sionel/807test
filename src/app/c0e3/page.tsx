"use client";
import React from "react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>B 분반 기말고사 문제</h1>
      <div className={styles.task}>
        <h2>다음 요구사항을 보고 기능을 구현하라</h2>
        <ol>
          <li>
            이름과 학번을 적을 입력창과 버튼을 만들어 본인의 이름을 등록하는
            post api(1)를 참고하여 구현하라
            <br />
            반환되는 데이터는 등록된 사람의수가 json 형식으로 담겨오고 이를
            <br />
            <strong>{`"{studentCount}명의 학생이 post를 하였습니다.`}</strong>
            <br />
            라고 표현이 되어야 한다
          </li>
          <li>
            번호를 적을 입력창과 버튼을 만들어 1~100까지의 속담을 가져오는 get
            api(2)를 참고하여 구현하라
            <br />
            반환되는 속담은 텍스트로 오며 2초 뒤에 alert창을 활용하여 나타낸다.
          </li>
          <li>소캣 주소(3)를 참고하여 소캣 서버에 연결하라</li>
          <li>
            소캣 통신으로 채팅의 송수신이 가능하도록 하라. 송수신의 이벤트는
            소캣 이벤트(4)(5)를 참고하여라
            <br />
            각 메시지는 순차적으로 쌓여야 하며 다음과 같은 형식으로 나타나야
            한다.
            <br />
            <strong>{`"({timeStamp}){studentName}님 : {message}"`}</strong>의
            형식이며 timeStamp는 00:00:00 형식의 시,분,초로 나타낸다
          </li>
        </ol>
      </div>
      <div className={styles.task}>
        <h2>API 및 통신 명세서</h2>
        <ol>
          <h4>
            <li>POST API 명세서</li>
          </h4>
          <strong>
            {`post api 주소 : http://113.198.233.57:3000/api/c0e3/chat`}
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
                <td>본인 정보 등록</td>
                <td>{`{name : string , number : number}`}</td>
                <td>{"{studentCount}"}</td>
              </tr>
            </tbody>
          </table>
          <br />
          <h4>
            <li>GET API 명세서</li>
          </h4>
          <strong>
            {`get api 주소 : http://113.198.233.57:3000/api/c0e3/chat?num={number}`}
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
                <td>
                  {`{number}에 1~100 까지의 숫자가 입력이 되면 해당하는 속담이 반환된다.`}
                </td>
                <td>속담 문자열</td>
              </tr>
            </tbody>
          </table>
          <h4>
            <li>소켓 명세서</li>
          </h4>
          <strong>소캣 주소 : http://113.198.233.57:3000/c0e3/chat</strong>

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
                  <strong>(4)</strong>message
                </td>
                <td>채팅 수신시 받는 내용</td>
                <td>
                  {
                    "{studentName:이름, studentNumber: 학번, message: 채팅내용 }"
                  }
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
                <td>
                  <strong>(5)</strong>message
                </td>
                <td>채팅 전송시</td>
                <td>
                  {
                    "{studentName:이름, studentNumber: 학번, message: 채팅내용 , timeStamp: 전송시간 }"
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </ol>
      </div>
    </main>
  );
}
