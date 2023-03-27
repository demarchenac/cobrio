import Link from "next/link";
import { motion } from "framer-motion";
import { type ISidebarLink } from "~/components/Sidebar/types";
import { useRouter } from "next/router";

interface SidebarProps {
  link: ISidebarLink;
  onClick: () => void;
}

const linkVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

export function SidebarLink({ link, onClick }: SidebarProps) {
  const router = useRouter();
  const isActive = link.path === router.pathname;
  const activeClasses = isActive ? "font-bold text-slate-300" : "";

  return (
    <motion.li
      className={`flex pb-1 ${activeClasses} transition-all hover:text-slate-100  focus:text-white focus:underline`}
      whileHover={{ translateX: 10 }}
      whileTap={{ translateX: 10 }}
      variants={linkVariants}
    >
      <Link
        href={link.path}
        className="flex items-center justify-center gap-1"
        onClick={onClick}
      >
        {link.icon} {link.text}
      </Link>
    </motion.li>
  );
}
