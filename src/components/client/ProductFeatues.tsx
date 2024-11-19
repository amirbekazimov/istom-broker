import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const ProductFeatues = ({ item }: string) => {
    console.log(item);

    return (
        <div>
            <Tabs defaultValue="description" className=" p-0">
                <TabsList className="bg-transparent p-0 md:border-b justify-start overflow-auto  w-full rounded-none text-[14px] md:text-base space-x-4">
                    <TabsTrigger value="description">Описание</TabsTrigger>
                    <TabsTrigger value="reviews">Отзывы</TabsTrigger>
                    <TabsTrigger value="characteristics">
                        Характеристики
                    </TabsTrigger>
                    <TabsTrigger value="payment">Оплата</TabsTrigger>
                    <TabsTrigger value="delivery">Доставка</TabsTrigger>
                </TabsList>
                <TabsContent value="description">
                    <div className="mt-4">
                        <h2 className="text-[16px] md:text-[24px] font-semibold">
                            Характеристики
                        </h2>
                        <div
                            className="pt-3"
                            dangerouslySetInnerHTML={{
                                __html: item,
                            }}
                        />
                    </div>
                </TabsContent>
                <TabsContent value="password">
                    Change your password here.
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default ProductFeatues;
