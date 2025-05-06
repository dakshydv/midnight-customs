import { FocusCards } from "./focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Car Wrap",
      // src: "https://images.unsplash.com/photo-1699077988968-cbfdbe37722d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      src: '/work5.jpeg'
    },
    {
      title: "Paint Protection Film",
      // src: "https://www.shutterstock.com/image-photo/male-specialist-applying-car-tinting-600nw-744143530.jpg",
      src: '/work7.jpeg'
    },
    {
      title: "Ceramic Coating & Chrome Details",
      // src: "https://plus.unsplash.com/premium_photo-1661443869623-ec8453ac6d15?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      src: "/work4.jpeg"
    },
    {
      title: "Lights Tint",
      // src: "https://images.unsplash.com/photo-1639060016125-dfde31ca1af8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      src: '/work9.jpeg'
    },
    {
      title: "Car Detailing",
      // src: "https://images.unsplash.com/photo-1607888636714-cfb15703ee44?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      src: "/work14.jpg"
    }
  ];

  return <FocusCards cards={cards} />;
}
