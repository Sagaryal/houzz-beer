export interface IBeer {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  ingredients?: Record<string, any>;
}
