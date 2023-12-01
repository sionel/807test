"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

const Calc = () => {
  const [log, setLog] = useState<string[]>([]);
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const handleClickKorPost = () => {
    fetch("http://113.198.233.57:3000/api/record", {
      method: "POST",
      body: JSON.stringify({
        name: "테스트",
        korScore: Number(number1),
      }),
    })
      .then((e) => {
        return e.json();
      })
      .then((text: string) => {
        setLog([...log, text]);
      });
  };
  const handleClickEngPost = () => {
    fetch("http://113.198.233.57:3000/api/record", {
      method: "POST",
      body: JSON.stringify({
        name: "테스트",
        engScore: Number(number2),
      }),
    })
      .then((e) => {
        return e.json();
      })
      .then((text: string) => {
        setLog([...log, text]);
      });
  };
  const handleClickKorGet = () => {
    fetch("http://113.198.233.57:3000/api/record?type=kor", {
      method: "GET",
    })
      .then((e) => {
        return e.json();
      })
      .then((text: string) => {
        setLog([...log, text]);
      });
  };
  const handleClickEngGet = () => {
    fetch("http://113.198.233.57:3000/api/record?type=eng", {
      method: "GET",
    })
      .then((e) => {
        return e.json();
      })
      .then((text: string) => {
        setLog([...log, text]);
      });
  };

  return (
    <div className={styles.main}>
      <h3>성적 관리 시스템</h3>
      {/* <div>{getText}</div> */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          marginBottom: 10,
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <div>http://113.198.233.57:3000/api/record</div>
          <input
            placeholder="이름"
            onChange={(e) => setName1(e.target.value)}
            value={name1}
          />
          <input
            placeholder="국어 점수"
            onChange={(e) => setNumber1(e.target.value)}
            value={number1}
            type="number"
          />
          <button onClick={handleClickKorPost}>post</button>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <div>http://113.198.233.57:3000/api/record</div>
          <input
            placeholder="이름"
            onChange={(e) => setName2(e.target.value)}
            value={name2}
          />
          <input
            placeholder="영어 점수"
            onChange={(e) => setNumber2(e.target.value)}
            value={number2}
            type="number"
          />
          <button onClick={handleClickEngPost}>post</button>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <div>{`http://113.198.233.57:3000/api/record?type=kor`}</div>
          <button onClick={handleClickKorGet}>get</button>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <div>{`http://113.198.233.57:3000/api/record?type=eng`}</div>
          <button onClick={handleClickEngGet}>get</button>
        </div>
      </div>
      <div className={styles.box}>
        {log.map((e, i) => (
          <div key={i}>{e}</div>
        ))}
      </div>
    </div>
  );
};

export default Calc;
