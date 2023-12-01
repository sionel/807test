"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./page.module.css";
import useSocket from "@/util/useSocket";

const Chat = () => {
  const [chatList, setChatList] = useState<any[]>([]);
  const { socket, on, off, emit } = useSocket("http://localhost:3000/chat");
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
  const receiveMessage = ({ userName, message }: any) => {
    setChatList((prevChatList) => [...prevChatList, { userName, message }]);
  };

  const sendMessage = () => {
    emit("sendMessage", {
      userName: "테스터",
      message,
    });
    setMessage("");
  };
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
        <div>{`날짜 : `}</div>
      </div>

      <div className={styles.chatBox}>
        <div className={styles.chatList}>
          {chatList.map(({ userName, message }, idx) => {
            return (
              <div
                key={idx}
                className={userName === "테스터" ? styles.my : styles.other}
              >{`${userName}님 : ${message}`}</div>
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
