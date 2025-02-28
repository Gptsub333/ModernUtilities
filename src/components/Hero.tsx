import { Button } from "./ui/button";

import pilot from "../assets/modernu.jpg";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Modern
            </span>{" "}
            Utilities
          </h1>
          <br />
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              #1
            </span>{" "}
            Ranked,
          </h2>
          <br />
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Authorized
            </span>{" "}
            Dealer
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        for all your high speed Internet / WIFI / Cable and Satellite TV service / Phone ( VOIP , Mobile , Landline ) & much more! <br/> One stop shop for all your technology needs. Disabled combat Army veteran owned and operated business based in Las Vegas. Now licensed in all 50 States !
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>
        </div>
      </div>

      {/* Image replacing HeroCards */}
      <div className="z-10 w-full h-full">
        <img
          src={pilot}
          alt="Hero Section Image"
          className="w-full h-full rounded-lg shadow-lg object-fit"
        />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
