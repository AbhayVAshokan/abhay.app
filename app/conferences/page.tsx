import Card from "@/app/components/card";
import Header from "@/app/components/header";
import { Metadata } from "next";

const TALKS = [
  {
    title: "Reading the Ruby AST to write RuboCop rules",
    subtitle: "RubyConf India 2024",
    prefix: "November 30, 2024",
    summary:
      "I delivered a lightning talk on the day two of the conference. I showed how easy it is to read the Ruby AST using several examples by live coding. Then I proceeded to explain how to use this knowledge to write a RubyCop rule to throw the usages of 'pluck().first' method as an offense and to prefer 'pick' method instead.",
    link: "https://youtu.be/eGnhXyYQRos?si=VhCOIY0uowtSeT2u&t=594",
    target: "_blank",
  },
  {
    title:
      "Panel discussion: Thread of thoughts: navigating diverse career paths",
    subtitle: "Proxy 2024 - GEC Thrissur",
    prefix: "September 30, 2024",
    summary:
      "GEC Thrissur alumni organized a panel discussion inviting alumnis from different domains. It was a fun and interactive session where we discussed our experiences, shared our opinions, and answered the students' questions.",
  },
  {
    title: "Solid Cache",
    subtitle: "Kerala Ruby meetup 2024",
    prefix: "February 10, 2024",
    summary:
      "Solid Cache is a database-backed Active Support cache store implementation in Ruby. In this talk, I focused on breaking down the Solid Cache architecture, discussing several design decisions, and how it compares with Redis. I highlighted the differences in performance and cost, and debated when Solid Cache might be the better choice for your applications.",
  },
  {
    title: "Discovering your passion and stepping into the world of tech",
    subtitle: "Inauguration of Meet the Alumni in GEC Thrissur",
    prefix: "December 4, 2023",
    summary:
      "I delivered a talk to kick off the Meet the Alumni event at GEC Thrissur. It was an interactive session with students of GEC Thrissur where we discussed my experience in the industry and all the options they needed to explore.",
  },
  {
    title: "An optical illution for machines",
    subtitle: "AI week in GEC Thrissur",
    prefix: "November 14, 2022",
    summary:
      "An interactive talk on Generative AI. I discussed the challenges of implementing generative models, ethical dilemmas, technical difficulties, and potential real-world implementations and insights.",
  },
];

const CONFERENCES = [
  {
    title: "RubyConf India 2024",
    prefix: "November 29-30, 2024",
    summary:
      "The 2024 edition was held in Jaipur - The Pink City. The city with it's huge palaces and forts just blows you away. The talks were decent. I did a lightning talk on 'Reading the Ruby AST and to write RuboCop rule'. There were a lot of familiar faces from the last conference, which made it easy to network.",
  },
  {
    title: "RubyConf India 2023",
    prefix: "August 26-27, 2023",
    summary:
      "The 2023 edition took place in Pune. It was impressive to find several Ruby enthusiasts at the same place. The talks were very insightful, it covered topics such as concurrency in Ruby, async ruby, evolution of JS tooling in Ruby on Rails, enhancing performance, metaprogramming, the dissection of Rails, and much more.",
  },
  {
    title: "PyCon India 2023",
    prefix: "Sept 29 - Oct 2, 2023",
    summary:
      "This year's PyCon felt more like a general programming conference than a Python-specific event, making it more fun. The conference brought together like-minded tech enthusiasts and featured a variety of nice talks.",
  },
  {
    title: "IEEE AICSSCE 2019",
    prefix: "November 14, 2019",
    summary:
      "This was one of the main conferences of the IEEE Society in India. This is where I first came across tools like Elastic search, and Kubernetes, and had hands-on experience in drone building and more. I made several new friends who are still close to me today. It was also amazing to see how IEEE worked as a team during the 2018 Kerala floods.",
  },
];

export const metadata: Metadata = {
  title: "Conferences | Abhay V Ashokan",
  alternates: {
    canonical: "https://abhay.app/conferences",
  },
};

const Talks = () => (
  <main className="flex-1 space-y-12">
    <section className="max-w-3xl mx-auto my-8">
      <Header>Talks</Header>
      <p className="my-8">
        I attend numerous conferences and meetups but have only delivered a
        handful of talks. Here are some notable ones.
      </p>
      <div>
        {TALKS.map((talk, index) => (
          <Card key={index} index={index + 1} {...talk} />
        ))}
      </div>
    </section>

    <section className="max-w-3xl mx-auto my-8">
      <Header>Conferences</Header>
      <p className="my-8">
        Conferences are a great place to find like-minded tech enthusiasts,
        learn about what is new in the industry, network, travel, explore new
        places, and much more. Here are a few notable conferences that I have
        attended.
      </p>
      <div>
        {CONFERENCES.map((conference, index) => (
          <Card key={index} index={index + 1} {...conference} />
        ))}
      </div>
    </section>
  </main>
);

export default Talks;
