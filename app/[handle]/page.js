import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { handle } = await params;

  const client = await clientPromise;
  const db = client.db("linktree");
  const collection = db.collection("info's");

  const item = await collection.findOne({ handle: handle });

  if (!item) {
    return notFound();
  }

  return (
    
    <div className="min-h-screen w-full bg-[#254f1a] flex justify-center py-10">
      <div className="photo flex justify-center flex-col items-center gap-4">
        <img
          className="w-24 h-24 rounded-full object-cover shadow-md"
          src={item.photo}
          alt={item.handle}
        />

        <span className="font-bold text-xl text-white">@{item.handle}</span>
        <span className="desc w-80 text-center text-white opacity-90">
          {item.photodes}
        </span>

        <div className="links w-full mt-6">
          {item.links &&
            item.links.map((items, index) => {
              return (
                <Link key={index} href={items.link} target="_blank">
                  <div className="bg-white hover:bg-[#436b39] hover:text-white transition-all py-4 shadow-lg shadow-white px-4 min-w-[350px] sm:min-w-[450px] flex justify-center rounded-xl my-6 font-medium">
                    {items.linktext}
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
