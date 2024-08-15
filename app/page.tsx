import classNames from "classnames";
import { Caveat } from "next/font/google";
import Image from "next/image";

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const Home = () => (
  <main>
    {/* 100vh - navbar height - footer height - navbar margin */}
    <section className="h-[calc(100vh-58px-32px-2rem)] flex items-center">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 my-auto">
          <h1 className="text-4xl mb-4">
            Hi, I am{" "}
            <span
              className={classNames(
                "inline-block relative text-7xl",
                caveat.className
              )}
            >
              Abhay V Ashokan
              <Image
                className="-z-10"
                fill
                src="/home/overlay.svg"
                alt="Hero overlay"
              />
            </span>
          </h1>
          <h2 className="text-lg">
            Some quote long quote by me Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sint blanditiis deleniti incidunt voluptates fuga, sequi quo vitae ipsa delectus repellat cum excepturi molestias officiis magnam, iusto, et minima provident! Exercitationem dolores, explicabo perferendis aperiam itaque quo autem et ipsa iure illo, fuga culpa in mollitia commodi magni? Perspiciatis consequatur ut itaque minus nulla quae libero voluptas laudantium voluptatum, provident sit autem quibusdam ratione recusandae architecto, ea deleniti necessitatibus? Maxime eos voluptatibus itaque id cum!
          </h2>
        </div>
        <div className="col-span-4 relative aspect-[16/23]">
          <Image fill priority src="/home/abhay.webp" alt="Abhay V Ashokan" />
        </div>
      </div>
    </section>
  </main>
);

export default Home;
