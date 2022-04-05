import { FiTrash2 } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { RiInboxArchiveLine } from "react-icons/ri";

const sidebarData = [
  {
    title: "Archives",
    Icon: RiInboxArchiveLine,
    navigate: "/archives",
  },
  {
    title: "Trash",
    Icon: FiTrash2,
    navigate: "/trash",
  },
  {
    title: "Profile",
    Icon: CgProfile,
    navigate: "/profile",
  },
];

export default sidebarData;
