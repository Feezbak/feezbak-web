import "../../landing.css";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { isAuth } from "@/hooks";
import { cn } from "@/lib/utils";

import { BackgroundBeams } from "@components/ui/background-beams";
import { SparklesCore } from "@components/ui/sparkles";
import { MovingBorderButton } from "@components/ui/moving-border";
import { InfiniteMovingCards } from "@components/ui/infinite-moving-cards";
import { TextGenerateEffect } from "@components/ui/text-generate-effect";

/* ─── Unsplash images ─── */
const BASE = "https://images.unsplash.com/photo-";
const Q = "?w=900&auto=format&fit=crop&q=80";

// Hero – person working across phone + laptop (modern workspace)
const combinedImg = `${BASE}1563986768609-322da13575f3${Q}`;
// Step 1 – person conducting user research / creating content
const imgTypeBtnResp = `${BASE}1661955247000-b529e946718e${Q}`;
// Step 2 – person sharing via smartphone
const girlSending = `${BASE}1488509082528-cefbba5ad692${Q}`;
// Step 3 – clean analytics dashboard
const dataImg = `${BASE}1551288049-bebda4e38f71${Q}`;
// Story types
const imgTypeTextResp = `${BASE}1540908390241-82158ab62887${Q}`;
const textTypeBtnResp = `${BASE}1600880292089-90a7e086ee0c${Q}`;
const textTypeTextResp = `${BASE}1587440871875-191322ee64b0${Q}`;
// Split sections
const splitImgVoting = `${BASE}1666875753105-c63a6f3bdc86${Q}`;
const splitStatements = `${BASE}1522071820081-009f0129c71c${Q}`;

/* ─── data ─── */
const STEPS = [
  {
    n: "01",
    title: "Build your story",
    desc: "Choose image voting, statement questions, or a combined format. Upload your content and configure response options in under two minutes.",
    img: imgTypeBtnResp,
    color: "#FF7F61",
    tag: "Create",
  },
  {
    n: "02",
    title: "Share with anyone",
    desc: "One link. Works in WhatsApp, email, Slack, or as a QR code. No app download, no sign-up required from respondents.",
    img: girlSending,
    color: "#6382F2",
    tag: "Share",
  },
  {
    n: "03",
    title: "Read the signals",
    desc: "Real-time votes, comments, and trends — all in a clean analytics dashboard. Know what your audience thinks before you ship.",
    img: dataImg,
    color: "#25C7AA",
    tag: "Analyze",
  },
];

const STORY_TYPES = [
  {
    label: "Image Voting · Button",
    img: imgTypeBtnResp,
    accent: "#FF7F61",
    desc: "Respondents pick their favourite image — great for logos, product shots, and design options.",
  },
  {
    label: "Image Voting · Text",
    img: imgTypeTextResp,
    accent: "#6382F2",
    desc: "Images with open-text boxes so respondents can explain the why behind their choice.",
  },
  {
    label: "Statement · Button",
    img: textTypeBtnResp,
    accent: "#25C7AA",
    desc: "Written statements with preset button answers. Fast, structured, zero friction.",
  },
  {
    label: "Statement · Text",
    img: textTypeTextResp,
    accent: "#FFAF51",
    desc: "Open questions that invite detailed written responses — ideal for deeper insights.",
  },
  {
    label: "Combined",
    img: combinedImg,
    accent: "#FF2976",
    desc: "Mix images and statements in one story for a richer, multi-format feedback experience.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "We tested three logo concepts with our community before launch. Feezbak gave us clear winners in under 24 hours.",
    name: "Sarah K.",
    title: "Brand Designer",
  },
  {
    quote:
      "Our UX team uses Feezbak to validate designs before dev handoff. It's become part of every sprint.",
    name: "James T.",
    title: "Head of Product",
  },
  {
    quote:
      "I used to send Google Forms. Now I send Feezbak stories. The response rate tripled.",
    name: "Mia L.",
    title: "Marketing Manager",
  },
  {
    quote:
      "The image voting feature is perfect for interior design client presentations. My clients love it.",
    name: "David R.",
    title: "Interior Designer",
  },
  {
    quote:
      "Set up a story, shared it in our Slack, had 40 responses before lunch. Seamless.",
    name: "Anna P.",
    title: "Community Lead",
  },
];

const STATS = [
  { value: 2, suffix: " min", label: "to launch your first story" },
  { value: 5, suffix: "", label: "story formats to choose from" },
  { value: 100, suffix: "%", label: "free to start, no credit card" },
];

/* ─── animation presets ─── */
const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -48, filter: "blur(4px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 48, filter: "blur(4px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease },
  },
};

