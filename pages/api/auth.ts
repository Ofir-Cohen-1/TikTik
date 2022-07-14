import type { NextApiRequest, NextApiResponse } from "next";

import { client } from "../../utils/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const user = req.body; // sending the data to the request and getting it in req.body

    client
      .createIfNotExists(user)
      .then(() => res.status(200).json("Login success")); //create a new user inside of sanity database .call to sanity client. create a user if a user doesnt already exist. pass back the login success string

    // res.status(200).json(data); //pass that data back to front-end side
  }
}
