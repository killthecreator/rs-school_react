export default interface CardProps {
  image: string | undefined;
  title: string;
  price: string;
  text: string;
  likes: number;
  bookmarks: number;
  hidden?: true;
}
