import { useState, FC } from "react";
import Back from "@/components/Back";
import Meta from "@/defaults/Meta";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "config/api";
import Loader from "@/components/Loader";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

interface ArticleInterface {
  title: string;
  content?: string;
  description: string;
  password: string;
}
interface StatusInterface {
  error: boolean;
  loading: boolean;
  success: boolean;
}

const Create: FC<null> = () => {
  //DATA STATES
  const [Article, setArticle] = useState<ArticleInterface>({
    title: "",
    description: "",
    password: "",
  });
  const [Content, setContent] = useState<string>("");

  //STATUS
  const [Status, setStatus] = useState<StatusInterface>({
    error: false,
    loading: false,
    success: false,
  });

  //ACTION
  const formHandler = async () => {
    if (confirm("Are you sure you want to publish article?")) {
      if (!(Article.title && Content && Article.description)) {
        toast.error("All fields are required!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      } else if (!Article.password) {
        toast.error("Password is required!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      } else {
        setStatus({ ...Status, loading: true });
        const Body: ArticleInterface = {
          title: Article.title,
          content: Content,
          description: Article.description,
          password: Article.password,
        };
        const data = JSON.stringify(Body);
        console.log(data);
        const url = `${API_URL}/articles`;

        //SEND THE REQUEST
        const query = await fetch(url, {
          body: data,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        const response = await query.json();

        if (query.ok) {
          toast.success("Article uploaded!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
          });
          setStatus({ ...Status, loading: false });
        } else {
          toast.error(response?.message || "Something went wrong", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
          });
          setStatus({ ...Status, loading: false });
        }
      }
    }
  };

  return (
    <div>
      <Meta title="Create" desc="Not your business." />
      <main className="w-[90%] lg:w-3/6 2xl:w-3/6 mx-auto mt-[6vh] lg:mt-[9vh] overflow-x-hidden">
        <Back />
        <h1 className="text-4xl lg:text-5xl my-5">Create</h1>
        <p className="text-xs">
          Another time to give them a peek into my world...
        </p>
        <section className="mt-10 mb-[4vh] mx-auto">
          <input
            type="text"
            name="Title"
            value={Article.title}
            onChange={(e) => setArticle({ ...Article, title: e.target.value })}
            required={true}
            placeholder="Title"
            className="w-full bg-neutral-700 text-neutral-100 focus:border-[1px] focus:border-neutral-400 focus:outline-none text-sm placeholder-neutral-500 py-5 px-4"
          />
          <textarea
            name="Description"
            value={Article.description}
            onChange={(e) =>
              setArticle({ ...Article, description: e.target.value })
            }
            required={true}
            placeholder="Description"
            className="w-full bg-neutral-700 text-neutral-100 focus:border-[1px] focus:border-neutral-400 focus:outline-none text-sm placeholder-neutral-500 py-5 px-4 my-4 lg:my-6 resize-none"
            rows={5}
          ></textarea>
          <SunEditor
            name="Content"
            height="30vh"
            onChange={(value) => setContent(value)}
          />
          <input
            type="password"
            name="Password"
            value={Article.password}
            onChange={(e) =>
              setArticle({ ...Article, password: e.target.value })
            }
            required={true}
            placeholder="Password"
            className="w-full bg-neutral-700 text-neutral-100 focus:border-[1px] focus:border-neutral-400 focus:outline-none text-sm placeholder-neutral-500 my-4 py-5 px-4"
          />
          <button
            className="w-full bg-neutral-700 focus:border-[1px] focus:border-neutral-400 focus:outline-none text-neutral-300 text-sm hover:border-[1px] hover:border-neutral-500 transition-all py-5 px-4 my-4 lg:my-6"
            onClick={formHandler}
          >
            {!Status.loading ? "Upload" : <Loader />}
          </button>
        </section>
      </main>
      <ToastContainer />
    </div>
  );
};

export default Create;
