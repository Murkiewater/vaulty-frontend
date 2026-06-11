import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });
    const billboard = await getBillboard('c8113295-3cd3-4eda-a9c3-10853bd897d4');
    
    return (
        <div className="space-y-10 pb-10">
            <div className="px-4 sm:px-6 lg:px-8 xl:px-10">
                <Billboard data={billboard} />
            </div>
            <Container>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured products" items={products}/>
                </div>
            </Container>
        </div>
    );
};
 
export default HomePage;