import Table from "@/modules/dsg/components/Table";

import { activities } from "@/data/activities";
import { projects } from "@/data/projects";
import { getDictionary } from "@/dictionaries";
import { Button, Card, Divider } from "@nextui-org/react";

const columns = {
  name: "Nome",
  description: "Descrição",
  dataVloume: "Volume de Dados",
  distributedProcessing: "Processamento Distribuído",
  point: "Pontos",
  complexity: "Complexidade",
};

export default async function Page({ params: { lang } }: any) {
  const dict = await getDictionary(lang); // en

  const itemProjects = projects.map((item) => ({
    label: item.name,
    value: item.id,
  }));
  const itemActivities = activities.map((item) => ({
    label: item.number + " - " + item.description,
    value: item.number,
  }));

  return (
    <div className="p-4">
      <Card>
        <div className="p-2">
          {/* <div className="flex justify-center">
          <div className="p-2">
            <Autocomplete
              label={dict.form.input.projects.label}
              items={itemProjects}
            />
          </div>
          <div className="p-2">
            <Autocomplete
              label={dict.form.input.activities.label}
              items={itemActivities}
            />
          </div>
          <div className="p-2">
            <Autocomplete label={"Horas"} items={itemActivities} />
          </div>
          <div className="p-2">
            <Autocomplete label={"Complexidade"} items={itemActivities} />
          </div>
          <div className="p-2">
            <Autocomplete label={"Nº Redmine"} items={itemActivities} />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="p-2">
            <Input label={"Descrição"} />
          </div>
          <div className="p-2">
            <Input label={"Artefatos"} />
          </div>
        </div> */}
          <div className="flex justify-end p-0">
            <Button>{dict.layout.button.add}</Button>
          </div>
          <div className="p-2">
            <Divider />
          </div>
          <div>
            <Table columns={columns} items={projects} />
          </div>
        </div>
      </Card>
    </div>
  );
}