const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

/* ─── count-up hook ─── */
const useCountUp = (target: number, duration = 1.4) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);
  return { ref, count };
};

/* ─── 3D tilt card ─── */
const TiltCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 14;
    setTilt({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(800px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition:
          tilt.x === 0 ? "transform 0.5s ease" : "transform 0.1s ease",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

/* ─── scroll progress bar ─── */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-gradient-to-r from-[#FF7F61] via-[#FF2976] to-[#6382F2]"
    />
  );
};

/* ─── stat counter ─── */
const StatItem = ({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) => {
  const { ref, count } = useCountUp(value);
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      variants={fadeUp}
      className="text-center p-10 rounded-3xl border border-black/[0.06] bg-white group hover:shadow-xl transition-shadow duration-500"
    >
      <div className="text-5xl sm:text-6xl font-black mb-2 tabular-nums bg-gradient-to-br from-[#FF7F61] to-[#FF2976] bg-clip-text text-transparent">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-[#847e95] font-medium">{label}</div>
    </motion.div>
  );
};

/* ─── story type carousel ─── */
const StoryTypeShowcase = () => {
  const [active, setActive] = useState(0);
  const current = STORY_TYPES[active];

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* tab list */}
      <div className="flex lg:flex-col gap-2 flex-wrap lg:flex-nowrap w-full lg:w-64 shrink-0">
        {STORY_TYPES.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActive(i)}
            className={cn(
              "relative text-left px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300",
              active === i
                ? "text-white shadow-lg"
                : "text-[#847e95] hover:text-[#06060c] bg-white border border-black/[0.06]"
            )}
            style={
              active === i
                ? {
                    background: `linear-gradient(135deg, ${t.accent}, ${t.accent}cc)`,
                  }
                : {}
            }
          >
            {active === i && (
              <motion.span
                layoutId="type-bg"
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${t.accent}, ${t.accent}cc)`,
                }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative">{t.label}</span>
          </button>
        ))}
      </div>

      {/* preview panel */}
      <div className="flex-1 min-w-0">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
            transition={{ duration: 0.4, ease }}
          >
            <TiltCard className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(circle at 30% 40%, ${current.accent}, transparent 60%)`,
                }}
              />
              <img
                src={current.img}
                alt={current.label}
                className="w-full block rounded-3xl"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl px-4 py-3 backdrop-blur-md bg-black/30 border border-white/10">
                <p className="text-white text-sm font-medium">{current.desc}</p>
              </div>
            </TiltCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

/* ─── main component ─── */
const Landing = () => {
  const navigate = useNavigate();
  const authed = isAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], [0, 120]);
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);

  useEffect(() => {
    if (authed) navigate("/dashboard", { replace: true });
  }, [authed, navigate]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#fafaf9] text-[#06060c] overflow-x-hidden">
      <ScrollProgress />

      {/* ─── NAV ─── */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 transition-all duration-300",
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-black/5"
            : "bg-transparent"
        )}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-extrabold text-xl bg-gradient-to-r from-[#FF7F61] to-[#FF2976] bg-clip-text text-transparent"
        >
          Feezbak
        </button>

        <div className="hidden md:flex items-center gap-1">
          {[
            { label: "How it works", id: "how" },
            { label: "Story types", id: "types" },
            { label: "Features", id: "features" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-[#847e95] hover:text-[#06060c] transition-colors px-4 py-2 rounded-full hover:bg-black/5"
            >
              {item.label}
            </button>
          ))}
          <div className="w-px h-5 bg-black/10 mx-2" />
          <button
            onClick={() => navigate("/sign-in")}
            className="text-sm font-semibold px-4 py-2 rounded-full hover:bg-black/5 transition-colors"
          >
            Sign in
          </button>
          <button
            onClick={() => navigate("/sign-up")}
            className="text-sm font-bold px-5 py-2 rounded-full bg-[#06060c] text-white hover:bg-[#1a1a2e] transition-colors ml-1"
          >
            Get Started
          </button>
        </div>

        {/* hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-[#06060c] transition-all duration-300",
              mobileMenuOpen && "rotate-45 translate-y-2"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-[#06060c] transition-all duration-300",
              mobileMenuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-[#06060c] transition-all duration-300",
              mobileMenuOpen && "-rotate-45 -translate-y-2"
            )}
          />
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[64px] inset-x-0 z-40 bg-white/96 backdrop-blur-xl border-b border-black/5 px-6 py-5 flex flex-col gap-2"
          >
            {["how", "types", "features"].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left text-base font-medium py-2.5 text-[#06060c]"
              >
                {id === "how"
                  ? "How it works"
                  : id === "types"
                  ? "Story types"
                  : "Features"}
              </button>
            ))}
            <div className="h-px bg-black/6 my-1" />
            <button
              onClick={() => navigate("/sign-in")}
              className="text-left text-base font-semibold py-2.5"
            >
              Sign in
            </button>
            <button
              onClick={() => navigate("/sign-up")}
              className="w-full text-center font-bold py-3.5 rounded-2xl bg-[#06060c] text-white mt-1"
            >
              Get Started Free →
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-0"
      >
        {/* bg */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <BackgroundBeams />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <SparklesCore
            particleDensity={50}
            particleColor="#FF7F61"
            minSize={0.3}
            maxSize={0.8}
          />
        </div>
        {/* blobs */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.15] blur-[120px] pointer-events-none bg-[#FF7F61]" />
        <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[120px] pointer-events-none bg-[#6382F2]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-[0.10] blur-[100px] pointer-events-none bg-[#FFAF51]" />

        {/* text content */}
        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
          style={{ y: heroY, opacity: heroOpacity }}
          variants={stagger(0.09)}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#FF7F61] bg-[#FF7F61]/10 border border-[#FF7F61]/20">
              ✨ Feedback, reimagined
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="mb-6">
            <TextGenerateEffect
              words="Turn feedback into your superpower"
              gradientWord="superpower"
              className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-[-0.02em] font-black"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-[#847e95] max-w-xl mx-auto leading-relaxed mb-10"
          >
            Create beautiful feedback stories. Share them in one link. Watch
            real-time insights roll in — all in one place.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <MovingBorderButton
              onClick={() => navigate("/sign-up")}
              className="text-base px-10"
              containerClassName="h-14"
            >
              Get Started Free →
            </MovingBorderButton>
            <button
              onClick={() => scrollTo("how")}
              className="h-14 px-8 rounded-full text-base font-semibold border border-black/10 bg-white/70 backdrop-blur hover:bg-white transition-colors"
            >
              See How It Works ↓
            </button>
          </motion.div>
        </motion.div>

        {/* hero screenshot — slides up from bottom */}
        <motion.div
          className="relative z-10 mt-16 w-full max-w-5xl mx-auto px-4 sm:px-8"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 1, ease }}
        >
          <TiltCard className="relative">
            <div
              className="absolute -inset-1 rounded-[28px] blur-2xl opacity-40"
              style={{
                background: "linear-gradient(135deg,#FF7F61,#6382F2,#FFAF51)",
              }}
            />
            <div className="relative rounded-[24px] overflow-hidden border border-white/50 shadow-[0_32px_80px_rgba(0,0,0,0.18)] bg-white">
              <img
                src={combinedImg}
                alt="Feezbak combined story preview"
                className="w-full block"
              />
              {/* overlay gradient to blend into next section */}
              <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-[#fafaf9] to-transparent" />
            </div>
            {/* floating badges */}
            <motion.div
              className="absolute -top-3 right-8 sm:right-16 flex items-center gap-2 px-4 py-2.5 rounded-2xl text-white text-xs font-bold shadow-xl"
              style={{ background: "linear-gradient(135deg,#FF7F61,#FF2976)" }}
              initial={{ opacity: 0, scale: 0.7, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5, ease }}
            >
              🗳️ 142 new responses
            </motion.div>
            <motion.div
              className="absolute bottom-8 -left-2 sm:left-4 flex items-center gap-2 px-4 py-2.5 rounded-2xl text-white text-xs font-bold shadow-xl"
              style={{ background: "linear-gradient(135deg,#6382F2,#4B5EDB)" }}
              initial={{ opacity: 0, scale: 0.7, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5, ease }}
            >
              ⚡ Live results
            </motion.div>
            <motion.div
              className="absolute top-8 -left-3 sm:left-2 flex items-center gap-2 px-4 py-2.5 rounded-2xl text-white text-xs font-bold shadow-xl"
              style={{ background: "linear-gradient(135deg,#25C7AA,#1aa88e)" }}
              initial={{ opacity: 0, scale: 0.7, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.5, ease }}
            >
              ✓ Shared via link
            </motion.div>
          </TiltCard>
        </motion.div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how" className="w-full py-32 bg-white">
        <motion.div
          className="max-w-6xl mx-auto px-6 md:px-12"
          variants={stagger(0.13)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-center text-xs font-bold uppercase tracking-widest text-[#FF7F61] mb-3"
          >
            How it works
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight"
          >
            Three steps to real feedback
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-center text-[#847e95] text-base sm:text-lg max-w-sm mx-auto mb-20 leading-relaxed"
          >
            No code. No complicated setup. Just results.
          </motion.p>

          <div className="flex flex-col gap-20">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                variants={i % 2 === 0 ? fadeLeft : fadeRight}
                className={cn(
                  "flex flex-col md:flex-row items-center gap-10 md:gap-16",
                  i % 2 !== 0 && "md:flex-row-reverse"
                )}
              >
                {/* image */}
                <div className="flex-1 min-w-0 w-full">
                  <TiltCard>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at 50% 50%, ${s.color}30, transparent 70%)`,
                        }}
                      />
                      <img src={s.img} alt={s.title} className="w-full block" />
                    </div>
                  </TiltCard>
                </div>

                {/* text */}
                <div className="flex-1 min-w-0 w-full">
                  <div
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                    style={{ color: s.color, background: `${s.color}18` }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-black"
                      style={{ background: s.color }}
                    >
                      {i + 1}
                    </span>
                    {s.tag}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-[#847e95] text-base sm:text-lg leading-relaxed">
                    {s.desc}
                  </p>

                  {/* decorative step number */}
                  <div
                    className="text-[7rem] font-black leading-none select-none mt-4 opacity-[0.05]"
                    style={{ color: s.color }}
                  >
                    {s.n}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── STORY TYPES ─── */}
      <section id="types" className="w-full py-32 bg-[#fafaf9]">
        <motion.div
          className="max-w-6xl mx-auto px-6 md:px-12"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-center text-xs font-bold uppercase tracking-widest text-[#6382F2] mb-3"
          >
            Story types
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight"
          >
            Five formats, one platform
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-center text-[#847e95] text-base sm:text-lg max-w-md mx-auto mb-14 leading-relaxed"
          >
            Pick the format that matches your question. Switch anytime.
          </motion.p>

          <motion.div variants={fadeUp}>
            <StoryTypeShowcase />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" className="w-full py-32 bg-white overflow-hidden">
        <motion.div
          className="max-w-6xl mx-auto px-6 md:px-12"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-center text-xs font-bold uppercase tracking-widest text-[#25C7AA] mb-3"
          >
            Features
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight mb-16 leading-tight"
          >
            Everything you need, nothing you don't
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "🎨",
                accent: "#FF7F61",
                title: "Multiple Story Types",
                desc: "Image voting, statements, or combined — every feedback format in one tool.",
              },
              {
                icon: "⚡",
                accent: "#6382F2",
                title: "Real-Time Analytics",
                desc: "Votes and comments appear the moment they're submitted. No refresh needed.",
              },
              {
                icon: "📋",
                accent: "#25C7AA",
                title: "Contact Form",
                desc: "Optionally collect name, email, or phone so you can follow up personally.",
              },
              {
                icon: "🔗",
                accent: "#FFAF51",
                title: "Instant Sharing",
                desc: "Copy link, QR code, or direct WhatsApp — respondents need no account.",
              },
              {
                icon: "🛡️",
                accent: "#FF2976",
                title: "Close Responses",
                desc: "Pause or close your story at any time. Stay in control of when you collect.",
              },
              {
                icon: "📱",
                accent: "#6382F2",
                title: "Mobile-First",
                desc: "Respondents love using it on their phones. Buttery smooth on every device.",
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="relative group p-7 rounded-3xl border border-black/[0.06] bg-[#fafaf9] overflow-hidden cursor-default"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: `radial-gradient(circle at 20% 20%, ${f.accent}12, transparent 60%)`,
                  }}
                />
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: `${f.accent}18` }}
                >
                  {f.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-sm text-[#847e95] leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── SPLIT — image voting ─── */}
      <section className="w-full py-32 bg-[#fafaf9] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
          <motion.div
            className="flex-1 min-w-0"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <TiltCard>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-black/5">
                <img
                  src={splitImgVoting}
                  alt="Voting story with open-text responses"
                  className="w-full block"
                />
              </div>
            </TiltCard>
          </motion.div>

          <motion.div
            className="flex-1 min-w-0"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF7F61] mb-3">
              Image voting
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Let pictures do the talking
            </h2>
            <p className="text-[#847e95] text-base leading-relaxed mb-6">
              Upload your images — product shots, design options, logo concepts
              — and let respondents vote or leave comments. No briefing document
              needed; the image speaks for itself.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Button vote (fastest response)",
                "Open-text opinion (richer insight)",
                "Combined images + statements",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-[#847e95]"
                >
                  <span className="w-5 h-5 rounded-full bg-[#FF7F61]/15 flex items-center justify-center text-[#FF7F61] text-xs font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate("/sign-up")}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white text-sm shadow-lg hover:-translate-y-0.5 transition-transform"
              style={{
                background: "linear-gradient(135deg,#FF7F61,#FF2976)",
                boxShadow: "0 8px 24px rgba(255,127,97,0.35)",
              }}
            >
              Try Image Voting →
            </button>
          </motion.div>
        </div>
      </section>

      {/* ─── SPLIT — statements reversed ─── */}
      <section className="w-full py-32 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-center gap-16">
          <motion.div
            className="flex-1 min-w-0"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <TiltCard>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-black/5">
                <img
                  src={splitStatements}
                  alt="Statement feedback story"
                  className="w-full block"
                />
              </div>
            </TiltCard>
          </motion.div>

          <motion.div
            className="flex-1 min-w-0"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#6382F2] mb-3">
              Statement stories
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Ask better questions, get better answers
            </h2>
            <p className="text-[#847e95] text-base leading-relaxed mb-6">
              Write clear statements or questions, choose how respondents reply
              — preset buttons for speed or open text for depth. Great for NPS,
              product feedback, or team pulse checks.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Button answers for quick polls",
                "Free-text for qualitative depth",
                "Mix formats in one story",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-[#847e95]"
                >
                  <span className="w-5 h-5 rounded-full bg-[#6382F2]/15 flex items-center justify-center text-[#6382F2] text-xs font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate("/sign-up")}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white text-sm shadow-lg hover:-translate-y-0.5 transition-transform"
              style={{
                background: "linear-gradient(135deg,#6382F2,#4B5EDB)",
                boxShadow: "0 8px 24px rgba(99,130,242,0.35)",
              }}
            >
              Try Statement Stories →
            </button>
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="w-full py-28 overflow-hidden relative bg-[#06060c]">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none bg-[#FF7F61]" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none bg-[#6382F2]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none bg-[#FFAF51]" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 px-6"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#FF7F61] mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Loved by teams who ship
          </h2>
        </motion.div>

        <InfiniteMovingCards
          items={TESTIMONIALS}
          direction="left"
          speed="slow"
        />
        <InfiniteMovingCards
          items={[...TESTIMONIALS].reverse()}
          direction="right"
          speed="slow"
          className="mt-4"
        />
      </section>

      {/* ─── STATS ─── */}
      <section className="w-full py-32 bg-[#fafaf9]">
        <motion.div
          className="max-w-5xl mx-auto px-6 md:px-12"
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight"
          >
            Built for real decisions
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-center text-[#847e95] mb-16 max-w-sm mx-auto leading-relaxed"
          >
            Simple to start. Powerful enough to drive strategy.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STATS.map((s) => (
              <StatItem key={s.label} {...s} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative w-full py-36 overflow-hidden bg-[#06060c]">
        <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none bg-[#FF7F61]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none bg-[#6382F2]" />
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <SparklesCore
            particleDensity={30}
            particleColor="#FF7F61"
            minSize={0.2}
            maxSize={0.7}
          />
        </div>

        <motion.div
          className="relative z-10 max-w-2xl mx-auto text-center px-6"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.06] mb-5"
          >
            Collect feedback that{" "}
            <span className="bg-gradient-to-r from-[#FF7F61] via-[#FF2976] to-[#FFAF51] bg-clip-text text-transparent">
              actually moves things
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-white/50 text-base sm:text-lg mb-12 leading-relaxed"
          >
            Free to start. Takes two minutes. No credit card required.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MovingBorderButton
              onClick={() => navigate("/sign-up")}
              className="text-base px-10"
              containerClassName="h-14"
            >
              Create Your First Story →
            </MovingBorderButton>
            <button
              onClick={() => navigate("/sign-in")}
              className="text-white/50 text-sm font-medium hover:text-white/80 transition-colors"
            >
              Already have an account? Sign in →
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="w-full bg-[#06060c] border-t border-white/[0.06] px-6 md:px-12 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-extrabold text-lg bg-gradient-to-r from-[#FF7F61] to-[#FF2976] bg-clip-text text-transparent"
        >
          Feezbak
        </button>
        <span className="text-white/25 text-sm">
          © {new Date().getFullYear()} Feezbak. All rights reserved.
        </span>
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate("/sign-in")}
            className="text-white/30 text-sm hover:text-white/60 transition-colors"
          >
            Sign in
          </button>
          <button
            onClick={() => navigate("/sign-up")}
            className="text-white/30 text-sm hover:text-white/60 transition-colors"
          >
            Sign up
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
