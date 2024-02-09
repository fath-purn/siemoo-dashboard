import { setCookiesToken, removeCookiesToken, getCookiesToken, getAllCookies } from "@/app/utils/cookies";
import { redirect } from "next/navigation";
import { z } from "zod";

export const signIn = async (provider: string, data: any) => {
  const parsedCredentials = z
    .object({ username: z.string(), password: z.string().min(5) })
    .safeParse(data);

  if (parsedCredentials.success) {
    const { username, password } = data;

    const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: username, password }),
    });

    if (!user) return null;
    if (user.status === 200) {
      const data = await user.json();
      
      localStorage.setItem("token", data.data.token);
      await setCookiesToken(data.token);

      return data;

    } else {
      return await user.json();
    }
  }
};

export const signUp = async (provider: string, data: any) => {
  const parsedCredentials = z
    .object({ username: z.string(), password: z.string().min(5) })
    .safeParse(data);

  if (parsedCredentials.success) {
    const { username, password } = data;

    const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/admin/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!user) return null;
    if (user.status === 200) {
      const data = await user.json();
      
      localStorage.setItem("token", data.token);
      await setCookiesToken(data.token);

      return data;

    } else {
      return await user.json();
    }
  }
};

export const signOut = async () => {
  removeCookiesToken();
  redirect("/login");
};
