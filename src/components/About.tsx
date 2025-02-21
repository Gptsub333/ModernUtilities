import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Modern Utilities
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              Modern Utilities is a leading provider of high-speed internet, mobile, landline, TV, and smart home solutions across the United States. We offer affordable and flexible plans designed to keep you connected with seamless fiber-optic internet, nationwide mobile coverage, and crystal-clear landline services. Our premium TV and cable packages bring you the best in HD entertainment and on-demand content, while our smart home solutions enhance your living experience with automation and security. With reliable services starting at just $9.99/month, Modern Utilities is your one-stop shop for cutting-edge connectivity and home solutions.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
