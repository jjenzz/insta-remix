import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import * as Remix from "@remix-run/react";
import * as imageApi from "~/api/image.server";
import * as Gallery from "~/components/gallery";

type LoaderData = { images: Awaited<ReturnType<typeof imageApi.getImages>> };

export const loader: LoaderFunction = async () => {
  const images = await imageApi.getImages();
  const data: LoaderData = { images };
  return json(data);
};

export default function GalleryImageIndexPage() {
  const data = Remix.useLoaderData<LoaderData>();
  return (
    <div>
      <h2>More images</h2>
      <Gallery.Root>
        {data?.images.map((image) => (
          <Gallery.Item key={image.id}>
            <Remix.Link to={`/p/${image.id}`}>
              <Gallery.Image src={image.src} />
            </Remix.Link>
          </Gallery.Item>
        ))}
      </Gallery.Root>
    </div>
  );
}
