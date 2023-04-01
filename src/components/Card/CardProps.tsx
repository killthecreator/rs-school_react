export default interface CardProps {
  image: string | undefined;
  title: string;
  price: number | 'No price';
  text: string;
  likes: number;
  bookmarks: number;
  hidden?: true;
}
