import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

function useSocket(url: string) {
  const [socket, setSocket] = useState<any>();
  const isConnected = useRef(false);

  useEffect(() => {
    const socketInstance = io(url);

    setSocket(socketInstance);
    isConnected.current = true;
    return () => {
      socketInstance.disconnect();
      isConnected.current = false;
    };
  }, [url]);

  const on = (event, handler) => {
    if (socket && isConnected.current) {
      socket.on(event, handler);
    }
  };

  const off = (event, handler) => {
    if (socket && isConnected.current) {
      socket.off(event, handler);
    }
  };

  const emit = (event, data) => {
    if (socket && isConnected.current) {
      socket.emit(event, data);
    }
  };

  return { socket, on, off, emit };
}

export default useSocket;
