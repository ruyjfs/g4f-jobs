import Table from "@/modules/dsg/components/Table";

import { activities } from "@/data/activities";
import { getDictionary } from "@/dictionaries";
import { Card } from "@nextui-org/react";

const columns = {
  number: "Number",
  description: "Description",
};

export default async function Page({ params: { lang } }: any) {
  const dict = await getDictionary(lang); // en

  return (
    <Card className="m-4">
      <div className="p-2">
        {/* <div className="flex justify-center">
          <div className="p-2">
            <Input label={"Name"} />
          </div>
          <div className="p-2">
            <Input label={"Descrição"} />
          </div>
        </div>
        <div className="flex justify-end p-4">
          <Button>{dict.layout.button.search}</Button>
        </div>
        <div className="p-4">
          <Divider />
        </div> */}
        <div>
          <Table columns={columns} items={activities} />
        </div>
      </div>
    </Card>
  );
}
