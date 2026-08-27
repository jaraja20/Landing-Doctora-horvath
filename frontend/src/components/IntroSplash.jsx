import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../App";

export const REPLAY_INTRO_EVENT = "gh:replay-intro";
export const INTRO_EXIT_EVENT = "gh:intro-exit";

const EASE = [0.16, 1, 0.3, 1];

const strokeVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.65, delay, ease: EASE }, opacity: { duration: 0.2, delay } },
  }),
};

const wordGroup = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const wordLine = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease: EASE } },
};

export const IntroSplash = () => {
  const { t } = useLang();
  const [prefix, ...restWords] = t.brand.name.split(" ");
  const firstName = restWords[0] || "";
  const lastName = restWords.slice(1).join(" ");

  const [runId, setRunId] = useState(0);
  const [stage, setStage] = useState("draw");

  // Plays on every full page load, and again whenever REPLAY_INTRO_EVENT fires
  // (e.g. clicking the brand logo to return to the home page).
  useEffect(() => {
    setStage("draw");
    document.body.style.overflow = "hidden";
    window.__ghIntroExited = false;
    const timers = [
      setTimeout(() => setStage("logo"), 800),
      setTimeout(() => setStage("wordmark"), 1300),
      setTimeout(() => {
        setStage("exit");
        window.__ghIntroExited = true;
        window.dispatchEvent(new Event(INTRO_EXIT_EVENT));
      }, 2650),
      setTimeout(() => setStage("hidden"), 3250),
    ];

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, [runId]);

  useEffect(() => {
    if (stage === "hidden") document.body.style.overflow = "";
  }, [stage]);

  useEffect(() => {
    const handler = () => setRunId((id) => id + 1);
    window.addEventListener(REPLAY_INTRO_EVENT, handler);
    return () => window.removeEventListener(REPLAY_INTRO_EVENT, handler);
  }, []);

  return (
    <AnimatePresence>
      {stage !== "hidden" && (
        <motion.div
          key="intro-splash"
          data-testid="intro-splash"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(8px)",
            transition: { duration: 0.7, ease: EASE },
          }}
        >
          <motion.div
            className="flex items-center gap-4"
            animate={
              stage === "exit"
                ? { opacity: 0, scale: 1.05, filter: "blur(4px)", transition: { duration: 0.55, ease: EASE } }
                : { opacity: 1, scale: 1, filter: "blur(0px)" }
            }
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0">
              <AnimatePresence>
                {stage === "draw" && (
                  <motion.svg
                    key="scribble"
                    viewBox="0 0 100 100"
                    className="absolute inset-0 w-full h-full"
                    exit={{ opacity: 0, scale: 1.15, transition: { duration: 0.3, ease: EASE } }}
                  >
                    <motion.path
                      d="M30 70 L30 40 L46 40 L46 50 L38 50"
                      fill="none"
                      stroke="#1818FF"
                      strokeWidth="5"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                      variants={strokeVariants}
                      initial="hidden"
                      animate="visible"
                      custom={0.05}
                    />
                    <motion.path
                      d="M70 30 L70 60 L54 60 L54 50 L62 50"
                      fill="none"
                      stroke="#1818FF"
                      strokeWidth="5"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                      variants={strokeVariants}
                      initial="hidden"
                      animate="visible"
                      custom={0.22}
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
              <motion.img
                src="/assets/logo-gh.png"
                alt="Dra. Gabriela Horvath"
                className="absolute inset-0 w-full h-full object-contain"
                initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
                animate={
                  stage === "logo" || stage === "wordmark" || stage === "exit"
                    ? { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 260, damping: 20, mass: 0.7 } }
                    : { opacity: 0, scale: 0.6, rotate: -6 }
                }
              />
            </div>

            <AnimatePresence>
              {(stage === "wordmark" || stage === "exit") && (
                <motion.div
                  key="wordmark"
                  variants={wordGroup}
                  initial="hidden"
                  animate="visible"
                  className="leading-tight"
                >
                  <motion.p variants={wordLine} className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-black/45">
                    {prefix}
                  </motion.p>
                  <motion.p variants={wordLine} className="text-2xl sm:text-3xl tracking-tight whitespace-nowrap">
                    <span className="font-extrabold text-black">{firstName}</span>{" "}
                    <span className="font-light text-black">{lastName}</span>
                  </motion.p>
                  <motion.p variants={wordLine} className="mt-1 text-xs sm:text-sm font-medium text-black/55">
                    {t.brand.role}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
