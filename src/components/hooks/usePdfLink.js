import { useState, useEffect } from "react";
import { Storage } from "@aws-amplify/storage";

export const usePdfLink = (key) => {
  const [signedURL, setSignedURL] = useState();

  useEffect(() => {
    const GrabPdf = async () => {
      const url = await Storage.get(key);

      setSignedURL(url);
    };

    GrabPdf();
  }, []);

  return { signedURL };
};
