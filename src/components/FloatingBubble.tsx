import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
} from "framer-motion";
import { useRef, useState } from "react";
import img from "../assets/8.webp";

const SIZE = 50;

type Side = "left" | "right";

const MENU = [
  { label: "Projects" },
  { label: "Education" },
  { label: "Contact" },
  { label: "About" },
];

const CARD_W = 150;
const CARD_GAP = 10;
const ITEM_H = 52;
const CARD_PADDING = 20;
const CARD_H = MENU.length * ITEM_H + CARD_PADDING;

const getSaved = (): { side: Side; y: number } => {
  try {
    const saved = localStorage.getItem("bubble-pos");
    if (saved) {
      const parsed = JSON.parse(saved);
      const maxY = window.innerHeight - SIZE - 10;
      parsed.y = Math.max(10, Math.min(parsed.y, maxY));
      return parsed;
    }
  } catch {
    print();
  }
  return { side: "left", y: 100 };
};

const FloatingBubble = () => {
  const initial = getSaved();

  const [side, setSide] = useState<Side>(initial.side);
  const [posY, setPosY] = useState<number>(initial.y);
  const [open, setOpen] = useState(false);
  const dragMoved = useRef(false);

  const initX = initial.side === "left" ? 10 : window.innerWidth - SIZE - 10;
  const x = useMotionValue(initX);
  const y = useMotionValue(initial.y);

  const savePos = (s: Side, newY: number) => {
    localStorage.setItem("bubble-pos", JSON.stringify({ side: s, y: newY }));
  };

  const getCardPos = () => {
    const currentX = side === "left" ? 10 : window.innerWidth - SIZE - 10;
    const cardX =
      side === "left"
        ? currentX + SIZE + CARD_GAP
        : currentX - CARD_W - CARD_GAP;
    const cardY = posY + SIZE / 2 - CARD_H / 2;
    return { cardX, cardY };
  };

  const { cardX, cardY } = getCardPos();
  const ballCenterY = posY + SIZE / 2 - CARD_H / 2;

  return (
    <>
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0}
        dragConstraints={{
          top: 10,
          left: 10,
          right: window.innerWidth - SIZE - 10,
          bottom: window.innerHeight - SIZE - 10,
        }}
        whileDrag={{ scale: 1.08, cursor: "grabbing" }}
        onDragStart={() => {
          dragMoved.current = false;
          if (open) setOpen(false);
        }}
        onDrag={() => {
          dragMoved.current = true;
        }}
        onDragEnd={() => {
          const w = window.innerWidth;
          const h = window.innerHeight;

          // ✅ read directly from motion values — zero scroll involvement
          const currentX = x.get();
          const currentY = y.get();

          const newSide: Side = currentX < w / 2 ? "left" : "right";
          const snapX = newSide === "left" ? 10 : w - SIZE - 10;
          const newY = Math.max(10, Math.min(currentY, h - SIZE - 10));

          animate(x, snapX, { type: "spring", stiffness: 400, damping: 30 });
          animate(y, newY, { type: "spring", stiffness: 400, damping: 30 });

          setSide(newSide);
          setPosY(newY);
          savePos(newSide, newY);
        }}
        onClick={() => {
          if (!dragMoved.current) setOpen((o) => !o);
          dragMoved.current = false;
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x,
          y,
          width: SIZE,
          height: SIZE,
          touchAction: "none",
          zIndex: 9999,
          cursor: "grab",
        }}
        className="flex items-center justify-center border rounded-full shadow-lg select-none bg-[#161513]/40 p-1 backdrop-blur"
      >
        <img
          src={img}
          draggable={false}
          style={{
            width: SIZE,
            height: SIZE,
            borderRadius: "50%",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu-card"
            initial={{ opacity: 0, scale: 0.85, x: cardX, y: ballCenterY }}
            animate={{ opacity: 1, scale: 1, x: cardX, y: cardY }}
            exit={{ opacity: 0, scale: 0.85, x: cardX, y: ballCenterY }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: CARD_W,
              zIndex: 9998,
              transformOrigin: side === "left" ? "left center" : "right center",
            }}
            className="rounded-[30px] bg-[#161513]/60 backdrop-blur shadow-2xl"
          >
            {MENU.map((item, i) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: side === "left" ? -10 : 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: i * 0.055,
                  type: "spring",
                  stiffness: 350,
                  damping: 28,
                }}
                onClick={() => {
                  console.log("nav:", item.label);
                  setOpen(false);
                }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-1 w-full px-0.5 py-1.5 bg-transparent border-none cursor-pointer text-white font-['Itim']"
              >
                <span>{item.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingBubble;
