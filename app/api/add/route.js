import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  const body = await req.json();
  const client = await clientPromise;
  const db = client.db("linktree");
  const collection = db.collection("info's");

  const existHandle = await collection.findOne({ handle: body.handle });

  if (existHandle) {
    return Response.json({
      success: false,
      error: true,
      message: "This link already has been generated!",
    });
  }

  const result = await collection.insertOne(body);

  return Response.json({
    success: true,
    error: false,
    message: "Your link has been generated successfully. Enjoy!",
    result: result,
  });
}
