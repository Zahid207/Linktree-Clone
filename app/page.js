import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#d2e823] flex items-center p-[5vw] pt-[6vw] max-[788px]:pt-[10vw] max-[585px]:pt-[15vw] max-[442px]:pt-[20vw]">
      <div className="container max-w-[1568px] mx-auto min-[788px]:flex items-center mt-[7vw]">
        <div className=" min-[788px]:[50%]">
          <h1 className="text-7xl text-[#254f1a] max-[585px]:text-center font-black">
            A link in bio built for you.
          </h1>
          <p className="text-[#254f1a] text-[16px] my-6 font-[600]">
            Join 70M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="max-w-[500px]">
            <Link href={"/generate"}>
              <button className="bg-[#254f1a] text-white font-bold p-4 rounded-full w-[55%]">
                Get started for free
              </button>
            </Link>
          </div>
        </div>
        <img
          className="min-[788px]:w-[50%] w-full max-h-[783px] mt-[5vh]"
          src="/image_113.png"
          alt="side photo"
        />
      </div>
    </div>
  );
}
