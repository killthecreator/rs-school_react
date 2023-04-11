import CardProps from './../components/Card/CardProps';

export interface FlickrData {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    photo: {
      farm: number;
      id: string;
      isfamily: 0 | 1;
      isfriend: 0 | 1;
      ispuiblic: 0 | 1;
      owner: string;
      secret: string;
      server: string;
      title: string;
    }[];
    total: number;
  };
  stat: 'ok' | 'fail';
}

const flickrAPICall = async (data: FlickrData): Promise<CardProps[]> => {
  const photosArr: CardProps[] = data.photos.photo.map((pic) => {
    const image = +pic.server
      ? `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`
      : undefined;
    return {
      image: image,
      title: pic.title,
      price: 'No price',
      text: '',
      likes: 0,
      bookmarks: 0,
      hidden: true,
    };
  });
  return photosArr;
};

export default flickrAPICall;
