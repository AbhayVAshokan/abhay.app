import { Font } from "@react-pdf/renderer";

Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/opensans/v13/IgZJs4-7SA1XX_edsoXWog.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/opensans/v13/MTP_ySUJH_bn48VBG8sNSi3USBnSvpkopQaUR-2r7iU.ttf",
      fontWeight: 600,
    },
    {
      src: "https://fonts.gstatic.com/s/opensans/v13/k3k702ZOKiLJc3WVjuplzC3USBnSvpkopQaUR-2r7iU.ttf",
      fontWeight: 700,
    },
  ],
});
