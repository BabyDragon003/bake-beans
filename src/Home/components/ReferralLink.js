import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";

const CardWrapper = styled(Card)({
  background: "#193d7d",
});

const Input = styled("input")(({ theme }) => ({
  fontSize: 10,
  fontWeight: 300,
  padding: "10px 12px",
  borderRadius: 0,
        <Input value={address ? link : ""} readOnly />
        <Typography
          textAlign="center"
          variant="body2"
          marginTop={2}
          paddingX={3}
        >
          Earn 6% of the PSTN from anyone who uses your referral link
        </Typography>
      </CardContent>
    </CardWrapper>
  );
}
