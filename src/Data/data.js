const HEADER = "Kasheesh";

const NAVBAR_DATA = [
  { id: 1, url: "#services", label: "Services" },
  { id: 2, url: "#about-us", label: "About" },
  { id: 4, url: "#footer", label: "Contact" }
];

const BANNER_DATA = {
  HEADING: "Maximize your credit",
  DECRIPTION:
    "Kasheesh can help you maximize your credit without impacting your credit rating. Buy more with what you already have.",
  TUTORIAL_URL:
    "https://www.thinkwithgoogle.com/intl/en-gb/marketing-resources/programmatic/google-digital-academy/",
  WATCH_TUTORIAL: "Watch Tutorials"
};

const SERVICE_DATA = {
  HEADING: "Our Services",
  SERVICE_LIST: [
    {
      LABEL: "Combine your credit",
      DESCRIPTION:
        "Tired of not being able to purchase online due to credit card limits? What if you could combine the credit of all your cards into one? With Kasheesh, we provide you with the ability to leverage the combined limit of all your credit cards.",
      URL: "images/service1.png"
    },
    {
      LABEL: "No messy applications",
      DESCRIPTION:
        "No need for applying for a new credit card or personal loan. No credit checks required. This is not a new credit card. This is using your existing credit. We don't do messy applications or credit checks. We simply use the credit you already have.",
      URL: "images/service2.png"
    },
    {
      LABEL: "Online Shopping",
      DESCRIPTION:
        "What if you could spread you online purchases across all your credit cards? You can! That's what Kasheesh empowers you to do. Just sign up and use all your exisiting credit cards at once, for all your online purchasing.",
      URL: "images/service3.png"
    }
  ]
};

const ABOUT_DATA = {
  HEADING: "Why choose us?",
  TITLE: "Why we're different",
  IMAGE_URL: "images/network.png",
  WHY_CHOOSE_US_LIST: [
      "No application process",
      "Uses your existing credit",
      "Increase your credit limit",
      "Clear & transparent fee structure.",
  ]
};

const FOOTER_DATA = {
  DESCRIPTION:
    "We are focused on letting you, our customer, spend the credit you already have in your wallet.",
  CONTACT_DETAILS: {
    HEADING: "Contact us",
    ADDRESS: "18 Greene Lane, White Plains, NY",
    MOBILE: "+1 212 555 1212",
    EMAIL: "info@kasheesh.co"
  },
  SUBSCRIBE_NEWSLETTER: "Subscribe to our newsletter",
  SUBSCRIBE: "Subscribe"
};

const MOCK_DATA = {
  HEADER,
  NAVBAR_DATA,
  BANNER_DATA,
  SERVICE_DATA,
  ABOUT_DATA,
  FOOTER_DATA
};
export default MOCK_DATA;
