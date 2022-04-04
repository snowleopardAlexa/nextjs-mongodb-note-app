import dbConnect from "../../utils/db";

dbConnect()

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  res.json({ test: 'hello alexis' })
}
