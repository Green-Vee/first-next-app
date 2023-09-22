import Post from "@/models/Post";
import connect from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await connect();

    const post = await Post.findById(params.id);

    return new NextResponse(JSON.stringify(post), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Database Error", {
      status: 500,
    });
  }
};
