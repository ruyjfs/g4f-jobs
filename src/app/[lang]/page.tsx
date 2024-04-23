"use client";

import { personas } from "@/data/personas";
import { Card, CardFooter } from "@nextui-org/react";
import NextImage from "next/image";

import useNavigate from "@/modules/dsg/hooks/useNavigate";
import arq from "../../assets/images/arq.jpg";
import dev from "../../assets/images/dev.jpg";
import gp from "../../assets/images/gp.jpg";
import req from "../../assets/images/req.jpg";

const columns = {
  name: "Nome",
  description: "Descrição",
  dataVloume: "Volume de Dados",
  distributedProcessing: "Processamento Distribuído",
  point: "Pontos",
  complexity: "Complexidade",
};

export default function Page({ params: { lang } }: any) {
  const { redirect } = useNavigate();

  const images: any = {
    dev: dev,
    req: req,
    arq: arq,
    gp: gp,
  };

  const itemProjects = personas.map((item) => ({
    name: item.name,
    flag: item.flag,
    img: item.img,
  }));

  const onPress = (item: any) => () => {
    console.log("clicoiu", item);
    redirect("/user/activities");
  };

  return (
    <div className="gap-6 md:h-full md:flex justify-center  items-center">
      {itemProjects.map((item, index) => (
        <div key={item.flag} className="flex items-center justify-center">
          <Card
            onPress={onPress(item)}
            isBlurred
            shadow="sm"
            radius="lg"
            className="border-none"
            isFooterBlurred
            isPressable
          >
            <NextImage
              alt="Woman listing to music"
              className="object-cover"
              height={200}
              width={200}
              src={images[item?.flag] ? images[item?.flag] : ""}
            />
            <CardFooter className=" before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">{item.name}</p>
              {/* <Button
              className="text-tiny text-white bg-black/20"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
            >
              Notify me
            </Button> */}
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}

// dramatic portrait of a geisha, cinematography --ar 16:9 --v 6.0 --s 250

// Cartoon de um engenheiro de software feliz, para usar como icone de um aplicativo
// https://stablediffusionweb.com/pt/app/image-generator
// Cartoon de um programador feliz para usar como icone de um aplicativo
// Cartoon de um gerente de projeto de software feliz para usar como icone de um aplicativo
