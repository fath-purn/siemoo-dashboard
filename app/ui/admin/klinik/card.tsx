"use client";

import Link from "next/link";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiDeleteOutline, mdiExpandAll } from "@mdi/js";
import { useState, useEffect } from "react";
import { getData } from "@/app/utils/fetchData";
import { formDeleteHandler } from "@/app/utils/actions";

interface Klinik {
  id: number;
  nama: string;
  alamat: string;
  telepon: string;
  media: string;
  kota: string;
}

export default function Card({
  currentPage,
  limit,
  search,
}: {
  limit: number;
  currentPage: number;
  search: string;
}) {
  const [klinikList, setKlinikList] = useState<Klinik[]>([]);
  const [result, setResult] = useState(null);

  const handleDelete = async (id: number, params: string) => {
    const result = await formDeleteHandler({ id, params });
    setResult(result);
    if (result.success) {
      setKlinikList(klinikList.filter((petani) => petani.id !== id));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData({
          path: "/klinik",
          limit: limit,
          currentPage: currentPage,
          search: search,
        });

        setKlinikList(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [currentPage, search, limit, result]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center m-auto w-full mt-5 gap-3">
        {klinikList ? (
          klinikList?.map((data, index) => (
            <div
              key={index}
              className="flex flex-row justify-start w-full bg-white rounded-lg shadow-md mt-3 h-full"
            >
              {data.media && (
                <Image
                  src={data.media}
                  alt={data.nama}
                  width={237}
                  height={200}
                  className="object-cover rounded-lg w-[237px] min-h-[200px]"
                />
              )}
              <div className="flex flex-col justify-between my-5 mx-3 w-full">
                <div className="w-[90%]">
                  <h3 className="text-black text-xl font-medium mb-3">
                    {data.nama}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2 line-clamp-2">{data.alamat}</p>
                  <p className="text-gray-500 text-sm mb-2">{data.telepon}</p>
                  <p className="text-gray-500 text-sm mb-2">{data.kota}</p>
                </div>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold w-fit p-1 rounded"
                    onClick={() => handleDelete(data.id, "klinik")}
                  >
                    <Icon path={mdiDeleteOutline} size={1} color="#fff" />
                  </button>
              </div>
            </div>
          ))
        ) : (
          <div>
            <p>kosong</p>
          </div>
        )}
      </div>
    </div>
  );
}
