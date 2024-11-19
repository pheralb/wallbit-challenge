import type { ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";

interface AddPromoCodeProps {
  children: ReactNode;
}

const AddPromoCode = (props: AddPromoCodeProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter promo code</DialogTitle>
          <DialogDescription>
            If you have a promo code, enter it here to redeem your discount.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddPromoCode;
