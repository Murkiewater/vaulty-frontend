import { Billboard as billboardType} from "@/types";

interface BillboardProps {
    data: billboardType
};

const Billboard: React.FC<BillboardProps> = ({
    data
}) => {
    return ( 
        <div className="rounded-xl overflow-hidden">
            <div 
                className="rounded-xl relative aspect-[16/9] md:aspect-[2.4/1] overflow-hidden bg-cover"
                style={{ backgroundImage: `url(${data?.imageUrl})` }}>
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white">
                        {data.label}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Billboard;