"use client";

import Link from "next/link";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiDeleteOutline, mdiExpandAll } from "@mdi/js";
import { useState, useEffect } from "react";
import { getData } from "@/app/utils/fetchData";
import { formDeleteHandler } from "@/app/utils/actions";

interface Cocoblog {
  id: number;
  judul: string;
  isi: string;
  gambar: string;
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
  const [cocoblogList, setCocoblogList] = useState<Cocoblog[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [result, setResult] = useState(null);

  const handleDelete = async (id: number, params: string) => {
    const result = await formDeleteHandler({ id, params });
    setResult(result);
    if (result.success) {
      setCocoblogList(cocoblogList.filter((petani) => petani.id !== id));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData({
          path: "/cocoblog",
          limit: limit,
          currentPage: currentPage,
          search: search,
        });

        console.log(data.cocoblog);

        setCocoblogList(data.cocoblog);
        setTotalItems(Math.ceil(data.pagination.total_items / limit));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [currentPage, search, limit, result]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center m-auto w-full mt-5 gap-3">
        {cocoblogList ? (
          cocoblogList?.map((data, index) => (
            <div
              key={index}
              className="flex flex-row justify-start md:flex-col w-full bg-white rounded-lg shadow-md mt-3 h-full"
            >
              {data.gambar && (
                <Image
                  src={data.gambar}
                  alt={data.judul}
                  width={237}
                  height={200}
                  className="object-cover rounded-lg w-full h-[200px] "
                />
              )}
              <div className="flex items-center justify-center my-3 ml-1 md:ml-0 w-[50%] md:w-full">
                <div className="w-[90%]">
                  <h3 className="text-black text-xl font-medium mb-3">
                    {data.judul}
                  </h3>
                </div>
              </div>
              <div className="mt-auto flex justify-center mb-3">
                <div className="w-[90%] flex gap-2">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold w-fit p-1 rounded"
                    onClick={() => handleDelete(data.id, "cocoblog")}
                  >
                    <Icon path={mdiDeleteOutline} size={1} color="#fff" />
                  </button>
                </div>
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
