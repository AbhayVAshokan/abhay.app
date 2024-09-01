import Card from "@/app/components/card";
import Header from "@/app/components/header";

const PROJECTS = [
  {
    title: "Flair",
    prefix: ["flutter", "nodejs", "mongodb", "aws"],
    summary:
      "A competitive platform for people to show off their talents in music and dance. It started as a side project to kill time during lockdown. Soon, it started showing good potential. We noticed that the traditional algorithms promoted clickbait content and not the best talent. So we developed our own algorithm to rank video submissions for competitions. It is built using Flutter, Node.js and deployed in AWS. Unfortunately, it is now taken down from Play Store due to lack of maintenance when we went our separate ways after college.",
  },
  {
    title: "Talk Sindhi",
    link: "https://github.com/AbhayVAshokan/Talk-Sindhi",
    target: "_blank",
    prefix: ["flutter"],
    summary:
      "This is a mobile application to help users learn the language Sindhi. It has a fun interface to learn Sindhi using English or Hindi as the primary medium. Additionally, the app offers interactive quizzes to assess the user's knowledge. This was developed during my internship at Infoware India.",
  },
  {
    title: "Habituals",
    link: "https://github.com/AbhayVAshokan/Habituals",
    target: "_blank",
    prefix: ["flutter", "nodejs", "mysql"],
    summary:
      "This is a corporate mobile application for helping with mental health. The app provides audits and nudges to make sure that there is a good employee wellbeing. It was developed using Flutter and Node.js during my internship at Infoware India. ",
  },
  {
    target: "_blank",
    title: "TEDx StTeresasCollege",
    prefix: ["nextjs"],
    summary: "Curated the website development of TEDx StTeresasCollege.",
  },
  {
    title: "Semantic segmentation of road surface",
    link: "https://github.com/AbhayVAshokan/Semantic-Segmentation-of-Road-Surface",
    target: "_blank",
    prefix: ["python", "ml", "opencv", "cnn"],
    summary:
      "Semantic segmentation of road surface using the Indian Driving Dataset (IDD). Here, the IDD dataset was transformed to a collection of masks using binary thresholding. The result was trained on a U-NET (end-to-end fully convolutional network).",
  },
  {
    title: "Object-Detection-YOLOv3",
    link: "https://github.com/AbhayVAshokan/Object-Detection-YOLOv3",
    target: "_blank",
    prefix: ["python", "ml", "opencv", "nodejs"],
    summary:
      "The input video is first checked for motion detection. If a motion is detected, every second frame is processed using YOLOv3 object detection algorithm loaded with pre-trained weights. The dashboard sends API request to the Node.js server to execute object detection in a virtual Python shell.",
  },
  {
    title: "Live face recognition",
    link: "https://github.com/AbhayVAshokan/Live-Face-Recognition",
    target: "_blank",
    prefix: ["python", "ml", "opencv"],
    summary:
      "Live training and recognition of faces using convolutional neural network.",
  },
];

export const metadata = {
  title: "Projects | Abhay V Ashokan",
};

const Projects = () => (
  <main className="flex-1 space-y-12">
    <section className="max-w-3xl mx-auto my-8">
      <Header>Projects</Header>
      <p className="my-8">
        I have more unfinished projects than the number of tabs that are open on
        my browser. There are a lot more on my to-do. For me, side projects are
        a great way to kill time and learn something new. Here are a few good
        ones that I built during my time in college.
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
