import { Columns4, CreditCard } from "lucide-react";
import { Button } from "./ui/button";

export function GallerySection() {
  return (
    <div className="w-full px-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">Gallery</h2>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="bg-accent rounded-full hover:bg-accent/50"
          >
            <Columns4 />
            Legal
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="bg-accent rounded-full hover:bg-accent/50"
          >
            <CreditCard />
            Pricing
          </Button>
        </div>
      </div>
    </div>
  );
}
