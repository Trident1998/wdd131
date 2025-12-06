const initialImages = [
  {
    id: 1,
    src: 'images/ski-slope.webp',
    alt: 'Ski Slope',
    season: 'winter',
    date: '2024-01-15',
    location: 'Slope 2A',
  },
  {
    id: 2,
    src: 'images/lake-of-youth.webp',
    alt: 'Lake of Youth',
    season: 'summer',
    date: '2023-07-20',
    location: 'Lake of Youth',
  },
  {
    id: 3,
    src: 'images/evening-bukovel.webp',
    alt: 'Evening Bukovel',
    season: 'winter',
    date: '2024-02-10',
    location: 'City Center',
  },
  {
    id: 4,
    src: 'images/bike-ride.webp',
    alt: 'Bike Ride',
    season: 'summer',
    date: '2023-08-05',
    location: 'Forest Trail',
  },
  {
    id: 5,
    src: 'images/ski-lift.webp',
    alt: 'Ski Lift',
    season: 'winter',
    date: '2024-01-25',
    location: 'Lift #14',
  },
  {
    id: 6,
    src: 'images/summer-mountains.webp',
    alt: 'Summer Mountains',
    season: 'summer',
    date: '2023-06-15',
    location: 'Dovha Mountain',
  },
  {
    id: 7,
    src: 'images/snowboarding.webp',
    alt: 'Snowboarding',
    season: 'winter',
    date: '2024-02-28',
    location: 'Snowpark',
  },
  {
    id: 8,
    src: 'images/voda-club.webp',
    alt: 'Voda Club',
    season: 'summer',
    date: '2023-07-10',
    location: 'Voda Club',
  },
  {
    id: 9,
    src: 'images/houses-on-slope.webp',
    alt: 'Houses on slope',
    season: 'winter',
    date: '2025-02-10',
    location: 'City Center',
  },
  {
    id: 10,
    src: 'images/summer-view-carpathians-mountains.webp',
    alt: 'Summer View Carpathians Mountains',
    season: 'summer',
    date: '2023-06-15',
    location: 'Dovha Mountain',
  },
  {
    id: 11,
    src: 'images/light-over-the-mountains.webp',
    alt: 'Light over the mountains',
    season: 'summer',
    date: '2025-08-23',
    location: 'Dovha Mountain',
  },
  {
    id: 11,
    src: 'images/winter-town.webp',
    alt: 'Winter town',
    season: 'winter',
    date: '2025-02-23',
    location: 'City Center',
  },
];

const initialStories = [
  {
    id: 1,
    author: 'Olena K.',
    title: 'The Magic of First Snow',
    date: '2024-12-01',
    text: 'It was my first time in the mountains during winter. When we arrived, a heavy snowfall began. Everything turned white, like a fairy tale. We drank mulled wine and watched the lights of the evening resort. These are unforgettable emotions I will keep forever. I recommend everyone visit the Christmas market!',
  },
  {
    id: 2,
    author: 'Andriy M.',
    title: 'Summer Extreme',
    date: '2023-08-15',
    text: 'Bukovel in summer is something else! We went mountain biking, and it was even cooler than skiing. I really liked the downhill trails.',
  },
  {
    id: 3,
    author: 'Sarah L.',
    title: 'Relaxation at Voda Club',
    date: '2023-09-10',
    text: 'After a long week of work, the Voda Club was exactly what I needed. The warm pools overlooking the mountains are breathtaking. The service was excellent, and the atmosphere was so peaceful. A perfect getaway for anyone looking to recharge.',
  },
  {
    id: 4,
    author: 'Mykola P.',
    title: 'First Time on Skis',
    date: '2024-02-05',
    text: "I was terrified at first, but the instructors at the ski school were patient and professional. By the end of the second day, I was confidently going down the blue slopes. It's never too late to learn! The adrenaline rush is addictive, and I'm definitely coming back next season.",
  },
  {
    id: 5,
    author: 'Emily R.',
    title: 'Autumn Hiking Views',
    date: '2023-10-20',
    text: "We visited in October when the leaves were turning gold and red. We took the lift up and hiked along the ridge. The air was crisp, and the views of the Carpathians were endless. Don't forget your camera, the sunsets are absolutely magical from the top!",
  },
];

function initData() {
  if (!localStorage.getItem('bukovelStories')) {
    localStorage.setItem('bukovelStories', JSON.stringify(initialStories));
  }
}

function getStories() {
  return JSON.parse(localStorage.getItem('bukovelStories')) || [];
}

function saveStory(story) {
  const stories = getStories();
  stories.push(story);
  localStorage.setItem('bukovelStories', JSON.stringify(stories));
}

function getImages() {
  return initialImages;
}

initData();
