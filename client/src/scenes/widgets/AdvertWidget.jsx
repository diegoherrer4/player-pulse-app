import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://aws-s3-playerpulse-bucket.s3.amazonaws.com/ad-litter.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Purrfect Litter</Typography>
        <Typography color={medium}>purrfectlitter.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Welcome to the world of clean and odor-free homes with our premium cat
        litter. Our cat litter is your pathway to a spotless and hygienic home,
        where your cat can comfortably relieve themselves without leaving any
        unpleasant odors behind.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
