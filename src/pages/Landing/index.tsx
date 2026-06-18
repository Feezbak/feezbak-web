import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { isAuth } from "@/hooks";

import imgTypeBtnResp from "@images/image-type-btn-resp.webp";
import girlSending from "@images/girl-sending-message.webp";
import dataImg from "@images/data.webp";
import combinedImg from "@images/combined-type.webp";
import textTypeBtnResp from "@images/text-type-btn-resp.webp";

import {
  Page,
  Nav,
  NavLogo,
  NavLinks,
  NavSignIn,
  NavCta,
  HeroSection,
  Blob,
  HeroLeft,
  HeroEyebrow,
  HeroTitle,
  HeroSubtitle,
  HeroActions,
  HeroCtaPrimary,
  HeroCtaSecondary,
  HeroRight,
  HeroMockup,
  MockupCard,
  MockupImage,
  FloatingBadge,
  SectionTag,
  SectionTitle,
  SectionSubtitle,
  HowSection,
  StepsGrid,
  StepCard,
  StepNumber,
  StepImage,
  StepTitle,
  StepDesc,
  FeaturesSection,
  FeaturesGrid,
  FeatureCard,
  ProofSection,
  ProofGrid,
  StatCard,
  CtaSection,
  CtaBlob,
  CtaInner,
  CtaButton,
  Footer,
} from "./styles";

