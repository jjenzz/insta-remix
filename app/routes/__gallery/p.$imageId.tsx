import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import * as Remix from '@remix-run/react';
import * as imageApi from '~/api/image.server';
import { Dialog } from '~/components/dialog';
import { PhotoSummary } from '~/components/photo-summary';

type LoaderData = Awaited<ReturnType<typeof imageApi.getImage>>;

export const loader: LoaderFunction = async ({ params }) => {
  const image: LoaderData = await imageApi.getImage({ id: params.imageId! });
  return json(image);
};

export default function GalleryImagePage() {
  const image = Remix.useLoaderData<LoaderData>();
  const navigate = Remix.useNavigate();
  const context = Remix.useOutletContext<{ dialog: boolean }>();

  return context.dialog ? (
    <Dialog onClose={() => navigate('/', { state: { restoreScroll: false } })}>
      <PhotoSummary src={image.src} />
    </Dialog>
  ) : (
    <>
      <PhotoSummary src={image.src} />
      <Remix.Outlet />
    </>
  );
}
