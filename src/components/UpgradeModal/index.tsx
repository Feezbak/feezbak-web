import { Modal, Button } from "antd";
import { getBillingCheckoutUrl } from "@/api";
import useRequest from "@ahooksjs/use-request";
import styled from "styled-components";
import { StyleEnums } from "@/enums";

const Feature = styled.li`
  padding: 0.35rem 0;
  &::before {
    content: "✓ ";
    color: ${StyleEnums.primary};
    font-weight: 700;
  }
`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: ${StyleEnums.primary};
  margin: 1rem 0 0.25rem;
`;

const Period = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: #888;
`;

interface Props {
  open: boolean;
  onClose: () => void;
  reason?: string;
}

const UpgradeModal = ({ open, onClose, reason }: Props) => {
  const { run: goToCheckout, loading } = useRequest(getBillingCheckoutUrl, {
    manual: true,
    onSuccess: (res) => {
      window.location.href = res.data.url;
    },
  });

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={420}
      title="Upgrade to Pro"
    >
      {reason && (
        <p style={{ color: "#888", marginBottom: "1rem" }}>{reason}</p>
      )}
      <Price>
        $5<Period> / month</Period>
      </Price>
      <ul style={{ listStyle: "none", padding: 0, margin: "1rem 0 1.5rem" }}>
        <Feature>Unlimited stories</Feature>
        <Feature>Remove Feezbak watermark</Feature>
        <Feature>Send invitation links via email</Feature>
        <Feature>Full analytics & responses</Feature>
        <Feature>Export feedbacks as CSV</Feature>
      </ul>
      <Button
        type="primary"
        size="large"
        block
        loading={loading}
        onClick={() => goToCheckout()}
      >
        Upgrade Now
      </Button>
    </Modal>
  );
};

export default UpgradeModal;
