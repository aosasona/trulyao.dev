import { FC } from "react";
import { useRouter } from "next/router";
import { MdKeyboardBackspace } from "react-icons/md";

const Back: FC = () => {
  const router = useRouter();
  return (
    <div
      className="w-max flex items-center gap-2 text-faded hover:text-primary transition-all"
      onClick={() => {
        router.back();
      }}
    >
      <MdKeyboardBackspace size={22} />
      <p className="text-sm">Back</p>
    </div>
  );
};

export default Back;
