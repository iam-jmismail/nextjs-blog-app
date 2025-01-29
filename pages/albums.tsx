import React, { useEffect, useState } from "react";
import { IAlbum } from "../types/resources";

type Props = {};

function Albums({}: Props) {
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );

        const albums = (await response.json()) as IAlbum[];
        setAlbums(albums);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  if (loading) return <> Loading...</>;

  return <div>{JSON.stringify(albums)}</div>;
}

export default Albums;
