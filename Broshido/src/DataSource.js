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
          price: "$20 per hour",
          type: "Yokai Extermination",
          booked: getRandomBookedDate()
        },
        {
          id: 2,
          image: Lauren,
          name: "Satoshi",
          price: "$30 per hour",
          type: "Yokai Extermination",
          booked: getRandomBookedDate()
        },
        {
          id: 3,
          image: Lauren,
          name: "Nene",
          price: "$20 per hour",
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
          price: "$40 per hour",
          type: "Body Guard",
          booked: getRandomBookedDate()
        },
        {
          id: 2,
          image: Lauren,
          name: "Keisuke",
          price: "$30 per hour",
          type: "Body Guard",
          booked: getRandomBookedDate()
        },
        {
          id: 3,
          image: Lauren,
          name: "Marissa",
          price: "$20 per hour",
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
          price: "$20 per hour",
          type: "Body Entertainment",
          booked: getRandomBookedDate()
        },
        {
          id: 2,
          image: Lauren,
          name: "Taro",
          price: "$30 per hour",
          type: "Body Entertainment",
          booked: getRandomBookedDate()
        },
        {
          id: 3,
          image: Lauren,
          name: "Seiya",
          price: "$25 per hour",
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
          price: "$30 per hour",
          type: "Prank Your Friends",
          booked: getRandomBookedDate()
        },
        {
          id: 2,
          image: Lauren,
          name: "Eri",
          price: "$20 per hour",
          type: "Prank Your Friends",
          booked: getRandomBookedDate()
        },
        {
          id: 3,
          image: Lauren,
          name: "Ogawa",
          price: "$50 per hour",
          type: "Prank Your Friends",
          booked: getRandomBookedDate()
        },
        {
          id: 4,
          image: Lauren,
          name: "Darren",
          price: "$20 per hour",
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
        " I went in blind when I purchased the services of this lone samurai but now I see. The performance of his blade could hardly be called sword play.  There was no “play” in this show. It was a performance of the utmost professionalism and grace that left both my guests and I spellbound. I would not hesitate to enlist his other services if they are even a fraction as bewitching and thorough as his sword show was. "
    },

    {
      name: "Lucy",
      rating: 4,
      review:
        "I started noticing I was gaining unexplainable weight during quarantine last year and I felt a strange urge to knit something. Finally, I realized I had ghost grandmas. I was apprehensive at first to call a samurai because the grandmothers didn’t seem to mean me any ill will. My concerns however were misplaced. She was able to peacefully remove them without ever lifting her sword.  The ‘bridtchen bettys” are content and relieved to be out of that “messy, junk food gluttons, dirty house”. I am very happy with Broshidos services and will be rehiring them to hunt this “glutton ghost”. Maybe they are the ones responsible for my continuing weight gain."
    },

    {
      name: "Rob",
      rating: 5,
      review:
        "Being a 5’6’’ man, my greatest fear is getting my lunch money taken at work. No matter how much I went to the gym, the bullies always won. Not anymore!! Thanks to my samurai, my entire life has changed. I don’t have to be afraid anymore! The bullies run away in shame! Bonus: at concerts my samurai lets me sit on his shoulders so I can finally see BTS!! "
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
