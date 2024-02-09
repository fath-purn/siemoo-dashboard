export type PageLimitSearch = {
  currentPage?: number;
  limit?: number;
  search?: string;
  id?: string;
  destinasi?: boolean;
};

export type User = {
  id: number;
  email: string;
  fullname: string;
  sapi: string;
  no_wa: string;
  rt: number;
  rw: number;
  kelompok: object;
  role: string;
  created: string;
  updated: string;
};

export interface CountData {
  hotel: number;
  wisata: number;
  kecamatan: number;
  ulasan: number;
}

export interface Ulasan {
  id: number;
  nama: string;
  ulasan: string;
  wisataId: number | null;
  hotelId: number | null;
  createdAt: string;
  updatedAt: string;
  wisata?: string;
  Hotel?: string;
}

export interface CardWisataAndHotel {
  limit: number;
  currentPage: number;
  search: string;
  id?: string;
  destinasi?: boolean;
  pagination?: boolean;
}
