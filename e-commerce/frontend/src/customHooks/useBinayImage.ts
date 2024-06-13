import { useState, useEffect } from "react";

const useImageData = (image: { img: { data: Uint8Array } } | null) => {
  const [dataURL, setDataURL] = useState<string>("");

  useEffect(() => {
    if (image && image.img && image.img.data) {
      const encodeBase64 = (array: Uint8Array) => {
        let binary = "";
        const bytes = new Uint8Array(array);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
      };

      const imageData = image.img.data;
      const base64String = `data:image/png;base64,${encodeBase64(imageData)}`;
      setDataURL(base64String);
    } else {
      setDataURL("");
    }
  }, [image]);

  return dataURL;
};

export default useImageData;
