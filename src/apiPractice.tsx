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
      try {
        const response = await fetch(
          `http://api.giphy.com/v1/gifs/search?q=${name}&api_key=${apiKey}&limit=1`,
        );
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const jsonResponse = await response.json();

        setUrl(jsonResponse.data[0].images.fixed_height.url);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    }
    fetchGif();
  }, [name]);

  return (
    <>
      <img src={`${url}`} />
    </>
  );
}
