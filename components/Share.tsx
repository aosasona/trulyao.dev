import type { FC } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "react-share";
import {
  FaFacebookF,
  FaTelegram,
  FaTelegramPlane,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import ShareButton from "./ShareButton";

interface Props {
  article: any;
}

const Share: FC<Props> = ({ article }) => {
  return (
    <>
      <div className="h-[2px] w-full bg-neutral-800 mb-4 lg:my-5" />
      <h1 className="text-xl opacity-70 px-1 my-5">Share Via</h1>
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-3">
        <FacebookShareButton
          url={`https://www.trulyao.dev/blog/${article?.slug}`}
          quote={article?.title}
        >
          <ShareButton icon={<FaFacebookF size={19} />}>Facebook</ShareButton>
        </FacebookShareButton>

        <TwitterShareButton
          url={`https://www.trulyao.dev/blog/${article?.slug}`}
          title={article?.title}
          related={["trulyao", "frikax", "breegehq"]}
        >
          <ShareButton icon={<FaTwitter size={19} />}>Twitter</ShareButton>
        </TwitterShareButton>

        <WhatsappShareButton
          url={`https://www.trulyao.dev/blog/${article?.slug}`}
          title={article?.title}
          separator=" - "
        >
          <ShareButton icon={<FaWhatsapp size={19} />}>Whatsapp</ShareButton>
        </WhatsappShareButton>

        <TelegramShareButton
          url={`https://www.trulyao.dev/blog/${article?.slug}`}
          title={article?.title}
        >
          <ShareButton icon={<FaTelegramPlane size={19} />}>
            Telegram
          </ShareButton>
        </TelegramShareButton>
      </div>
    </>
  );
};

export default Share;
