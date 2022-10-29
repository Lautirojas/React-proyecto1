import { memo } from "react";
import InfoFooter from "../layouts/infoFooter";
import "../../css/footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <InfoFooter />
    </div>
  );
};

export default memo(Footer);
