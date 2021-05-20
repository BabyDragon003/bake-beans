import Button from "@mui/material/Button";
import { styled } from "@mui/system";

import { useAuthContext } from "../../providers/AuthProvider";

const ConnectButton = styled(Button)(({ theme }) => ({
  position: "fixed",
  right: 48,
  top: 48,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const SmallScreenConnectButton = styled(Button)(({ theme }) => ({
      variant="contained"
      disabled={loading}
      onClick={() => (address ? disconnect() : connect())}
    >
      {address ? "Disconnect" : "Connect"}
    </ConnectButton>
  ) : (
    <SmallScreenConnectButton
      variant="contained"
      disabled={loading}
      onClick={() => (address ? disconnect() : connect())}
    >
      {address ? "Disconnect" : "Connect"}
    </SmallScreenConnectButton>
  );
}
