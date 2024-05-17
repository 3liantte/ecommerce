import { NextResponse } from "next/server";

// This is the api end point for category creation function inside the new categories

export async function POST(request){
    try {
        const { title, slug, imageUrl, description} = await request.json();
        const newCategory = { title, slug, imageUrl, description}
        console.log(newCategory);
        return NextResponse.json(newCategory);

    } catch (error) {
        return NextResponse.json({
            message: "Failed to create category, please try again",
            error
        }),{status: 500}
    }
}