import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";

const CardWrapper = styled(Card)({
  background: "#193d7d",
  marginBottom: 24,
});

const nutritionFacts = [
  {
    label: "Daily Return",
    value: 8,
  },
  {
    label: "APR",
    value: "2,920",
  },
  {
    label: "Fee",
    value: 5,
  },
];

export default function NutritionFacts() {
  return (
    <CardWrapper>
      <CardContent>
        <Typography variant="h5" borderBottom="6px solid" paddingBottom={1}>
          Race Statistics
        </Typography>
        <Box paddingTop={2}>
          {nutritionFacts.map((f) => (
            <Grid container key={f.label} justifyContent="space-between">
              <Typography variant="body1" gutterBottom>
                {f.label}
              </Typography>
              <Typography gutterBottom>{f.value}%</Typography>
            </Grid>
          ))}
        </Box>
      </CardContent>
    </CardWrapper>
  );
}
