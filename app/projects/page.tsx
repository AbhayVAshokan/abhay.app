import Card from "@/app/components/card";
import Header from "@/app/components/header";

const PROJECTS = [
  {
    title: "Flair",
    prefix: ["flutter", "nodejs", "mongodb"],
    summary:
      "A competitive platform for people to show off their talents in music and dance: Flutter, NodeJS, AWS.",
  },
  {
    title: "Talk Sindhi",
    link: "https://github.com/AbhayVAshokan/Talk-Sindhi",
    prefix: ["flutter"],
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit sunt excepturi nulla quasi, velit quisquam, fugiat ipsa repellat harum nostrum a autem alias eveniet quas quaerat architecto quibusdam rem doloremque aliquam eligendi accusamus. Ducimus, animi, voluptates suscipit laudantium illum quia, reprehenderit illo earum nam odio aliquid et architecto at",
  },
  {
    title: "Habituals",
    link: "https://github.com/AbhayVAshokan/Habituals",
    prefix: ["flutter", "nodejs", "mysql"],
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit sunt excepturi nulla quasi, velit quisquam, fugiat ipsa repellat harum nostrum a autem alias eveniet quas quaerat architecto quibusdam rem doloremque aliquam eligendi accusamus. Ducimus, animi, voluptates suscipit laudantium illum quia, reprehenderit illo earum nam odio aliquid et architecto at",
  },
  {
    title: "Semantic segmentation of road surface",
    link: "https://github.com/AbhayVAshokan/Semantic-Segmentation-of-Road-Surface",
    prefix: ["python", "ml", "opencv", "cnn"],
    summary:
      "U-NET Our college is in the initial stages of signing a memorandum of understanding with the Toyota Industries Corporation. We are currently working on computer vision and machine learning algorithms for developing autonomous vehicles.",
  },
  {
    title: "Object-Detection-YOLOv3",
    link: "https://github.com/AbhayVAshokan/Object-Detection-YOLOv3",
    prefix: ["python", "ml", "opencv", "html", "javascript"],
    summary:
      "U-NET Our college is in the initial stages of signing a memorandum of understanding with the Toyota Industries Corporation. We are currently working on computer vision and machine learning algorithms for developing autonomous vehicles.",
  },
  {
    //https://github.com/AbhayVAshokan/Reboot-Kerala-Hackathon-Finals
    title: "Blaze: An application for connecting students with teachers.",
    subtitle: "AI week GEC Thrissur",
    prefix: ["todo"],
    summary:
      "U-NET Our college is in the initial stages of signing a memorandum of understanding with the Toyota Industries Corporation. We are currently working on computer vision and machine learning algorithms for developing autonomous vehicles.",
  },

  {
    // https://github.com/AbhayVAshokan/Live-Face-Recognition
    title: "Live face recognition",
    subtitle: "AI week GEC Thrissur",
    prefix: ["python", "ml", "opencv"],
    summary:
      "U-NET Our college is in the initial stages of signing a memorandum of understanding with the Toyota Industries Corporation. We are currently working on computer vision and machine learning algorithms for developing autonomous vehicles.",
  },
  {
    // https://github.com/TEDxStTeresasCollege-Website/Web-App
    title: "TEDxStTeresa 2022",
    subtitle: "AI week GEC Thrissur",
    prefix: ["nextjs"],
    summary:
      "U-NET Our college is in the initial stages of signing a memorandum of understanding with the Toyota Industries Corporation. We are currently working on computer vision and machine learning algorithms for developing autonomous vehicles.",
  },
];

const Projects = () => (
  <main className="flex-1 space-y-12">
    <section className="max-w-3xl mx-auto my-8">
      <Header>Projects</Header>
      <p className="my-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem
        libero a exercitationem minima minus, ex ducimus unde voluptates illo
        ipsam corrupti nostrum in quo sit fugiat consequuntur assumenda. Vel
        modi, soluta quis adipisci a perferendis laudantium earum assumenda
        labore ea, ipsum totam aliquam, et architecto optio laboriosam natus
        facilis?
      </p>
      <div>
        {PROJECTS.map((project, index) => (
          <Card key={index} index={index + 1} {...project} />
        ))}
      </div>
    </section>
  </main>
);

export default Projects;
