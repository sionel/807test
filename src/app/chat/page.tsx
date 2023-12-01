"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./page.module.css";
import useSocket from "@/util/useSocket";

const Chat = () => {
  const [chatList, setChatList] = useState<any[]>([]);
  const { socket, on, off, emit } = useSocket(
    "http://113.198.233.57:3000/chat"
  );
  const [message, setMessage] = useState("");
  const [userCount, setUserCount] = useState(0);
  useEffect(() => {
    if (socket) {
      addSocketListener();
    }
    return () => {
      if (socket) socket.close();
    };
  }, [socket]);

  const addSocketListener = () => {
    on("joinUser", joinUser);
    on("receiveMessage", receiveMessage);
  };

  const joinUser = ({ userCount }: any) => {
    setUserCount(userCount);
  };
  const receiveMessage = (e: any) => {
    debugger;
    setChatList((prevChatList) => [...prevChatList, { ...e }]);
  };

  const sendMessage = () => {
    emit("sendMessage", {
      userName: "테스터",
      message,
    });
    setMessage("");
  };

  const formatTimestampToTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };
  function getFormattedDate() {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}년 ${month}월 ${day}일`;
  }
  return (
    <div className={styles.main}>
      <h2>채팅 프로그램</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>{`접속인원 : ${userCount}명`}</div>
        <div>{`날짜 : ${getFormattedDate()}`}</div>
      </div>

      <div className={styles.chatBox}>
        <div className={styles.chatList}>
          {chatList.map(({ userName, message, timeStamp }, idx) => {
            return (
              <div
                key={idx}
                className={userName === "테스터" ? styles.my : styles.other}
              >{`(${formatTimestampToTime(
                timeStamp
              )})${userName}님 : ${message}`}</div>
            );
          })}
        </div>
        <div className={styles.stikyComponent}>
          <input
            className={styles.magInput}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></input>
          <button className={styles.sendButton} onClick={sendMessage}>
            전송
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
