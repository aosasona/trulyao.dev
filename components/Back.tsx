import { FC } from "react";
import { useRouter } from "next/router";
import { IoChevronBack } from "react-icons/io5";

interface Props {
  url?: string;
  bg?: boolean;
}
const Back: FC<Props> = ({ url, bg = true }) => {
  const router = useRouter();
  return (
    <div
      className={`w-7 aspect-square flex items-center justify-center hover:scale-90 transition-all cursor-pointer my-3 ${
        bg ? "bg-neutral-800 bg-opacity-50" : ""
      }`}
      onClick={() => (url ? router.push(url) : router.back())}
    >
      <IoChevronBack size={18} className="cursor-pointer" />
    </div>
  );
};

export default Back;
