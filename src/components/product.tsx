import { useProducts, type Product as ProducType } from "@/store/products";
import { Badge } from "@/ui/badge";

import { Separator } from "@/ui/separator";
import { cn } from "@/utils/cn";
import { Minus, Plus, Tag, Trash } from "@phosphor-icons/react";

const Product = (product: ProducType) => {
  const { deleteProduct, updateProduct } = useProducts();
  const minProduct = 1;

  const handleIncrementProduct = () => {
    updateProduct({
      ...product,
      quantity: product.quantity + 1,
    });
  };

  const handleDecrementProduct = () => {
    updateProduct({
      ...product,
      quantity:
        product.quantity - 1 < minProduct ? minProduct : product.quantity - 1,
    });
  };

  const handleClearProduct = () => {
    deleteProduct(product.productId);
  };

  return (
    <div className="relative flex items-center space-x-4 rounded-md border border-neutral-200 p-3 duration-500 animate-in slide-in-from-bottom-1">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="h-12 w-12 flex-shrink-0"
      />
      <div className="flex w-full flex-col">
        <p
          title={product.name}
          className="mb-1 max-w-[430px] truncate font-medium"
        >
          {product.quantity > 1 && (
            <span className="mr-2 text-[12px] font-normal text-neutral-500">
              {product.quantity}x
            </span>
          )}
          {product.name}
        </p>
        <Badge className="mb-3 w-fit font-normal">
          <Tag size={12} weight="regular" />
          <span>{product.category}</span>
        </Badge>
        <div className="flex w-full items-center justify-between border-t border-neutral-200 pt-2">
          <div className="flex items-center space-x-2">
            <nav className="flex h-5 items-center space-x-3 text-sm">
              <button
                className="flex items-center space-x-1.5 text-[12px] font-medium text-neutral-500 transition-colors hover:text-neutral-950"
                onClick={handleClearProduct}
              >
                <Trash size={14} weight="regular" />
                <span>Delete</span>
              </button>
              <Separator orientation="vertical" />
              <div
                className={cn(
                  "flex items-center",
                  "rounded-md border border-neutral-200",
                  "bg-transparent hover:bg-transparent",
                )}
              >
                <button
                  className={cn(
                    "border-r px-1.5 py-1 text-neutral-900 transition-colors hover:bg-neutral-100",
                    product.quantity === minProduct && "cursor-not-allowed",
                  )}
                  disabled={product.quantity === minProduct}
                  onClick={handleDecrementProduct}
                >
                  <Minus size={12} weight="regular" />
                </button>
                <span className="px-2 text-[12px]">{product.quantity}</span>
                <button
                  className="border-l px-1.5 py-1 text-neutral-900 transition-colors hover:bg-neutral-100"
                  onClick={handleIncrementProduct}
                >
                  <Plus size={12} weight="regular" />
                </button>
              </div>
            </nav>
          </div>
          <p className="text-lg font-semibold tracking-tight">
            ${product.price * product.quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
