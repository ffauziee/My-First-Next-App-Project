import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  status_code: number;
  data: {
    id: number;
    name: string;
    price: number;
    category: string;
    ukuran: string;
    warna: string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const data = [
    {
      id: 1,
      name: "Kaos Polos",
      price: 50000,
      category: "Pakaian",
      ukuran: "L",
      warna: "Hitam",
    },
    {
      id: 2,
      name: "Kemeja Flanel",
      price: 150000,
      category: "Pakaian",
      ukuran: "M",
      warna: "Merah",
    },
    {
      id: 3,
      name: "Celana Jeans",
      price: 200000,
      category: "Pakaian",
      ukuran: "L",
      warna: "Biru",
    },
  ];
  res.status(200).json({ status: true, status_code: 200, data });
}
