import Lauren from "./Images/Lauren.jpg";
export function fetchSamuraiProfiles() {
  return [
    {
      title: "Yokai Extermination",
      children: [
        { id: 1, image: Lauren , name: "Lauren" },
        { id: 2, name: "Suga" },
        { id: 3, name: "Taro" }
      ]
    },
    {
      title: "Body Guard",
      children: [
        { id: 1, name: "Ken" },
        { id: 2, name: "Keisuke" },
        { id: 3, name: "Machan" }
      ]
    },
    {
      title: "Entertainment",
      children: [
        { id: 1, name: "Satoshi" },
        { id: 2, name: "Marissa" },
        { id: 3, name: "Seiya" }
      ]
    },
    {
      title: "Prank Your Friends",
      children: [
        { id: 1, name: "Darren" },
        { id: 2, name: "Echan" },
        { id: 3, name: "Someone" }
      ]
    }
  ];
}

export function fetchTestimonials() {
  return [
    {
      name: "Tim",
      rating: 5,
      review: "something"
    },

    {
      name: "Tim",
      rating: 4,
      review: "something"
    },

    {
      name: "Tim",
      rating: 4,
      review: "something"
    }
  ];
}
