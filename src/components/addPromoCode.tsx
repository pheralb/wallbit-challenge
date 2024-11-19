import { useState, type ReactNode } from "react";
import { discountCode } from "@/globals";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";

import { toast } from "@pheralb/toast";
import { Plus, Ticket, Trash, X } from "@/ui/icons";
import { useProducts } from "@/store/products";

interface AddPromoCodeProps {
  children: ReactNode;
}

const AddPromoCode = (props: AddPromoCodeProps) => {
  const { discount, setDiscount } = useProducts();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [promoCode, setPromoCode] = useState<string>("");

  const handleAddPromo = () => {
    if (promoCode.toUpperCase() === discountCode.text) {
      toast.success({
        text: "Promo code applied successfully",
        description: `You have received a ${discountCode.discount}% discount`,
      });
      setDiscount({
        name: discountCode.text,
        discount: discountCode.discount,
      });
      setIsOpen(false);
    } else {
      toast.error({
        text: "Invalid promo code",
        description: "Please enter a valid promo code",
      });
    }
  };

  const handleDeletePromo = () => {
    setDiscount(null);
    toast.success({
      text: "Promo code removed",
      description: "You have removed the promo code discount",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter promo code</DialogTitle>
          <DialogDescription>
            If you have a promo code, enter it here to redeem your discount.
          </DialogDescription>
        </DialogHeader>
        <div className="relative">
          <Input
            placeholder="ABCD"
            className="w-full pl-10 uppercase"
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <Ticket
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 -rotate-12 transform text-neutral-500"
          />
        </div>
        {discount && (
          <div className="rounded-md border border-neutral-200 p-2 text-sm text-neutral-600">
            <p>
              You already have a discount{" "}
              <span className="font-mono">"{discount.name}"</span> applied. If
              you apply a new promo code, the discount will be replaced.
            </p>
          </div>
        )}
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            <X size={16} />
            <span>Cancel</span>
          </Button>
          {discount && (
            <Button variant="outline" onClick={() => handleDeletePromo()}>
              <Trash size={16} />
              <span>Remove Discount</span>
            </Button>
          )}
          <Button onClick={handleAddPromo}>
            <Plus size={16} />
            <span>Apply</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddPromoCode;
