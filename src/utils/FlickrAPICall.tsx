import CardProps from './../components/Card/CardProps';

type setState<T> = React.Dispatch<React.SetStateAction<T>>;

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

const flickrAPICall = async (
  setActiveCards: setState<CardProps[]>,
  setIsPending: setState<boolean>,
  setError: setState<null | string>,
  value: string
) => {
  try {
    const res = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${value}&tagmode=all&per_page=6&page=1&format=json&nojsoncallback=1`
    );
    const data = await res.json();
    const photosArr = data.photos.photo.map((pic: FlickrData) => {
      const image = +pic.server
        ? `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`
        : null;
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
    setActiveCards(photosArr);
  } catch (err) {
    if (typeof err === 'string') {
      setError(err);
    } else if (err instanceof Error) {
      setError(err.message);
    }
  } finally {
    setIsPending(false);
  }
};

export default flickrAPICall;
