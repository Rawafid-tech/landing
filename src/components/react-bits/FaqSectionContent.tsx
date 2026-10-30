import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { instantVariants } from "./instantVariants";
import {
  useCallback,
  useRef,
  useState,
  type FC,
  type KeyboardEvent,
} from "react";
import SectionHeader from "./SectionHeader";

/* ─── Types ──────────────────────────────────────────────────── */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqSectionContentProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  items: readonly FaqItem[];
}

/* ─── Animation ──────────────────────────────────────────────── */

const EASE = [0.22, 1, 0.36, 1] as const;

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

const panelTransition = (reduceMotion: boolean | null) =>
  reduceMotion ? { duration: 0 } : { duration: 0.32, ease: EASE };

/* ─── Icons ──────────────────────────────────────────────────── */

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={`faq-item__chevron${isOpen ? " faq-item__chevron--open" : ""}`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/* ─── Accordion item ─────────────────────────────────────────── */

interface FaqAccordionItemProps {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: (id: string) => void;
  onKeyNavigate: (index: number, direction: "prev" | "next" | "first" | "last") => void;
  buttonRef: (node: HTMLButtonElement | null) => void;
  reduceMotion: boolean | null;
}

const FaqAccordionItem: FC<FaqAccordionItemProps> = ({
  item,
  index,
  isOpen,
  onToggle,
  onKeyNavigate,
  buttonRef,
  reduceMotion,
}) => {
  const buttonId = `faq-${item.id}-button`;
  const panelId = `faq-${item.id}-panel`;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>) => {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          onKeyNavigate(index, "next");
          break;
        case "ArrowUp":
          event.preventDefault();
          onKeyNavigate(index, "prev");
          break;
        case "Home":
          event.preventDefault();
          onKeyNavigate(index, "first");
          break;
        case "End":
          event.preventDefault();
          onKeyNavigate(index, "last");
          break;
        default:
          break;
      }
    },
    [index, onKeyNavigate],
  );

  return (
    <motion.li
      className="faq-item"
      variants={reduceMotion ? instantVariants(itemVariants) : itemVariants}
    >
      <div className={`faq-item__shell${isOpen ? " faq-item__shell--open" : ""}`}>
        <h3 className="faq-item__heading">
          <button
            ref={buttonRef}
            id={buttonId}
            type="button"
            className="faq-item__trigger"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => onToggle(item.id)}
            onKeyDown={handleKeyDown}
          >
            <span className="faq-item__index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="faq-item__question">{item.question}</span>
            <span className="faq-item__icon-wrap" aria-hidden="true">
              <ChevronIcon isOpen={isOpen} />
            </span>
          </button>
        </h3>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
              transition={panelTransition(reduceMotion)}
              className="faq-item__panel-motion"
            >
              <div className="faq-item__panel">
                <p className="faq-item__answer">{item.answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
};

/* ─── Main component ─────────────────────────────────────────── */

const FaqSectionContent: FC<FaqSectionContentProps> = ({
  eyebrow,
  headline,
  subheadline,
  items,
}) => {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const isInView = useInView(sectionRef, { once: true, margin: "-8% 0px" });

  const [openId, setOpenId] = useState<string | null>(() => items[0]?.id ?? null);

  const setButtonRef = useCallback((index: number) => {
    return (node: HTMLButtonElement | null) => {
      buttonRefs.current[index] = node;
    };
  }, []);

  const handleToggle = useCallback((id: string) => {
    setOpenId((current) => (current === id ? null : id));
  }, []);

  const focusButtonAt = useCallback((index: number) => {
    buttonRefs.current[index]?.focus();
  }, []);

  const handleKeyNavigate = useCallback(
    (currentIndex: number, direction: "prev" | "next" | "first" | "last") => {
      const lastIndex = items.length - 1;
      if (lastIndex < 0) return;

      let nextIndex = currentIndex;

      switch (direction) {
        case "prev":
          nextIndex = currentIndex <= 0 ? lastIndex : currentIndex - 1;
          break;
        case "next":
          nextIndex = currentIndex >= lastIndex ? 0 : currentIndex + 1;
          break;
        case "first":
          nextIndex = 0;
          break;
        case "last":
          nextIndex = lastIndex;
          break;
      }

      focusButtonAt(nextIndex);
    },
    [focusButtonAt, items.length],
  );

  return (
    <div ref={sectionRef} className="faq-section__inner">
      <SectionHeader
        eyebrow={eyebrow}
        headline={headline}
        subheadline={subheadline}
      />

      <div className="faq-section__panel">
        <motion.ul
          className="faq-list"
          role="list"
          aria-label={headline}
          initial={reduceMotion ? false : "hidden"}
          animate={isInView ? "visible" : "hidden"}
          variants={reduceMotion ? instantVariants(listVariants) : listVariants}
        >
          {items.map((item, index) => (
            <FaqAccordionItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openId === item.id}
              onToggle={handleToggle}
              onKeyNavigate={handleKeyNavigate}
              buttonRef={setButtonRef(index)}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default FaqSectionContent;
