import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, imageUrl, description } = await request.json();
    const newCategory = { title, slug, imageUrl, description };
    console.log(newCategory);
    return NextResponse.json(newCategory);
  } catch (error) {
    return (
      NextResponse.json({
        message: "Failed to create category, please try again",
        error,
      }),
      { status: 404 }
    );
  }
}

export async function GET(request) {
  try {
    // Replace this with your actual data fetching logic
    const categories = await fetchCategoriesFromDatabase();

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch categories",
        error: error.message, // Include error message for debugging
      },
      { status: 500 }
    ); // Set status to 500 for server error
  }
}

// Dummy function to simulate fetching data from database
async function fetchCategoriesFromDatabase() {
  return [
    {
      title: "Category 1",
      slug: "category-1",
      imageUrl:
        "https://utfs.io/f/d43e3861-f4e7-4aee-8dcc-3b5f18c59e1d-4yw6nk.png",
      description: "Description for Category 1",
    },
    {
      title: "Category 2",
      slug: "category-2",
      imageUrl: "image2.jpg",
      description: "Description for Category 2",
    },
    {
      title: "Category 2",
      slug: "category-2",
      imageUrl: "image2.jpg",
      description: "Description for Category 2",
    },
    {
      title: "Category 2",
      slug: "category-2",
      imageUrl: "image2.jpg",
      description: "Description for Category 2",
    },
  ];
}
