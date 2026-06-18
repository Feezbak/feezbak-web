import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";
import { Button } from "antd";

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33%       { transform: translateY(-18px) rotate(2deg); }
  66%       { transform: translateY(8px) rotate(-1.5deg); }
`;

const floatSlow = keyframes`
  0%, 100% { transform: translateY(0px) scale(1); }
  50%       { transform: translateY(-24px) scale(1.04); }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const blobMove = keyframes`
  0%, 100% { border-radius: 60% 40% 70% 30% / 50% 60% 40% 70%; transform: translate(0,0) scale(1); }
  25%       { border-radius: 40% 60% 30% 70% / 70% 40% 60% 30%; transform: translate(20px,-20px) scale(1.05); }
  50%       { border-radius: 70% 30% 60% 40% / 30% 70% 50% 60%; transform: translate(-10px,15px) scale(0.96); }
  75%       { border-radius: 30% 70% 40% 60% / 60% 30% 70% 40%; transform: translate(15px,5px) scale(1.02); }
`;

export const Page = styled.div`
  min-height: 100vh;
  background: #faf9f8;
  font-family: "Epilogue, Regular", sans-serif;
  overflow-x: hidden;
`;

/* ─── NAV ─── */
export const Nav = styled(motion.nav)<{ $solid: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem 4rem;
  transition: background 0.35s ease, box-shadow 0.35s ease,
    backdrop-filter 0.35s ease;

  ${({ $solid }) =>
    $solid
      ? css`
          background: rgba(250, 249, 248, 0.85);
          backdrop-filter: blur(16px);
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
        `
      : css`
          background: transparent;
        `}

  @media (max-width: 640px) {
    padding: 1rem 1.5rem;
  }
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  span {
    font-family: "Epilogue, ExtraBold", sans-serif;
    font-size: 1.3rem;
    font-weight: 800;
    background: linear-gradient(135deg, #ff7f61, #ff2976);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const NavSignIn = styled(Button)`
  font-weight: 600;
  border-radius: 999px;
`;

export const NavCta = styled(Button)`
  background: #06060c;
  color: #fff;
  border: none;
  border-radius: 999px;
  font-weight: 600;

  &:hover {
    background: #2a2a3a !important;
    color: #fff !important;
  }
`;

/* ─── HERO ─── */
export const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 7rem 4rem 5rem;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 6rem 1.5rem 4rem;
    text-align: center;
  }
`;

export const Blob = styled.div<{
  $color: string;
  $size: string;
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
  $delay?: string;
}>`
  position: absolute;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  background: ${({ $color }) => $color};
  top: ${({ $top }) => $top ?? "auto"};
  left: ${({ $left }) => $left ?? "auto"};
  right: ${({ $right }) => $right ?? "auto"};
  bottom: ${({ $bottom }) => $bottom ?? "auto"};
  filter: blur(70px);
  opacity: 0.35;
  animation: ${blobMove} 10s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay ?? "0s"};
  border-radius: 60% 40% 70% 30% / 50% 60% 40% 70%;
  pointer-events: none;
  z-index: 0;
`;

export const HeroLeft = styled(motion.div)`
  position: relative;
  z-index: 1;
  flex: 1;
  max-width: 600px;
`;

export const HeroEyebrow = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #fff0ec, #fff8f0);
  border: 1px solid #ffd0c0;
  border-radius: 999px;
  padding: 0.4rem 1rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: #ff7f61;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

export const HeroTitle = styled.h1`
  font-family: "Epilogue, ExtraBold", sans-serif;
  font-size: clamp(2.6rem, 5.5vw, 4.2rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #06060c;
  margin-bottom: 1.5rem;

  .gradient-text {
    background: linear-gradient(135deg, #ff7f61 0%, #ff2976 50%, #6382f2 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${shimmer} 4s linear infinite;
  }
`;

export const HeroSubtitle = styled(motion.p)`
  font-size: 1.15rem;
  line-height: 1.7;
  color: #847e95;
  max-width: 480px;
  margin-bottom: 2.5rem;

  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const HeroActions = styled(motion.div)`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const HeroCtaPrimary = styled(Button)`
  height: 3rem;
  padding: 0 2rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ff7f61, #ff2976);
  border: none;
  color: #fff;
  box-shadow: 0 8px 24px rgba(255, 127, 97, 0.38);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(255, 127, 97, 0.5) !important;
    color: #fff !important;
    background: linear-gradient(135deg, #ff7f61, #ff2976) !important;
  }
`;

export const HeroCtaSecondary = styled(Button)`
  height: 3rem;
  padding: 0 2rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  background: transparent;
  border: 1.5px solid #e0dde8;
  color: #06060c;

  &:hover {
    border-color: #06060c !important;
    color: #06060c !important;
  }
`;

export const HeroRight = styled(motion.div)`
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 3rem;

  @media (max-width: 900px) {
    padding-left: 0;
    margin-top: 3rem;
    width: 100%;
  }
`;

export const HeroMockup = styled.div`
  position: relative;
  width: 100%;
  max-width: 520px;
`;

export const MockupCard = styled(motion.div)`
  background: #fff;
  border-radius: 2rem;
  box-shadow: 0 40px 80px rgba(6, 6, 12, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  animation: ${floatSlow} 6s ease-in-out infinite;
`;

export const MockupImage = styled.img`
  width: 100%;
  display: block;
`;

export const FloatingBadge = styled(motion.div)<{ $bg: string }>`
  position: absolute;
  background: ${({ $bg }) => $bg};
  border-radius: 1rem;
  padding: 0.6rem 1rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  animation: ${float} 5s ease-in-out infinite;
`;

/* ─── SECTION SHARED ─── */
export const Section = styled.section`
  padding: 6rem 4rem;

  @media (max-width: 900px) {
    padding: 4rem 1.5rem;
  }
`;

export const SectionTag = styled(motion.div)`
  text-align: center;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #ff7f61;
  margin-bottom: 0.75rem;
`;

export const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-family: "Epilogue, ExtraBold", sans-serif;
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #06060c;
  margin-bottom: 1rem;
`;

export const SectionSubtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.05rem;
  color: #847e95;
  max-width: 520px;
  margin: 0 auto 3.5rem;
  line-height: 1.7;
`;

/* ─── HOW IT WORKS ─── */
export const HowSection = styled(Section)`
  background: #fff;
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    max-width: 420px;
  }
`;

export const StepCard = styled(motion.div)`
  text-align: center;
  padding: 2rem 1.5rem;
  border-radius: 1.5rem;
  background: #faf9f8;
  border: 1px solid #f0f0f4;
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.07);
    transform: translateY(-4px);
  }
`;

export const StepNumber = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #ff7f61, #ff2976);
  color: #fff;
  font-weight: 800;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
`;

export const StepImage = styled.img`
  width: 100%;
  max-width: 220px;
  margin: 0 auto 1.25rem;
  display: block;
  border-radius: 1rem;
`;

export const StepTitle = styled.h3`
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #06060c;
`;

export const StepDesc = styled.p`
  font-size: 0.9rem;
  color: #847e95;
  line-height: 1.6;
`;

/* ─── FEATURES ─── */
export const FeaturesSection = styled(Section)`
  background: #faf9f8;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled(motion.div)<{ $accent: string }>`
  padding: 2rem;
  border-radius: 1.5rem;
  background: #fff;
  border: 1px solid #f0f0f4;
  transition: box-shadow 0.25s, transform 0.25s;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.07);
    transform: translateY(-3px);
  }

  .icon-wrap {
    width: 3rem;
    height: 3rem;
    border-radius: 0.875rem;
    background: ${({ $accent }) => $accent}18;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-weight: 700;
    font-size: 1.05rem;
    margin-bottom: 0.4rem;
    color: #06060c;
  }

  p {
    font-size: 0.9rem;
    color: #847e95;
    line-height: 1.6;
    margin: 0;
  }
`;

/* ─── SOCIAL PROOF ─── */
export const ProofSection = styled(Section)`
  background: #fff;
`;

export const ProofGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  border-radius: 1.5rem;
  background: linear-gradient(135deg, #faf9f8, #f4f3f8);
  border: 1px solid #f0f0f4;

  .number {
    font-family: "Epilogue, ExtraBold", sans-serif;
    font-size: 2.8rem;
    font-weight: 800;
    background: linear-gradient(135deg, #ff7f61, #ff2976);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .label {
    font-size: 0.9rem;
    color: #847e95;
    font-weight: 500;
  }
`;

/* ─── CTA SECTION ─── */
export const CtaSection = styled.section`
  position: relative;
  padding: 7rem 4rem;
  overflow: hidden;
  background: #06060c;

  @media (max-width: 900px) {
    padding: 5rem 1.5rem;
  }
`;

export const CtaBlob = styled.div<{
  $color: string;
  $size: string;
  $top?: string;
  $left?: string;
  $right?: string;
}>`
  position: absolute;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  background: ${({ $color }) => $color};
  top: ${({ $top }) => $top ?? "auto"};
  left: ${({ $left }) => $left ?? "auto"};
  right: ${({ $right }) => $right ?? "auto"};
  filter: blur(90px);
  opacity: 0.25;
  border-radius: 50%;
  pointer-events: none;
`;

export const CtaInner = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 640px;
  margin: 0 auto;

  h2 {
    font-family: "Epilogue, ExtraBold", sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    color: #fff;
    letter-spacing: -0.03em;
    margin-bottom: 1rem;
    line-height: 1.15;
  }

  p {
    font-size: 1.05rem;
    color: rgba(255, 255, 255, 0.55);
    margin-bottom: 2.5rem;
    line-height: 1.7;
  }
`;

export const CtaButton = styled(Button)`
  height: 3.2rem;
  padding: 0 2.5rem;
  border-radius: 999px;
  font-size: 1.05rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ff7f61, #ff2976);
  border: none;
  color: #fff;
  box-shadow: 0 8px 32px rgba(255, 127, 97, 0.45);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 40px rgba(255, 127, 97, 0.6) !important;
    color: #fff !important;
    background: linear-gradient(135deg, #ff7f61, #ff2976) !important;
  }
`;

/* ─── FOOTER ─── */
export const Footer = styled.footer`
  background: #06060c;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  padding: 2rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 0.75rem;
    padding: 2rem 1.5rem;
    text-align: center;
  }

  span {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.3);
  }
`;
