import GithubIcon from "../components/icons/GithubIcon";
import InstagramIcon from "../components/icons/InstagramIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import BehanceIcon from "../components/icons/BehanceIcon";

export const socials = [
  { name: "LinkedIn",  href: "https://linkedin.com/in/jorikvanruiswijk",   Icon: LinkedinIcon  },
  { name: "GitHub",    href: "https://github.com/HalloJo",                  Icon: GithubIcon    },
  { name: "Instagram", href: "https://instagram.com/jorik.tsx",             Icon: InstagramIcon },
  { name: "Behance",   href: "https://www.behance.net/HiJorikVanRuiswijk",  Icon: BehanceIcon   },
] as const;
