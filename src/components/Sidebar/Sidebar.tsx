import { useClerk, useUser } from "@clerk/nextjs";
import { AnimatePresence, motion } from "framer-motion";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { GoSignOut } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { SidebarLink } from "~/components/Sidebar/SidebarLink";
import { type ISidebarLink } from "~/components/Sidebar/types";
import { useIsSM } from "~/hooks/utils";

const links: ISidebarLink[] = [
  {
    path: "/client/debts",
    text: "Deudas",
    icon: <GiMoneyStack size={16} />,
  },
  {
    path: "/client/contacts",
    text: "Contactos",
    icon: <BsFillPeopleFill size={16} />,
  },
];

const sidebarVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

interface SidebarProps {
  isVisible: boolean;
  onClose: () => void;
}

export function Sidebar({ isVisible, onClose }: SidebarProps) {
  const user = useUser();
  const isSM = useIsSM();
  const { signOut } = useClerk();

  if (!user.isSignedIn) {
    return <></>;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ width: 0 }}
          animate={{
            opacity: 1,
            width: isSM ? "25%" : "75%",
          }}
          exit={{
            opacity: 0,
            width: 0,
            transition: { delay: 0.7, duration: 0.3 },
          }}
          className="fixed top-0 left-0 z-20 flex h-screen flex-col rounded-r-3xl border-none bg-slate-900 shadow-sm"
        >
          <motion.div
            className="container"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
          >
            {/* Heading */}
            <div className="flex items-center justify-between p-4">
              <h2 className="text-xl text-white">Men&uacute;</h2>
              <button
                type="button"
                className="-my-10 box-content h-6 w-6 rounded-none border-none text-white hover:text-white hover:no-underline focus:shadow-none focus:outline-none"
                aria-label="Close"
                onClick={onClose}
              >
                <IoMdClose size={20} />
              </button>
            </div>

            <div className="mx-auto h-[1px] w-11/12 bg-gray-500 shadow-lg shadow-white" />

            {/* Body */}
            <div className="flex flex-col overflow-y-auto p-4 text-slate-500">
              <ul>
                {links.map((link) => (
                  <SidebarLink key={link.path} link={link} onClick={onClose} />
                ))}
              </ul>
            </div>

            {/* Signout Btn */}
            <div className="mt-auto flex flex-col overflow-y-auto p-4">
              <button
                onClick={() => void signOut()}
                className="flex border-spacing-2 items-center justify-center gap-1 rounded-md border-2 bg-white px-4 py-2
                text-zinc-900  transition-transform hover:border-red-600 hover:bg-gray-200 hover:ring-4
                hover:ring-red-200/50  focus:scale-95 focus:bg-gray-400"
              >
                <GoSignOut size={20} className="fill-red-500 pt-[4px]" /> Cerrar
                sesi&oacute;n
              </button>
            </div>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
