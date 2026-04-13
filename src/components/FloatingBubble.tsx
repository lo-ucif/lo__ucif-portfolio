import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SIZE = 60;

type Position = {
  x: number;
  y: number;
};

const FloatingBubble = () => {
  const [position, setPosition] = useState<Position>(() => {
    const saved = localStorage.getItem("bubble-position");
    return saved ? JSON.parse(saved) : { x: 20, y: 100 };
  });

  const [open, setOpen] = useState(false);
  const isDragging = useRef(false);

  useEffect(() => {
    localStorage.setItem("bubble-position", JSON.stringify(position));
  }, [position]);

  // 🎯 عناصر دائرية حول البابل
  const menu = [
    { icon: "📸", x: 0, y: -80 }, // فوق
    { icon: "💬", x: 80, y: 0 }, // يمين
    { icon: "⚙️", x: 0, y: 80 }, // تحت
    { icon: "🔙", x: -80, y: 0 }, // يسار
  ];

  return (
    <>
      {/* 🔵 Bubble */}
      <motion.div
        drag
        dragMomentum={false}
        onDragStart={() => (isDragging.current = true)}
        onDragEnd={(e, info) => {
          const w = window.innerWidth;
          const h = window.innerHeight;

          const snapX = info.point.x > w / 2 ? w - SIZE - 10 : 10;

          let newY = info.point.y;
          if (newY < 10) newY = 10;
          if (newY > h - SIZE - 10) newY = h - SIZE - 10;

          setPosition({ x: snapX, y: newY });

          setTimeout(() => {
            isDragging.current = false;
          }, 50);
        }}
        onClick={() => {
          if (!isDragging.current) {
            setOpen((p) => !p);
          }
        }}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: SIZE,
          height: SIZE,
          zIndex: 9999,
        }}
        className="flex items-center justify-center text-white bg-blue-500 rounded-full shadow-lg cursor-pointer"
      >
        ⚡
      </motion.div>

      {/* 🧩 Radial Menu */}
      <AnimatePresence>
        {open &&
          menu.map((item, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0, x: position.x, y: position.y }}
              animate={{
                scale: 1,
                opacity: 1,
                x: position.x + item.x,
                y: position.y + item.y,
              }}
              exit={{
                scale: 0,
                opacity: 0,
                x: position.x,
                y: position.y,
              }}
              transition={{ delay: i * 0.05 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: 50,
                height: 50,
                zIndex: 9998,
              }}
              className="flex items-center justify-center text-white bg-gray-800 rounded-full shadow-md"
            >
              {item.icon}
            </motion.div>
          ))}
      </AnimatePresence>
    </>
  );
};

export default FloatingBubble;
