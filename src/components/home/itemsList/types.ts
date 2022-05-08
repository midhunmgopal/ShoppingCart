export interface ItemType {
  title: string;
  image: string;
  isAvailable?: boolean;
  cost: ItemCost;
  quantity: ItemQuantity;
}

export interface ItemCost {
  price: number;
  unit: string;
}

export interface ItemQuantity {
  quantity: number;
  unit: string;
}
