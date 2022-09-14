import React from "react";
import { Storage } from "@aws-amplify/storage";

export const useImageLink = (imgname) => {
  const [image, setImage] = React.useState();

  React.useEffect(() => {
    const func = async () => {
      const accessUrl = await Storage.get(imgname);
      setImage(accessUrl);
    };

    func();
  }, []);

  return { image };
};
