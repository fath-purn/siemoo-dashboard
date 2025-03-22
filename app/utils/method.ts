import { artikel, kelompok, lapak, pengujian, cocoblog } from "@/app/utils/validation";

export const POSTARTIKEL = async (_provider: string, data: any) => {
  const validasi = artikel.safeParse({
    judul: data.judul,
    deskripsi: data.deskripsi,
    menu: data.idMenu,
  });

  if (validasi.success) {
    const formData = new FormData();

    formData.append("judul", data.judul);
    formData.append("deskripsi", data.deskripsi);
    formData.append("menu", data.idMenu);
    formData.append(`image`, data.image);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/artikel`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      }
    );

    const dataJson = await res.json();

    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }
    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};

export const UPDATEARTIKEL = async (_provider: string, data: any) => {
  const validasi = artikel.safeParse({
    judul: data.judul,
    deskripsi: data.deskripsi,
    menu: data.idMenu,
  });

  if (validasi.success) {
    const formData = new FormData();

    formData.append("judul", data.judul);
    formData.append("deskripsi", data.deskripsi);
    formData.append("menu", data.idMenu);
    formData.append(`image`, data.image);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/artikel/${data.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      }
    );

    const dataJson = await res.json();

    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }
    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};

export const POSTKELOMPOK = async (_provider: string, data: any) => {
  const validasi = kelompok.safeParse({
    nama: data.nama,
  });

  if (validasi.success) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/kelompok`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nama: data.nama }),
      }
    );

    const dataJson = await res.json();
    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }

    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};

export const UPDATEKELOMPOK = async (_provider: string, data: any) => {
  const validasi = kelompok.safeParse({
    nama: data.nama,
  });

  if (validasi.success) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/kelompok/${data.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nama: data.nama }),
      }
    );

    const dataJson = await res.json();

    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }

    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};

export const POSTPENGUJIAN = async (_provider: string, data: any) => {
  const validasi = pengujian.safeParse({
    id_user: data.id_user,
    snf: Number(data.snf),
    fat: Number(data.fat),
    protein: Number(data.protein),
    ph: Number(data.pH),
    hasil: data.hasil,
    message: data.message,
  });

  if (validasi.success) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/pengujian`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_user: data.id_user,
          fat: data.fat,
          snf: data.snf,
          protein: data.protein,
          ph: data.pH,
          hasil: data.hasil,
          message: data.message,
        }),
      }
    );

    const dataJson = await res.json();
    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }

    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};

export const UPDATEPENGUJIAN = async (_provider: string, data: any) => {
  const validasi = kelompok.safeParse({
    nama: data.nama,
  });

  if (validasi.success) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/kelompok/${data.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nama: data.nama }),
      }
    );

    const dataJson = await res.json();

    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }

    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};

export const POSTLAPAK = async (_provider: string, data: any) => {
  const validasi = lapak.safeParse({
    nama: data.nama,
    harga: Number(data.harga),
    deskripsi: data.deskripsi,
    kuantiti: data.kuantiti,
    stok: Number(data.stok),
  });

  if (validasi.success) {
    const formData = new FormData();

    formData.append("nama", data.nama);
    formData.append("harga", data.harga);
    formData.append("deskripsi", data.deskripsi);
    formData.append("kuantiti", data.kuantiti);
    formData.append("stok", data.stok);
    formData.append(`image`, data.image);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/warung`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      }
    );

    const dataJson = await res.json();
    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }

    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};

export const UPDATELAPAK = async (_provider: string, data: any) => {
  const validasi = lapak.safeParse({
    nama: data.nama,
    harga: Number(data.harga),
    deskripsi: data.deskripsi,
    kuantiti: data.kuantiti,
    stok: Number(data.stok),
  });

  if (validasi.success) {
    const formData = new FormData();

    formData.append("nama", data.nama);
    formData.append("harga", data.harga);
    formData.append("deskripsi", data.deskripsi);
    formData.append("kuantiti", data.kuantiti);
    formData.append("stok", data.stok);
    formData.append(`image`, data.image);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/warung/${data.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      }
    );

    const dataJson = await res.json();
    console.log(dataJson, 'dadf')

    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }

    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};

export const POSTFILE = async (_provider: string, data: any) => {
  console.log("data", data);

  const { id_update, params } = data;
  const validasi = cocoblog.safeParse({
    judul: data.judul,
    isi: data.isi,
  });

  if (!validasi.success) {
    console.log(validasi.error.issues, "hmm bisa gasihh");
  }

  let formData = new FormData();

  if (data.image.size !== 0) {
    formData.append(`image`, data.image);
  } else if (data.linkGambar) {
    formData.append("linkGambar", "linkgambar");
  } else {
    formData.append("linkGambar", "linkgambar");
  }

  // Handle different cases
  switch (params) {
    case "cocoblog":
      formData.append("judul", data.judul);
      formData.append("isi", data.isi);
      break;

    case "produk":
      formData.append("nama", data.nama);
      formData.append("deskripsi", data.deskripsi);
      formData.append("link", data.link);
      break;

    default:
      console.error("Invalid params:", params);
      return { success: false, message: "Invalid params" };
  }

  if (validasi.success) {
    const url = id_update
      ? `${process.env.NEXT_PUBLIC_API_URL}/${params}/${id_update}`
      : `${process.env.NEXT_PUBLIC_API_URL}/${params}`;
    const res = await fetch(url, {
      method: id_update ? "PUT" : "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData, // FormData
    });

    const dataJson = await res.json();

    console.log(url);
    console.log("image", data.image.size)
    console.log("res:", dataJson);

    if (!res) {
      return { ...dataJson, params };
    }

    if (res.status === 200 || res.status === 201) {
      return { ...dataJson, params };
    } else {
      return { ...dataJson, params };
    }
  } else {
    return { success: false, message: validasi.error.issues };
  }
};
