export type ProductCategory = 'electronics' | 'fashion' | 'books' | 'grocery' | 'accessories';
export type ProductStatus = 'in-stock' | 'out-of-stocks' | 'pre-order';

export interface Product {
    id: number;
    name: string;
    price: number;
    category: ProductCategory;
    status: ProductStatus;
    description?: string;
    image: string;
}

    