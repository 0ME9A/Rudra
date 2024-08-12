export interface ServiceDataProps {
  id?: string;
  title: string;
  desc: string;
  url: string;
  img: {
    src: string;
    alt: string;
    size: { w: number; h: number };
  };
}
