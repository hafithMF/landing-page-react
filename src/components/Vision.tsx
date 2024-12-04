import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Vision",
    description:
      "To become an innovative, efficient, and integrated online task submission platform that supports the advancement of digital education in the modern era.",
    icon: <ChartIcon />,
  },
  {
    title: "Mission",
    description:
      "To simplify the process of submitting and managing tasks online with a user-friendly interface.",
    icon: <WalletIcon />,
  },
  {
    title: "Goal",
    description:
      "To provide an efficient, secure, and well-structured digital learning support platform for online task submissions.",
    icon: <MagnifierIcon />,
  },
];

export const Vision = () => {
  return (
    <section id="Vision" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Vision, Mission,{" "}
            </span>
            and <></>
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Goals{" "}
            </span>
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            The energy of Indonesia's future
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
