export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

export const EASE_SMOOTH = [0.25, 0.1, 0.25, 1] as const;

export const SPRING_SMOOTH = {
  type: "spring",
  stiffness: 260,
  damping: 26,
  mass: 0.9,
} as const;

export const SPRING_INTERACTIVE = {
  type: "spring",
  stiffness: 360,
  damping: 28,
  mass: 0.85,
} as const;

export const VIEWPORT_ONCE = {
  once: true,
  amount: 0.12,
} as const;
