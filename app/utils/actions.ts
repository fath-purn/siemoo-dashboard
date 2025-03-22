"use client";

import { signIn, signUp } from "@/app/utils/auth";
import {
  POSTKELOMPOK,
  UPDATEKELOMPOK,
  POSTARTIKEL,
  UPDATEARTIKEL,
  POSTPENGUJIAN,
  UPDATEPENGUJIAN,
  POSTLAPAK,
  UPDATELAPAK,
  POSTFILE,
} from "@/app/utils/method";
import { toast } from "react-toastify";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await signIn("credentials", Object.fromEntries(formData));

    if (code && code.success === true) {
      window.location.href = "/dashboard";
      return code;
    }

    if (code && code.success === false) {
      return code;
    }
  } catch (error) {
    console.error("Error during authentication:", error);
    return { success: false, message: "Authentication failed" };
  }
}

export async function register(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await signUp("credentials", Object.fromEntries(formData));

    if (code && code.success === true) {
      window.location.href = "/dashboard";
      return code;
    }

    if (code && code.success === false) {
      return code;
    }
  } catch (error) {
    console.error("Error during authentication:", error);
    return { success: false, message: "Authentication failed" };
  }
}

export async function SignOut() {
  try {
    localStorage.setItem("token", 'hehew');
    window.location.href = "/login";
  } catch (error) {
    return { success: false, message: "Authentication failed" };
  }
}

export async function formDeleteHandler({
  id,
  params,
}: {
  id: number;
  params: string;
}) {
  try {
    toast.info("Loading...");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/${params}/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const code = await res.json();

    if (code && code.success === false) {
      window.location.href = `/dashboard/${params}`;
      return code;
    } else {
      toast.error(code.message);
      return {
        success: false,
        message: "Gagal Update wisata tolong cek field kembali",
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formSubmitHandlerArtikel(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await POSTARTIKEL("POSTARTIKEL", Object.fromEntries(formData));

    if (code && code.status === true) {
      window.location.href = "/dashboard/artikel";
      return code;
    }

    if (code && code.success === false) {
      return code;
    } else {
      return {
        success: false,
        message: code.message,
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formUpdateHandlerArtikel(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await UPDATEARTIKEL("UPDATEARTIKEL", Object.fromEntries(formData));

    if (code && code.status === true) {
      window.location.href = "/dashboard/artikel";
      return code;
    }

    if (code && code.success === false) {
      return code;
    } else {
      return {
        success: false,
        message: code.message,
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formSubmitHandlerKelompok(
  prevState: string | undefined,
  formData: FormData
) {
  try {  
    const code = await POSTKELOMPOK(
      "POSTKELOMPOK",
      Object.fromEntries(formData)
    );

    if (code && code.status === true) {
      window.location.href = "/dashboard/kelompok";
      return code;
    }

    if (code && code.status === false) {
      return code;
    } else {
      return {
        success: false,
        message: code.message,
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formUpdateHandlerKelompok(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await UPDATEKELOMPOK(
      "UPDATEKELOMPOK",
      Object.fromEntries(formData)
    );

    if (code && code.status === true) {
      window.location.href = "/dashboard/kelompok";
      return code;
    }

    if (code && code.success === false) {
      return code;
    } else {
      return {
        success: false,
        message: code.message,
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formSubmitHandlerPengujian(
  prevState: string | undefined,
  formData: FormData
) {
  try {  
    const code = await POSTPENGUJIAN(
      "POSTPENGUJIAN",
      Object.fromEntries(formData)
    );

    if (code && code.status === true) {
      window.location.href = "/dashboard/pengujian";
      return code;
    }

    if (code && code.status === false) {
      return code;
    } else {
      return {
        success: false,
        message: code.message,
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formUpdateHandlerPengujian(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await UPDATEPENGUJIAN(
      "UPDATEPENGUJIAN",
      Object.fromEntries(formData)
    );

    if (code && code.status === true) {
      window.location.href = "/dashboard/pengujian";
      return code;
    }

    if (code && code.success === false) {
      return code;
    } else {
      return {
        success: false,
        message: code.message,
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formSubmitHandlerLapak(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await POSTLAPAK(
      "POSTLAPAK",
      Object.fromEntries(formData)
    );

    if (code && code.status === true) {
      window.location.href = "/dashboard/lapak";
      return code;
    }

    if (code && code.status === false) {
      return code;
    } else {
      return {
        success: false,
        message: code.message,
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formUpdateHandlerLapak(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await UPDATELAPAK(
      "UPDATELAPAK",
      Object.fromEntries(formData)
    );

    if (code && code.status === true) {
      window.location.href = "/dashboard/lapak";
      return code;
    }

    if (code && code.success === false) {
      return code;
    } else {
      return {
        success: false,
        message: code.message,
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formSubmitHandlerFile(
  state:
    | { success: boolean; data: any; message?: undefined }
    | { success: boolean; message: any; data?: undefined }
    | undefined,

  formData: FormData
): Promise<
  | { success: boolean; data: any; message?: undefined }
  | { success: boolean; message: any; data?: undefined }
> {
  try {
    toast.info("Loading...");

    const code = await POSTFILE("POSTFILE", Object.fromEntries(formData));

    if (code && "success" in code && code.success === true) {
      toast.success(code.message);
      window.location.href = `/dashboard/penyakit`;
      return code;
    }

    if (code && "success" in code && code.success === false) {
      if (Array.isArray(code.message)) {
        toast.error(code.message);
        return { success: false, message: code.message };
      } else {
        toast.error(code.message);
        return { success: false, message: code.message };
      }
    }

    console.log("empat");

    toast.success(code.message);
    return { success: false, message: code.message };
  } catch (error) {
    toast.error("Form submission failed");
    return { success: false, message: "Form submission failed" };
  }
}