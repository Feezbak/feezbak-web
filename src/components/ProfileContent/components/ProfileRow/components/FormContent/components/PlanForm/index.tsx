import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userData } from "@/recoil";
import { opacityAnimation } from "@assets/framerAnimations";
import { motion } from "framer-motion";
import UpgradeModal from "@/components/UpgradeModal";
import styled from "styled-components";
import { StyleEnums } from "@/enums";

const Container = styled(motion.div)`
  padding: 2rem 0;
`;

const PlanCard = styled.div<{ $isPro: boolean }>`
  border: 2px solid
    ${({ $isPro }) => ($isPro ? StyleEnums.primary : StyleEnums.gray4)};
  border-radius: 1rem;
  padding: 1.5rem;
  max-width: 28rem;
`;

const PlanTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
`;

const PlanBadge = styled.span<{ $isPro: boolean }>`
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  background: ${({ $isPro }) =>
    $isPro ? StyleEnums.primary : StyleEnums.gray4};
  color: ${({ $isPro }) => ($isPro ? StyleEnums.white : StyleEnums.gray2)};
  margin-bottom: 1rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 1.5rem;
`;

const Feature = styled.li<{ $available: boolean }>`
  font-size: 0.9rem;
  padding: 0.3rem 0;
  color: ${({ $available }) =>
    $available ? StyleEnums.gray1 : StyleEnums.gray3};
  &::before {
    content: "${({ $available }) => ($available ? "✓" : "✗")} ";
    font-weight: 700;
    color: ${({ $available }) =>
      $available ? StyleEnums.primary : StyleEnums.gray3};
  }
`;

const UpgradeButton = styled.button`
  background: ${StyleEnums.primary};
  color: ${StyleEnums.white};
  border: none;
  border-radius: 0.5rem;
  padding: 0.65rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.88;
  }
`;

const ProNote = styled.p`
  font-size: 0.85rem;
  color: ${StyleEnums.gray2};
  margin: 0;
`;

const FREE_FEATURES = [
  { label: "Up to 3 feedback stories", available: true },
  { label: "Basic analytics", available: true },
  { label: "Feezbak watermark", available: true },
  { label: "Unlimited stories", available: false },
  { label: "Send invitation links via email", available: false },
  { label: "Remove watermark", available: false },
  { label: "Export feedbacks as CSV", available: false },
];

const PRO_FEATURES = [
  { label: "Unlimited feedback stories", available: true },
  { label: "Full analytics & responses", available: true },
  { label: "Send invitation links via email", available: true },
  { label: "Remove Feezbak watermark", available: true },
  { label: "Export feedbacks as CSV", available: true },
];

const PlanForm = () => {
  const user = useRecoilValue(userData);
  const isPro = user.plan === "pro";
  const [showUpgrade, setShowUpgrade] = useState(false);

  return (
    <Container {...opacityAnimation}>
      <PlanCard $isPro={isPro}>
        <PlanBadge $isPro={isPro}>{isPro ? "Pro" : "Free"}</PlanBadge>
        <PlanTitle>{isPro ? "You're on Pro" : "Free Plan"}</PlanTitle>
        <FeatureList>
          {(isPro ? PRO_FEATURES : FREE_FEATURES).map((f) => (
            <Feature key={f.label} $available={f.available}>
              {f.label}
            </Feature>
          ))}
        </FeatureList>
        {isPro ? (
          <ProNote>
            Thank you for supporting Feezbak! Your plan renews automatically.
          </ProNote>
        ) : (
          <UpgradeButton onClick={() => setShowUpgrade(true)}>
            Upgrade to Pro — $5 / month
          </UpgradeButton>
        )}
      </PlanCard>
      <UpgradeModal open={showUpgrade} onClose={() => setShowUpgrade(false)} />
    </Container>
  );
};

export default PlanForm;
