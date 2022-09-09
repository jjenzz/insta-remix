import type { LoaderFunction } from "@remix-run/node";
import * as React from "react";
import { json } from "@remix-run/node";
import * as Remix from "@remix-run/react";
import { useLayoutEffect } from "@radix-ui/react-use-layout-effect";
import * as imageApi from "~/api/image.server";
import * as Gallery from "~/components/gallery";

type LoaderData = { images: Awaited<ReturnType<typeof imageApi.getImages>> };
type Location = Remix.Location & { state: { dialog?: boolean } };

export const loader: LoaderFunction = async () => {
  const images = await imageApi.getImages();
  const data: LoaderData = { images };
  return json(data);
};

export default function GalleryPage() {
  const data = Remix.useLoaderData<LoaderData>();
  const [mode, setMode] = React.useState<"inline" | "dialog">("inline");
  const navigate = Remix.useNavigate();
  const location = Remix.useLocation() as Location;
  const isPhoto = location.pathname.startsWith("/p/");

  useLayoutEffect(() => {
    if (location.state?.dialog) {
      setMode("dialog");
      // remove dialog state from location
      navigate(location.pathname, {
        replace: true,
        state: { restoreScroll: false },
      });
    }
  }, [location.pathname, location.state, navigate]);

  return isPhoto && mode === "inline" ? (
    <Remix.Outlet context={{ dialog: false }} />
  ) : (
    <div>
      <h1>Gallery</h1>
      <Gallery.Root>
        {data?.images.map((image) => (
          <Gallery.Item key={image.id}>
            <Remix.Link
              to={`/p/${image.id}`}
              prefetch={"render"}
              state={{ dialog: true, restoreScroll: false }}
            >
              <Gallery.Image src={image.src} />
            </Remix.Link>
          </Gallery.Item>
        ))}
      </Gallery.Root>
      <Remix.Outlet context={{ dialog: true }} />
    </div>
  );
}
