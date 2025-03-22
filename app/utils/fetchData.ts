"use server";

export async function getData({
  path,
  currentPage,
  limit,
  search,
  status,
}: {
  path: string;
  currentPage?: number;
  limit?: number;
  search?: string;
  status?: string;
}) {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${path}?search=${search}&status=${status}&page=${currentPage}&limit=${limit}`,
    {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();
  // console.log("data", data)

  // await new Promise((resolve) => setTimeout(resolve, 4000));  

  return data.data;
}