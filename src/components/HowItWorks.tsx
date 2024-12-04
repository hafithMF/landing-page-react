import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";
import { Button } from "./ui/button"; // Pastikan Anda memiliki komponen Button

interface FeatureProps {
  icon: JSX.Element;
  title: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "X - SIJA",
  },
  {
    icon: <MapIcon />,
    title: "XI - SIJA",
  },
  {
    icon: <PlaneIcon />,
    title: "XII - SIJA",
  },
  {
    icon: <GiftIcon />,
    title: "XIII - SIJA",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Collecting{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Assignments{" "}
        </span>
        for Each Class
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Don't waste your time studying because what you learn will be useful for your future.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                className="mt-4 w-full"
                onClick={() => alert(`Navigating to ${title}`)} // Ganti dengan navigasi atau aksi lain
              >
                Form Tugas
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
