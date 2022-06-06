export interface IProduct {
  id: number;
  title: string;
  completed: boolean;
}

export interface IProducts {
  products: IProduct[];
}
