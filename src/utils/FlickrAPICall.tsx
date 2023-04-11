import CardProps from './../components/Card/CardProps';

interface FlickrData {
  farm: number;
  id: string;
  isfamily: 0 | 1;
  isfriend: 0 | 1;
  ispuiblic: 0 | 1;
  owner: string;
  secret: string;
  server: string;
  title: string;
}

const API_KEY = import.meta.env.VITE_API_KEY;

const flickrAPICall = async (value = ''): Promise<CardProps[]> => {
  const res = await fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photos.${
      value ? 'search' : 'getRecent'
    }&api_key=${API_KEY}&text=${value}&safe_search=1&content_type=1&per_page=6&page=1&format=json&nojsoncallback=1`
  );
  const data = await res.json();
  const photosArr: CardProps[] = data.photos.photo.map((pic: FlickrData) => {
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
