import { FocusCards } from "./focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Car Wrap",
      src: '/work5.jpeg'
    },
    {
      title: "Paint Protection Film",
      src: '/work7.jpeg'
    },
    {
      title: "Ceramic Coating & Chrome Details",
      src: "/work4.jpg"
    },
    {
      title: "Lights Tint",
      src: '/work9.jpeg'
    },
    {
      title: "Car Detailing",
      src: "/work14.jpg"
    }
  ];

  return <FocusCards cards={cards} />;
}
