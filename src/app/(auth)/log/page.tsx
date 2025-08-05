"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const Logpage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/documents/1`,
          {
            headers: {
              "X-API-KEY": "PolygonAI12",
            },
          }
        );
        console.log("API Response:", res.data);
        setData(res.data);
      } catch (err) {
        console.error("Error fetching document:", err);
      }
    };

    fetchDocument();
  }, []);

  return (
    <div>
      <h1>Log Page</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default Logpage;
