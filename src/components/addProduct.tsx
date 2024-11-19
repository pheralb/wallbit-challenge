import { useState } from "react";
import axios from "axios";
import { toast } from "@pheralb/toast";

import { apiUrl } from "@/globals";

import { ProductForm, productFormSchema } from "@/schemas/product.schema";
import { useProducts } from "@/store/products";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import { Plus } from "@phosphor-icons/react";

const AddProduct = () => {
  const { products, startedDate, startDate, addProduct, updateProduct } =
    useProducts();
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<ProductForm>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      quantity: 1,
      productId: 0,
    },
  });

  const handleSubmitProduct = async (values: ProductForm) => {
    try {
      const fullUrl = `${apiUrl}/${values.productId}`;
      const response = await axios.get(fullUrl);

      if (
        response.status === 200 &&
        (!response.data || typeof response.data !== "object")
      ) {
        toast.error({
          text: "This product does not exist",
          description: `Product ID: ${values.productId}`,
        });
        return;
      }

      if (!startedDate) {
        startDate();
      }

      const dataResponse = {
        name: response.data.title as string,
        price: response.data.price as number,
        category: response.data.category as string,
        imageUrl: response.data.image as string,
      };

      if (products.some((product) => product.productId === values.productId)) {
        updateProduct({
          ...values,
          ...dataResponse,
        });
      } else {
        addProduct({
          ...values,
          ...dataResponse,
        });
      }

      toast.success({
        text: "Product added successfully",
        description: `${dataResponse.name}`,
      });

      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitProduct)}
        className="flex flex-col space-y-4"
      >
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Quantity"
                  min={1}
                  disabled={loading}
                  {...field}
                  onChange={(event) => field.onChange(+event.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="productId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product ID</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Product ID"
                  disabled={loading}
                  {...field}
                  onChange={(event) => field.onChange(+event.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading}>
          <Plus weight="regular" size={16} />
          <span>Add</span>
        </Button>
      </form>
    </Form>
  );
};

export default AddProduct;
