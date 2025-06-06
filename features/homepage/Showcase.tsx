import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const Showcase = () => {
  return (
    <div className="w-full h-full flex justify-center items-center py-10">
      <Card className="w-[90vw] h-full bg-gray-200">
        <CardContent className="p-5">
          <h4 className="text-2xl text-center font-semibold mb-5">Showcase</h4>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <Card key={`product_${i}`}>
                <CardContent>
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src="https://picsum.photos/id/237/536/354"
                      alt={`Product ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="mt-2 font-medium text-gray-800">
                    Product {i + 1}
                  </h4>
                  <p>Description</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Showcase;
