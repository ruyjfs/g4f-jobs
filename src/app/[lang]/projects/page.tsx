import Table from "@/modules/dsg/components/Table";

import { activities } from "@/data/activities";
import { projects } from "@/data/projects";
import { Card } from "@nextui-org/react";

const columns = {
  name: "Nome",
  description: "Descrição",
  point: "Pontos",
  complexity: "Complexidade",
};

export default async function Page({ params: { lang } }: any) {
  // const dict = await getDictionary(lang); // en

  const itemProjects = projects.map((item) => ({
    label: item.name,
    value: item.id,
  }));
  const itemActivities = activities.map((item) => ({
    label: item.number + " - " + item.description,
    value: item.number,
  }));

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
          <Table columns={columns} items={projects} />
        </div>
      </div>
    </Card>
  );
}
