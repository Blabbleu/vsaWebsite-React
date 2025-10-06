import { useEffect, useState } from "react";

export default function MascotFollower({ src }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => setPos({ x: e.pageX, y: e.pageY });
    const onDown = (e) => setPos({ x: e.clientX, y: e.clientY });
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
    };
  }, []);
  return (
    <img
      id="banban"
      src={src}
      alt="Banban"
      style={{
        position: "fixed",
        width: 50,
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        top: pos.y,
        left: pos.x,
      }}
    />
  );
}
