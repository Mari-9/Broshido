import Lauren from "./Images/Lauren.jpg";
const month = new Date().getMonth();
function randomDay(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomBookedDate() {
  return [
    [
      new Date(2021, month, randomDay(2, 9)),
      new Date(2021, month, randomDay(11, 17))
    ]
  ];
}
export function fetchSamuraiProfiles() {
  return [
    {
      title: "Yokai Extermination",
      children: [
        {
          id: 1,
          image: Lauren,
          name: "Lauren",
          price: 20,
          type: "Yokai Extermination",
          booked: getRandomBookedDate()
        },
        {
          id: 2,
          image: Lauren,
          name: "Satoshi",
          price: 20,
          type: "Yokai Extermination",
          booked: getRandomBookedDate()
        },
        {
          id: 3,
          image: Lauren,
          name: "Nene",
          price: 20,
          type: "Yokai Extermination",
          booked: getRandomBookedDate()
        }
      ]
    },
    {
      title: "Body Guard",
      children: [
        {
          id: 1,
          image: Lauren,
          name: "Suga",
          price: 20,
          type: "Body Guard",
          booked: getRandomBookedDate()
        },
        {
          id: 2,
          image: Lauren,
          name: "Keisuke",
          price: 20,
          type: "Body Guard",
          booked: getRandomBookedDate()
        },
        {
          id: 3,
          image: Lauren,
          name: "Marissa",
          price: 20,
          type: "Body Guard",
          booked: getRandomBookedDate()
        }
      ]
    },
    {
      title: "Entertainment",
      children: [
        {
          id: 1,
          image: Lauren,
          name: "Ken",
          price: 20,
          type: "Body Entertainment",
          booked: getRandomBookedDate()
        },
        {
          id: 2,
          image: Lauren,
          name: "Taro",
          price: 20,
          type: "Body Entertainment",
          booked: getRandomBookedDate()
        },
        {
          id: 3,
          image: Lauren,
          name: "Seiya",
          price: 20,
          type: "Body Entertainment",
          booked: getRandomBookedDate()
        }
      ]
    },
    {
      title: "Prank Your Friends",
      children: [
        {
          id: 1,
          image: Lauren,
          name: "Naoko",
          price: 20,
          type: "Prank Your Friends",
          booked: getRandomBookedDate()
        },
        {
          id: 2,
          image: Lauren,
          name: "Eri",
          price: 20,
          type: "Prank Your Friends",
          booked: getRandomBookedDate()
        },
        {
          id: 3,
          image: Lauren,
          name: "Ogawa",
          price: 20,
          type: "Prank Your Friends",
          booked: getRandomBookedDate()
        },
        {
          id: 4,
          image: Lauren,
          name: "Darren",
          price: 20,
          type: "Prank Your Friends",
          booked: getRandomBookedDate()
        }
      ]
    }
  ];
}

export function fetchTestimonials() {
  return [
    {
      name: "Tim",
      rating: 5,
      review:
        "I went in blind when I purchased the services of this lone samurai but now I see. The performance of his blade could hardly be called sword play. It left both my guests and I spellbound."
    },

    {
      name: "Lucy",
      rating: 4,
      review: "something"
    },

    {
      name: "Rob",
      rating: 4,
      review: "something"
    }
  ];
}

export function fetchOrders() {
  return [
    {
      orderId: 3482,
      status: "completed"
    },
    {
      orderId: 3389,
      status: "pending"
    },
    {
      orderId: 3879,
      status: "confirmed"
    }
  ];
}
