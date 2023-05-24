import { db } from "../db.js";

export const getImoveis = (_, res) => {
  const q = "SELECT * FROM imovel";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};
