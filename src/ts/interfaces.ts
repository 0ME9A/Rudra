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

export interface ProjectCardProps {
  id?: string;
  title: string;
  desc: string;
  date?: string;
  className?: string;
  img: {
    src: string;
    alt: string;
    size: { w: number; h: number };
  };
}

export interface TestimonialCardProps {
  id?: string;
  name: string;
  occupation?: string;
  review: string;
  date?: string;
  rating: number;
  className?: string;
  src: string;
}
