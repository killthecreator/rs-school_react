export default interface FormData {
  title: string;
  image?: FileList | undefined;
  persons: string;
  price: string;
  text: string;
  location: string;
  date: string;
  smoking: boolean;
  pets: boolean;
}
