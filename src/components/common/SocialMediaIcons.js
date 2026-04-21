//ak-components
//SocialMediaIcons v0.1 2024-11-24 08:23:46

import {
  FacebookIcon,
  InstagramSolidIcon,
  TwitterSolidIcon,
  YouTubeSolidIcon,
} from "./Icons";

const SocialMediaIcons = (height = "25px", width = "25px") => {
  return [
    {
      href: "",
      label: "Facebook",
      icon: <FacebookIcon fill="#fff" height={height} width={width} />,
    },
    {
      href: "",
      label: "Instagram",
      icon: <InstagramSolidIcon fill="#fff" height={height} width={width} />,
    },
    {
      href: "",
      label: "Twitter",
      icon: <TwitterSolidIcon fill="#fff" height={height} width={width} />,
    },
    {
      href: "",
      label: "YouTube",
      icon: <YouTubeSolidIcon fill="#fff" height={height} width={width} />,
    },
  ];
};

export default SocialMediaIcons;
