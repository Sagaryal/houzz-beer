export type TBeer = {
  id: number | string;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  ingredients?: Record<string, any>;
};

export interface IMyBeersProps {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export interface IModalProps extends Pick<IMyBeersProps, "isModalOpen" | "closeModal"> {
  onSave: (beer: TBeer) => void;
}
