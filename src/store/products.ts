import { ProductForm } from "@/schemas/product.schema";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface Product extends ProductForm {
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

interface ProductStore {
  products: Product[];
  startedDate: Date | null;
  startDate: () => void;
  resetDate: () => void;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: Product["productId"]) => void;
  clearProducts: () => void;
}

export const useProducts = create<ProductStore>()(
  devtools(
    persist(
      (set) => ({
        products: [],
        startedDate: null,
        startDate: () =>
          set(() => ({
            startedDate: new Date(),
          })),
        resetDate: () =>
          set(() => ({
            startedDate: null,
          })),
        addProduct: (product) =>
          set((state) => ({
            products: [...state.products, product],
          })),
        updateProduct: (product) =>
          set((state) => ({
            products: state.products.map((p) =>
              p.productId === product.productId ? product : p,
            ),
          })),
        deleteProduct: (productId) =>
          set((state) => ({
            products: state.products.filter((p) => p.productId !== productId),
          })),
        clearProducts: () =>
          set(() => ({
            products: [],
          })),
      }),
      {
        name: "wallbit-challenge-products",
      },
    ),
  ),
);