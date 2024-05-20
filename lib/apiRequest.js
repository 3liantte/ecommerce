import axios from "axios";
import toast from "react-hot-toast";

export async function makePostRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  reset
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setLoading(false);
      toast.success(`New ${resourceName} Created Successfully`);
      reset();
    } else {
      setLoading(false);
      if (response.status === 409) {
        toast.error("The Given Warehouse Stock is Not Enough");
      } else {
        toast.error("Something Went wrong");
      }
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
    toast.error("An Error Occurred");
  }
}

export async function makePutRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  redirect,
  reset
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setLoading(false);
      toast.success(`${resourceName} Updated Successfully`);
      redirect();
    } else {
      setLoading(false);
      toast.error("Something Went wrong");
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
    toast.error("An Error Occurred");
  }
}

export async function makeGetRequest(setLoading, endpoint, setData, setError) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await axios.get(`${baseUrl}/${endpoint}`);

    if (response.status === 200) {
      setLoading(false);
      setData(response.data);
      toast.success("Data Fetched Successfully");
    } else {
      setLoading(false);
      toast.error("Something Went Wrong");
    }
  } catch (error) {
    setLoading(false);
    setError("An Error Occurred");
    console.log(error);
    toast.error("An Error Occurred");
  }
}

// Assuming this function fetches categories from your database
async function fetchCategoriesFromDatabase() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const endpoint = "api/categories"; // Adjust the endpoint as per your API structure
    const response = await axios.get(`${baseUrl}/${endpoint}`);
    return response.data; // Assuming the response data is an array of categories
  } catch (error) {
    throw new Error("Failed to fetch categories");
  }
}
