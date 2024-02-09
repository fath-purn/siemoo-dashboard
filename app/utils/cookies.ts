"use server";

import { cookies } from "next/headers";

export async function setCookiesToken(token: string) {
  cookies().set({
    name: "token",
    value: token,
    httpOnly: true,
    path: "/login",
  });
  // const a = await getCookiesToken()
  // console.log(a?.value, 'token');
}

export async function getCookiesToken() {
  const token = cookies().get("token");
  console.log(token?.value, "tokenapapa");
  return token;
}

export async function getAllCookies() {
  const token = cookies().getAll();
  console.log(token, "tokenapapa");
  return token;
}

export async function removeCookiesToken() {
  cookies().delete("token");
}
