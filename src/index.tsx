import { format } from "@formkit/tempo";
import { useEffect, useState } from "react";

import { useProducts } from "@/store/products";
import { cn } from "@/utils/cn";

import AddProduct from "@/components/addProduct";
import Product from "@/components/product";
import AddPromoCode from "@/components/addPromoCode";

import { Separator } from "@/ui/separator";
import { Button } from "@/ui/button";
import { ShoppingBagOpen, Ticket, Trash } from "@/ui/icons";
import { toast } from "@pheralb/toast";

const Home = () => {
  const { products, startedDate, resetDate, discount, clearProducts } =
    useProducts();
  const sectionClass = cn("my-3 shadow-sm flex flex-col space-y-3 bg-white");
  const [totalPrice, setTotalPrice] = useState<number>();

  const handleClearProducts = () => {
    clearProducts();
    toast.success({
      text: "Cart cleared",
      description: "All products have been removed from the cart",
    });
    resetDate();
  };

  useEffect(() => {
    const total = products.reduce((acc, product) => {
      if (discount) {
        const discountPrice = product.price * (discount.discount / 100);
        return acc + (product.price - discountPrice) * product.quantity;
      }
      return acc + product.price * product.quantity;
    }, 0);
    setTotalPrice(total);
  }, [products, discount]);

  return (
    <main
      className={cn(
        "container mx-auto flex h-[screen] max-w-4xl flex-col items-center justify-center px-4 md:h-[85vh] md:px-0",
      )}
    >
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-medium tracking-tight">
          Tienda - El Topo
        </h2>
        <div className="grid h-screen grid-cols-1 gap-1 md:h-[60vh] md:grid-cols-[300px,600px] md:gap-3">
          <section
            className={cn(
              sectionClass,
              "flex flex-col space-y-[10px] rounded-md border border-neutral-200 p-3",
            )}
          >
            <div className="flex-1 border-b border-neutral-200">
              <h2 className="mb-4 text-xl font-semibold tracking-tight text-neutral-500">
                Add Products
              </h2>
              <AddProduct />
            </div>
            <div className="flex flex-col space-y-2">
              <AddPromoCode>
                <Button variant="outline">
                  <Ticket size={18} />
                  {discount ? (
                    <span>Edit Promo Code</span>
                  ) : (
                    <span>Add Promo Code</span>
                  )}
                </Button>
              </AddPromoCode>
              <Button
                variant="outline"
                onClick={handleClearProducts}
                disabled={!products.length}
              >
                <Trash size={18} />
                <span>Clear Products</span>
              </Button>
            </div>
          </section>
          <section
            className={cn(
              sectionClass,
              "flex flex-col rounded-md border border-neutral-200 p-3",
            )}
          >
            <div className="mb-4 flex w-full items-center justify-between">
              <h2 className="text-xl font-semibold tracking-tight text-neutral-500">
                My Cart {products.length > 0 && `(${products.length})`}
              </h2>
              {startedDate && (
                <p className="font-mono text-sm">
                  {format(startedDate, { date: "short", time: "short" })}
                </p>
              )}
            </div>
            <div className="mb-3 max-h-[50vh] flex-1 overflow-y-auto">
              {products.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center space-y-1 py-4">
                  <ShoppingBagOpen strokeWidth={1.5} size={35} />
                  <p className="text-lg font-semibold text-neutral-500">
                    No products added
                  </p>
                </div>
              ) : (
                <div
                  className={cn(
                    "space-y-2 pb-2",
                    products.length > 3 && "mr-2",
                  )}
                >
                  {products.map((product) => (
                    <Product key={product.productId} {...product} />
                  ))}
                </div>
              )}
            </div>
            {products.length > 0 && (
              <div className="flex flex-col">
                <Separator className="mb-2" />
                {discount && (
                  <div className="my-1 flex items-center justify-between">
                    <p className="text-sm tracking-tight">
                      Discount{" "}
                      <span className="font-mono">({discount.name})</span>
                    </p>
                    <p className="font-mono tracking-tight text-green-800">
                      {discount.discount}%
                    </p>
                  </div>
                )}
                {totalPrice && (
                  <div className="flex items-center justify-between">
                    <p className="text-sm tracking-tight">Total</p>
                    <p className="font-mono text-lg font-semibold tracking-tight">
                      ${totalPrice.toFixed(2)}
                    </p>
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;
