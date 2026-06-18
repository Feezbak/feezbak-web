import "../../landing.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { isAuth } from "@/hooks";
import { cn } from "@/lib/utils";

import { BackgroundBeams } from "@components/ui/background-beams";
import { SparklesCore } from "@components/ui/sparkles";
import { MovingBorderButton } from "@components/ui/moving-border";
import { InfiniteMovingCards } from "@components/ui/infinite-moving-cards";
import { HoverEffect } from "@components/ui/card-hover-effect";
import { TextGenerateEffect } from "@components/ui/text-generate-effect";

import imgTypeBtnResp from "@images/image-type-btn-resp.webp";
import girlSending from "@images/girl-sending-message.webp";
import dataImg from "@images/data.webp";
import combinedImg from "@images/combined-type.webp";
import textTypeBtnResp from "@images/text-type-btn-resp.png";

/* ─── data ─── */
const FEATURES = [
  {
    icon: "🎨",
    accent: "#FF7F61",
    title: "Multiple Story Types",
    description:
      "Image voting, text questions, or combined — choose the format that fits your feedback goal.",
  },
  {
    icon: "⚡",
    accent: "#6382F2",
    title: "Real-Time Analytics",
    description:
      "Votes and comments land in your dashboard the moment they're submitted.",
  },
  {
    icon: "📋",
    accent: "#25C7AA",
    title: "Contact Form Collection",
    description:
      "Optionally collect name, email, or phone from respondents to follow up personally.",
  },
  {
    icon: "🔗",
    accent: "#FFAF51",
    title: "Instant Sharing",
    description:
      "Link, QR code, WhatsApp — one click gets your story in front of the right people.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Create Your Story",
    desc: "Pick a type — images or statements. Upload content and set response options in minutes.",
    img: imgTypeBtnResp,
    color: "#FF7F61",
  },
  {
    n: "02",
    title: "Share Anywhere",
    desc: "Copy a link, send via WhatsApp, email or QR code. Responses flow in immediately.",
    img: girlSending,
    color: "#6382F2",
  },
  {
    n: "03",
    title: "Read the Insights",
    desc: "See votes, comments, and trends in a clear analytics dashboard.",
    img: dataImg,
    color: "#25C7AA",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "We tested three logo concepts with our community before launch. Feezbak gave us clear winners in under 24 hours. Incredible.",
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
  { value: "< 2 min", label: "to launch your first story" },
  { value: "5", label: "story types to choose from" },
  { value: "∞", label: "responses, no limits" },
];

/* ─── animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

/* ─── component ─── */
const Landing = () => {
  const navigate = useNavigate();
  const authed = isAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-[#fafaf9] text-[#06060c] overflow-x-hidden">
      {/* ─── NAV ─── */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300",
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

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollTo("how")}
            className="text-sm font-medium text-[#847e95] hover:text-[#06060c] transition-colors px-3 py-2"
          >
            How it works
          </button>
          <button
            onClick={() => scrollTo("features")}
            className="text-sm font-medium text-[#847e95] hover:text-[#06060c] transition-colors px-3 py-2"
          >
            Features
          </button>
          <button
            onClick={() => navigate("/sign-in")}
            className="text-sm font-semibold px-4 py-2 rounded-full hover:bg-black/5 transition-colors"
          >
            Sign in
          </button>
          <button
            onClick={() => navigate("/sign-up")}
            className="text-sm font-bold px-5 py-2 rounded-full bg-[#06060c] text-white hover:bg-[#2a2a3a] transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* mobile hamburger */}
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

      {/* mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-b border-black/5 px-6 py-4 flex flex-col gap-3"
          >
            {["how", "features"].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left text-base font-medium py-2 text-[#06060c] capitalize"
              >
                {id === "how" ? "How it works" : "Features"}
              </button>
            ))}
            <div className="h-px bg-black/5 my-1" />
            <button
              onClick={() => navigate("/sign-in")}
              className="text-left text-base font-semibold py-2"
            >
              Sign in
            </button>
            <button
              onClick={() => navigate("/sign-up")}
              className="w-full text-center font-bold py-3 rounded-full bg-[#06060c] text-white"
            >
              Get Started Free →
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 px-6">
        {/* background beams */}
        <div className="absolute inset-0 pointer-events-none">
          <BackgroundBeams />
        </div>

        {/* sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          <SparklesCore
            particleDensity={60}
            particleColor="#FF7F61"
            minSize={0.3}
            maxSize={0.9}
          />
        </div>

        {/* blobs */}
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] pointer-events-none animate-pulse"
          style={{ background: "#FF7F61" }}
        />
        <div
          className="absolute top-1/3 -right-24 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] pointer-events-none"
          style={{ background: "#6382F2", animationDelay: "1s" }}
        />

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto"
          variants={stagger(0.08)}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#FF7F61] bg-[#FF7F61]/10 border border-[#FF7F61]/20 mb-8">
              ✨ Feedback, reimagined
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="mb-6">
            <TextGenerateEffect
              words="Turn feedback into your superpower"
              gradientWord="superpower"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-[#847e95] max-w-xl mx-auto leading-relaxed mb-10"
          >
            Create beautiful feedback stories. Share them instantly. Watch the
            insights roll in — all in one elegant place.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <MovingBorderButton
              onClick={() => navigate("/sign-up")}
              className="text-base"
              containerClassName="h-14"
            >
              Get Started Free →
            </MovingBorderButton>
            <button
              onClick={() => scrollTo("how")}
              className="h-14 px-8 rounded-full text-base font-semibold border border-black/10 bg-white hover:bg-black/5 transition-colors"
            >
              See How It Works
            </button>
          </motion.div>
        </motion.div>

        {/* hero mockup */}
        <motion.div
          className="relative z-10 mt-16 w-full max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl blur-2xl opacity-30"
              style={{
                background:
                  "linear-gradient(135deg, #FF7F61, #6382F2, #FFAF51)",
              }}
            />
            <div className="relative rounded-3xl overflow-hidden border border-white/60 shadow-2xl bg-white">
              <img
                src={combinedImg}
                alt="Feezbak story preview"
                className="w-full block"
              />
            </div>

            {/* floating badges */}
            <motion.div
              className="absolute -top-4 -right-2 sm:right-8 flex items-center gap-2 px-4 py-2.5 rounded-2xl text-white text-sm font-bold shadow-xl"
              style={{
                background: "linear-gradient(135deg,#FF7F61,#FF2976)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              🗳️ 142 responses
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-2 sm:left-8 flex items-center gap-2 px-4 py-2.5 rounded-2xl text-white text-sm font-bold shadow-xl"
              style={{
                background: "linear-gradient(135deg,#6382F2,#4B5EDB)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              ⚡ Live results
            </motion.div>

            <motion.div
              className="absolute bottom-12 -right-2 sm:-right-6 flex items-center gap-2 px-4 py-2.5 rounded-2xl text-white text-sm font-bold shadow-xl"
              style={{
                background: "linear-gradient(135deg,#25C7AA,#1aa88e)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              ✓ Shared via link
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how" className="py-24 px-6 bg-white">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-center text-xs font-bold uppercase tracking-widest text-[#FF7F61] mb-3"
          >
            How it works
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            Three steps to real feedback
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-center text-[#847e95] text-base sm:text-lg max-w-md mx-auto mb-16 leading-relaxed"
          >
            No complicated setup. No code. Just create, share, and collect.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-3xl p-6 border border-black/[0.06] bg-[#fafaf9] overflow-hidden group"
              >
                <div
                  className="absolute top-0 right-0 text-[8rem] font-black leading-none select-none pointer-events-none opacity-[0.06]"
                  style={{ color: s.color }}
                >
                  {s.n}
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-black mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)`,
                  }}
                >
                  {i + 1}
                </div>
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full rounded-2xl mb-5 object-cover"
                />
                <h3 className="font-bold text-lg mb-2 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-[#847e95] leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" className="py-24 px-6 bg-[#fafaf9]">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-center text-xs font-bold uppercase tracking-widest text-[#6382F2] mb-3"
          >
            Features
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            Everything you need
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-center text-[#847e95] text-base sm:text-lg max-w-md mx-auto mb-8 leading-relaxed"
          >
            Built for speed. Designed to impress respondents and delight you
            with results.
          </motion.p>

          <HoverEffect items={FEATURES} />
        </motion.div>
      </section>

      {/* ─── SPLIT PREVIEW ─── */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <motion.div
            className="flex-1 min-w-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="rounded-3xl overflow-hidden shadow-2xl border border-black/5"
              style={{
                background: "linear-gradient(135deg,#f4f3ff,#fff0ec)",
              }}
            >
              <img
                src={textTypeBtnResp}
                alt="Text story type"
                className="w-full block"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex-1 min-w-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF7F61] mb-3">
              Flexible formats
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Questions or images — you choose
            </h2>
            <p className="text-[#847e95] text-base leading-relaxed mb-8">
              Some ideas need pictures to come to life. Others just need a clear
              question. Feezbak handles both — and everything in between with
              the Combined type.
            </p>
            <button
              onClick={() => navigate("/sign-up")}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white text-base shadow-lg transition-transform hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg,#FF7F61,#FF2976)",
                boxShadow: "0 8px 24px rgba(255,127,97,0.4)",
              }}
            >
              Try It Free →
            </button>
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section
        className="py-24 overflow-hidden relative"
        style={{ background: "#06060c" }}
      >
        <div
          className="absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "#FF7F61" }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: "#6382F2" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-6"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#FF7F61] mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
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
      <section className="py-24 px-6 bg-[#fafaf9]">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
          >
            Built for real feedback
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-center text-[#847e95] mb-14 max-w-md mx-auto"
          >
            Simple enough to launch in minutes. Powerful enough to drive real
            decisions.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STATS.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="text-center p-8 rounded-3xl border border-black/[0.06] bg-white"
              >
                <div className="text-4xl sm:text-5xl font-black mb-2 bg-gradient-to-r from-[#FF7F61] to-[#FF2976] bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-sm text-[#847e95]">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative py-28 px-6 overflow-hidden bg-[#06060c]">
        <div
          className="absolute -top-32 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "#FF7F61" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: "#6382F2" }}
        />

        <motion.div
          className="relative z-10 max-w-2xl mx-auto text-center"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
            <SparklesCore
              className="h-24 mb-2"
              particleDensity={40}
              particleColor="#FF7F61"
            />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            Ready to collect feedback that{" "}
            <span className="bg-gradient-to-r from-[#FF7F61] to-[#FFAF51] bg-clip-text text-transparent">
              actually matters?
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-white/50 text-base sm:text-lg mb-10 leading-relaxed"
          >
            Join Feezbak today — free to start, takes less than two minutes to
            launch your first story.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MovingBorderButton
              onClick={() => navigate("/sign-up")}
              className="text-base"
              containerClassName="h-14"
            >
              Create Your First Story →
            </MovingBorderButton>
            <button
              onClick={() => navigate("/sign-in")}
              className="text-white/60 text-sm font-medium hover:text-white transition-colors"
            >
              Already have an account? Sign in →
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#06060c] border-t border-white/[0.06] px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-white/30 text-sm">
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
