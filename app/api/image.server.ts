const IMAGES = [
  {
    id: "1",
    src: "https://i.pravatar.cc/600?img=1",
  },
  {
    id: "2",
    src: "https://i.pravatar.cc/600?img=2",
  },
  {
    id: "3",
    src: "https://i.pravatar.cc/600?img=3",
  },
  {
    id: "4",
    src: "https://i.pravatar.cc/600?img=4",
  },
  {
    id: "5",
    src: "https://i.pravatar.cc/600?img=5",
  },
  {
    id: "6",
    src: "https://i.pravatar.cc/600?img=6",
  },
  {
    id: "7",
    src: "https://i.pravatar.cc/600?img=7",
  },
  {
    id: "8",
    src: "https://i.pravatar.cc/600?img=8",
  },
  {
    id: "9",
    src: "https://i.pravatar.cc/600?img=9",
  },
  {
    id: "10",
    src: "https://i.pravatar.cc/600?img=10",
  },
  {
    id: "11",
    src: "https://i.pravatar.cc/600?img=11",
  },
  {
    id: "12",
    src: "https://i.pravatar.cc/600?img=12",
  },
];

/* -------------------------------------------------------------------------------------------------
 * getImages
 * -----------------------------------------------------------------------------------------------*/

async function getImages() {
  return IMAGES;
}

/* -------------------------------------------------------------------------------------------------
 * getImage
 * -----------------------------------------------------------------------------------------------*/

async function getImage(params: { id: string }) {
  return IMAGES.find((image) => image.id === params.id);
}

/* ---------------------------------------------------------------------------------------------- */

export { getImages, getImage };
