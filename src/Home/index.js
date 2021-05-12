import { styled } from "@mui/system";

import Connect from "./components/Connect";
import Header from "./components/Header";
import BakeCard from "./components/BakeCard";
import NutritionFacts from "./components/NutritionFacts";
import ReferralLink from "./components/ReferralLink";
import { useAuthContext } from "../providers/AuthProvider";
import Footer from "./components/Footer";

  return (
    <Wrapper>
      <Connect />
      <Header />
      <BakeCard />
      <NutritionFacts />
      <ReferralLink address={address} />
      <Footer />
    </Wrapper>
  );
}