/* ─── animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = (stagger = 0.12) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } },
});

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ─── animated section wrapper ─── */
const AnimSection = ({
  children,
  variants = staggerContainer(),
}: {
  children: React.ReactNode;
  variants?: any;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

/* ─── data ─── */
const STEPS = [
  {
    n: 1,
    title: "Create Your Story",
    desc: "Pick a type — images or statements. Upload content and set up response options in minutes.",
    img: imgTypeBtnResp,
  },
  {
    n: 2,
    title: "Share Anywhere",
    desc: "Copy a link, send it via WhatsApp, email or QR code. Responses start flowing in immediately.",
    img: girlSending,
  },
  {
    n: 3,
    title: "Read the Insights",
    desc: "See votes, comments, and trends in a clear analytics dashboard. Export or share results.",
    img: dataImg,
  },
];

const FEATURES = [
  {
    icon: "🎨",
    accent: "#FF7F61",
    title: "Multiple Story Types",
    desc: "Image voting, text questions, or combined — choose the format that fits your feedback goal.",
  },
  {
    icon: "⚡",
    accent: "#6382F2",
    title: "Real-Time Analytics",
    desc: "Votes and comments land in your dashboard the moment they're submitted. No refresh needed.",
  },
  {
    icon: "📋",
    accent: "#25C7AA",
    title: "Contact Form Collection",
    desc: "Optionally collect name, email, or phone from respondents to follow up personally.",
  },
  {
    icon: "🔗",
    accent: "#FFAF51",
    title: "Instant Sharing",
    desc: "Link, QR code, WhatsApp — one click gets your story in front of the right people.",
  },
];

/* ─── component ─── */
const Landing = () => {
  const navigate = useNavigate();
  const authed = isAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (authed) navigate("/dashboard", { replace: true });
  }, [authed, navigate]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToHow = () => {
    document.getElementById("how")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Page>
      {/* ── NAV ── */}
      <Nav
        $solid={scrolled}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <NavLogo
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span>Feezbak</span>
        </NavLogo>
        <NavLinks>
          <NavSignIn type="text" onClick={() => navigate("/sign-in")}>
            Sign in
          </NavSignIn>
          <NavCta type="primary" onClick={() => navigate("/sign-up")}>
            Get Started
          </NavCta>
        </NavLinks>
      </Nav>

      {/* ── HERO ── */}
      <HeroSection>
        <Blob $color="#FF7F61" $size="500px" $top="-100px" $left="-150px" />
        <Blob
          $color="#6382F2"
          $size="400px"
          $top="30%"
          $right="-100px"
          $delay="3s"
        />
        <Blob
          $color="#FFAF51"
          $size="300px"
          $bottom="-50px"
          $left="30%"
          $delay="6s"
        />

        <HeroLeft
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="show"
        >
          <HeroEyebrow variants={fadeUp}>✨ Feedback, reimagined</HeroEyebrow>

          <motion.div variants={fadeUp}>
            <HeroTitle>
              Turn feedback into your{" "}
              <span className="gradient-text">superpower</span>
            </HeroTitle>
          </motion.div>

          <HeroSubtitle variants={fadeUp}>
            Create beautiful feedback stories. Share them instantly. Watch the
            insights roll in — all in one place.
          </HeroSubtitle>

          <HeroActions variants={fadeUp}>
            <HeroCtaPrimary size="large" onClick={() => navigate("/sign-up")}>
              Get Started Free →
            </HeroCtaPrimary>
            <HeroCtaSecondary size="large" onClick={scrollToHow}>
              See How It Works
            </HeroCtaSecondary>
          </HeroActions>
        </HeroLeft>

        <HeroRight variants={fadeRight} initial="hidden" animate="show">
          <HeroMockup>
            <MockupCard>
              <MockupImage src={combinedImg} alt="Feezbak story preview" />
            </MockupCard>

            <FloatingBadge
              $bg="linear-gradient(135deg,#FF7F61,#FF2976)"
              style={{ top: "-1rem", right: "1rem" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              🗳️ 142 responses
            </FloatingBadge>

            <FloatingBadge
              $bg="linear-gradient(135deg,#6382F2,#4B5EDB)"
              style={{
                bottom: "1.5rem",
                left: "-1.5rem",
                animationDelay: "1.5s",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              ⚡ Live results
            </FloatingBadge>

            <FloatingBadge
              $bg="linear-gradient(135deg,#25C7AA,#1aa88e)"
              style={{ bottom: "5rem", right: "-1rem", animationDelay: "3s" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              ✓ Shared via link
            </FloatingBadge>
          </HeroMockup>
        </HeroRight>
      </HeroSection>

      {/* ── HOW IT WORKS ── */}
      <HowSection id="how">
        <AnimSection>
          <motion.div variants={fadeUp}>
            <SectionTag>How it works</SectionTag>
          </motion.div>
          <motion.div variants={fadeUp}>
            <SectionTitle>Three steps to real feedback</SectionTitle>
          </motion.div>
          <motion.div variants={fadeUp}>
            <SectionSubtitle>
              No complicated setup. No code. Just create, share, and collect.
            </SectionSubtitle>
          </motion.div>
        </AnimSection>

        <AnimSection variants={staggerContainer(0.15)}>
          <StepsGrid>
            {STEPS.map((s) => (
              <StepCard
                key={s.n}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <StepNumber>{s.n}</StepNumber>
                <StepImage src={s.img} alt={s.title} />
                <StepTitle>{s.title}</StepTitle>
                <StepDesc>{s.desc}</StepDesc>
              </StepCard>
            ))}
          </StepsGrid>
        </AnimSection>
      </HowSection>

      {/* ── FEATURES ── */}
      <FeaturesSection>
        <AnimSection>
          <motion.div variants={fadeUp}>
            <SectionTag>Features</SectionTag>
          </motion.div>
          <motion.div variants={fadeUp}>
            <SectionTitle>Everything you need, nothing you don't</SectionTitle>
          </motion.div>
          <motion.div variants={fadeUp}>
            <SectionSubtitle>
              Built for speed. Designed to impress your respondents and delight
              you with the results.
            </SectionSubtitle>
          </motion.div>
        </AnimSection>

        <AnimSection variants={staggerContainer(0.1)}>
          <FeaturesGrid>
            {FEATURES.map((f) => (
              <FeatureCard
                key={f.title}
                $accent={f.accent}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="icon-wrap">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </AnimSection>
      </FeaturesSection>

      {/* ── PREVIEW SPLIT ── */}
      <HowSection style={{ background: "#fff" }}>
        <AnimSection variants={staggerContainer(0.15)}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4rem",
              maxWidth: 1000,
              margin: "0 auto",
              flexWrap: "wrap",
            }}
          >
            <motion.div variants={fadeLeft} style={{ flex: 1, minWidth: 280 }}>
              <div
                style={{
                  background: "linear-gradient(135deg,#f4f3ff,#fff0ec)",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src={textTypeBtnResp}
                  alt="Text story type"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </motion.div>

            <motion.div variants={fadeRight} style={{ flex: 1, minWidth: 260 }}>
              <SectionTag style={{ textAlign: "left" }}>
                Flexible formats
              </SectionTag>
              <SectionTitle
                style={{
                  textAlign: "left",
                  fontSize: "clamp(1.6rem,3vw,2.2rem)",
                }}
              >
                Questions or images — you choose
              </SectionTitle>
              <SectionSubtitle
                style={{ textAlign: "left", margin: "0 0 1.5rem" }}
              >
                Some ideas need pictures to come to life. Others just need a
                clear question. Feezbak handles both — and everything in between
                with the Combined type.
              </SectionSubtitle>
              <HeroCtaPrimary onClick={() => navigate("/sign-up")}>
                Try It Free →
              </HeroCtaPrimary>
            </motion.div>
          </div>
        </AnimSection>
      </HowSection>

      {/* ── STATS ── */}
      <ProofSection>
        <AnimSection>
          <motion.div variants={fadeUp}>
            <SectionTitle>Built for real feedback</SectionTitle>
          </motion.div>
          <motion.div variants={fadeUp}>
            <SectionSubtitle>
              Simple enough to launch in minutes. Powerful enough to drive real
              decisions.
            </SectionSubtitle>
          </motion.div>
        </AnimSection>

        <AnimSection variants={staggerContainer(0.12)}>
          <ProofGrid>
            {[
              { n: "< 2 min", label: "to create your first story" },
              { n: "5 types", label: "of feedback stories" },
              { n: "∞", label: "responses, no limits" },
            ].map((s) => (
              <StatCard key={s.label} variants={fadeUp}>
                <div className="number">{s.n}</div>
                <div className="label">{s.label}</div>
              </StatCard>
            ))}
          </ProofGrid>
        </AnimSection>
      </ProofSection>

      {/* ── CTA ── */}
      <CtaSection>
        <CtaBlob $color="#FF7F61" $size="400px" $top="-100px" $left="-100px" />
        <CtaBlob $color="#6382F2" $size="350px" $top="0" $right="-80px" />
        <CtaBlob $color="#FFAF51" $size="250px" $top="50%" $left="40%" />

        <AnimSection>
          <motion.div variants={fadeUp}>
            <CtaInner>
              <h2>Ready to collect feedback that actually matters?</h2>
              <p>
                Join Feezbak today — it's free to start and takes less than two
                minutes to launch your first story.
              </p>
              <CtaButton size="large" onClick={() => navigate("/sign-up")}>
                Create Your First Story →
              </CtaButton>
            </CtaInner>
          </motion.div>
        </AnimSection>
      </CtaSection>

      {/* ── FOOTER ── */}
      <Footer>
        <span>© {new Date().getFullYear()} Feezbak. All rights reserved.</span>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/sign-in")}
        >
          Sign in →
        </span>
      </Footer>
    </Page>
  );
};

export default Landing;
