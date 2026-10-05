import { useEffect, useState } from "react";

const apiKey: string = "pKEY6YQFcQJRG8NddeLGr8tHbc3gpACM";

type GifProps = {
  name: string;
};

export default function Gif({ name }: GifProps) {
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    async function fetchGif() {
      setUrl(null);

      await fetch(
        `http://api.giphy.com/v1/gifs/search?q=${name}&api_key=${apiKey}&limit=1`,
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data.data[0]);
          setUrl(data.data[0].images.fixed_height.url);
        });
    }

    fetchGif();
  }, [name]);

  return (
    <>
      <img src={`${url}`} height="100px" width="100px" />
    </>
  );
}
