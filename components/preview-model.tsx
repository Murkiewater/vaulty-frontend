"use client";

import usePreviewModel from "@/hooks/use-preview-model";
import Model from "@/components/ui/model";
import Gallery from "@/components/gallery";
import Info from "./info";
const PreviewModel = () => {
    const previewModel = usePreviewModel();
    const product = usePreviewModel((state) => state.data);

    if (!product) {
        return null;
    }

    return (
        <Model open={previewModel.isOpen} onClose={previewModel.onClose}>
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 items-start gap-x-6 gap-y-8 lg:gap-x-8">
                <div className="w-full sm:w-1/2">
                    <Gallery images={product.images}/>
                </div>
                <div className="w-full sm:w-1/2">
                    <Info data={product}/>
                </div>
            </div>
        </Model>
    );
}
 
export default PreviewModel;