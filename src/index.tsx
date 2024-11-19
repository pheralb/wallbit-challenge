import { format } from "@formkit/tempo";

import { useProducts } from "./store/products";
import { cn } from "./utils/cn";

import AddProduct from "./components/addProduct";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Ticket, Trash } from "@/ui/icons";
import Product from "./components/product";
import { useEffect, useState } from "react";

const Home = () => {
  const { products, startedDate, resetDate, clearProducts } = useProducts();
  const sectionClass = cn(
    "my-3 shadow-sm flex flex-col space-y-3 h-full bg-white",
  );
  const [totalPrice, setTotalPrice] = useState<number>();

  const handleClearProducts = () => {
    clearProducts();
    resetDate();
  };

  useEffect(() => {
    const total = products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    setTotalPrice(total);
  }, [products]);

  return (
    <main
      className={cn(
        "container mx-auto flex h-[80vh] max-w-4xl flex-col justify-center",
      )}
    >
      <div className="h-[50vh] max-h-[50vh]">
        <h2 className="text-2xl font-medium tracking-tight">
          Tienda - El Topo
        </h2>
        <div className="grid h-full grid-cols-1 gap-3 md:grid-cols-[300px,1fr]">
          <section
            className={cn(
              sectionClass,
              "flex h-full flex-col space-y-[10px] rounded-md border border-neutral-200 p-3",
            )}
          >
            <div className="flex-1 border-b border-neutral-200">
              <h2 className="mb-4 text-xl font-semibold tracking-tight text-neutral-500">
                Add Products
              </h2>
              <AddProduct />
            </div>
            <div className="flex flex-col space-y-2">
              <Button variant="outline">
                <Ticket weight="regular" size={18} />
                <span>Add promo code</span>
              </Button>
              <Button variant="outline" onClick={handleClearProducts}>
                <Trash weight="regular" size={18} />
                <span>Clear Products</span>
              </Button>
            </div>
          </section>
          <section className={cn(sectionClass, "flex h-full flex-col")}>
            <div className="flex h-full flex-col rounded-md border border-neutral-200 p-3">
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

              {/* Contenedor para productos con scroll */}
              <div className="max-h-[45vh] flex-1 overflow-y-auto">
                {products.length === 0 ? (
                  <p>No hay productos en el carrito</p>
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
                <div className="flex flex-col space-y-3">
                  <Separator />
                  {totalPrice && (
                    <div className="flex items-center justify-between">
                      <p className="tracking-tight">Total</p>
                      <p className="text-lg font-semibold tracking-tight">
                        ${totalPrice.toFixed(2)}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;
