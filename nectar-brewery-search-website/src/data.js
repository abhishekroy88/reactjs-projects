const data = {
  about: [
    {
      id: 1,
      title: "What is Nectar?",
      content:
        "Nectar is an online search tool for any and all breweries across the United States. The best of the best. The worst of the worst. You name it. Nectar's got it."
    },
    {
      id: 2,
      title: "Why should I choose Nectar over others?",
      content:
        "Well, as someone rightly said, good judgement comes from experience, and most of that comes from bad judgement. So when we make outrageous claims such as 'We are the best', dont just take our word for it. Go look around the internet before you come back."
    },
    {
      id: 3,
      title:
        "Okay, okay. Enough bloating. What's in store for the future of Nectar?",
      content:
        "To put it simply, our plan is to expand our database to the world. As you can imagine, it is a mammoth of a task and will take more than just a couple of years. But we are determined to get to a point where it wont matter where you are on the globe. All you will need is a phone with an internet connection to find your favorite watering hole near you."
    }
  ],
  contact: {
    phone: "(+1)-234-567-8901",
    email: "nectar@fakecompany.com",
    address: {
      street: "123, Nowhere Street",
      city: "Denver",
      state: "Colorado",
      pincode: "123456",
      country: "United States"
    }
  }
};

const usaStates = [
  {
    nickname: "Yellowhammer State",
    name: "Alabama",
    id: "AL",
    capital: "Montgomery",
    image: "https://cdn.civil.services/us-states/flags/alabama-large.png",
    seal: "https://cdn.civil.services/us-states/seals/alabama-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/alabama.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/alabama.jpg"
  },
  {
    nickname: "The Last Frontier",
    name: "Alaska",
    id: "AK",
    capital: "Juneau",
    image: "https://cdn.civil.services/us-states/flags/alaska-large.png",
    seal: "https://cdn.civil.services/us-states/seals/alaska-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/alaska.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/alaska.jpg"
  },
  {
    nickname: "The Grand Canyon State",
    name: "Arizona",
    id: "AZ",
    capital: "Phoenix",
    image: "https://cdn.civil.services/us-states/flags/arizona-large.png",
    seal: "https://cdn.civil.services/us-states/seals/arizona-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/arizona.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/arizona.jpg"
  },
  {
    nickname: "The Natural State",
    name: "Arkansas",
    id: "AR",
    capital: "Little Rock",
    image: "https://cdn.civil.services/us-states/flags/arkansas-large.png",
    seal: "https://cdn.civil.services/us-states/seals/arkansas-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/arkansas.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/arkansas.jpg"
  },
  {
    nickname: "Golden State",
    name: "California",
    id: "CA",
    capital: "Sacramento",
    image: "https://cdn.civil.services/us-states/flags/california-large.png",
    seal: "https://cdn.civil.services/us-states/seals/california-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/california.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/california.jpg"
  },
  {
    nickname: "The Centennial State",
    name: "Colorado",
    id: "CO",
    capital: "Denver",
    image: "https://cdn.civil.services/us-states/flags/colorado-large.png",
    seal: "https://cdn.civil.services/us-states/seals/colorado-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/colorado.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/colorado.jpg"
  },
  {
    nickname: "Constitution State",
    name: "Connecticut",
    id: "CT",
    capital: "Hartford",
    image: "https://cdn.civil.services/us-states/flags/connecticut-large.png",
    seal: "https://cdn.civil.services/us-states/seals/connecticut-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/connecticut.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/connecticut.jpg"
  },
  {
    nickname: "The Diamond State",
    name: "Delaware",
    id: "DE",
    capital: "Dover",
    image: "https://cdn.civil.services/us-states/flags/delaware-large.png",
    seal: "https://cdn.civil.services/us-states/seals/delaware-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/delaware.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/delaware.jpg"
  },
  {
    nickname: "Sunshine State",
    name: "Florida",
    id: "FL",
    capital: "Tallahassee",
    image: "https://cdn.civil.services/us-states/flags/florida-large.png",
    seal: "https://cdn.civil.services/us-states/seals/florida-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/florida.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/florida.jpg"
  },
  {
    nickname: "Peach State",
    name: "Georgia",
    id: "GA",
    capital: "Atlanta",
    image: "https://cdn.civil.services/us-states/flags/georgia-large.png",
    seal: "https://cdn.civil.services/us-states/seals/georgia-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/georgia.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/georgia.jpg"
  },
  {
    nickname: "Aloha State",
    name: "Hawaii",
    id: "HI",
    capital: "Honolulu",
    image: "https://cdn.civil.services/us-states/flags/hawaii-large.png",
    seal: "https://cdn.civil.services/us-states/seals/hawaii-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/hawaii.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/hawaii.jpg"
  },
  {
    nickname: "Gem State",
    name: "Idaho",
    id: "ID",
    capital: "Boise",
    image: "https://cdn.civil.services/us-states/flags/idaho-large.png",
    seal: "https://cdn.civil.services/us-states/seals/idaho-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/idaho.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/idaho.jpg"
  },
  {
    nickname: "Prairie State",
    name: "Illinois",
    id: "IL",
    capital: "Springfield",
    image: "https://cdn.civil.services/us-states/flags/illinois-large.png",
    seal: "https://cdn.civil.services/us-states/seals/illinois-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/illinois.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/illinois.jpg"
  },
  {
    nickname: "Hoosier State",
    name: "Indiana",
    id: "IN",
    capital: "Indianapolis",
    image: "https://cdn.civil.services/us-states/flags/indiana-large.png",
    seal: "https://cdn.civil.services/us-states/seals/indiana-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/indiana.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/indiana.jpg"
  },
  {
    nickname: "Hawkeye State",
    name: "Iowa",
    id: "IA",
    capital: "Des Moines",
    image: "https://cdn.civil.services/us-states/flags/iowa-large.png",
    seal: "https://cdn.civil.services/us-states/seals/iowa-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/iowa.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/iowa.jpg"
  },
  {
    nickname: "Sunflower State",
    name: "Kansas",
    id: "KS",
    capital: "Topeka",
    image: "https://cdn.civil.services/us-states/flags/kansas-large.png",
    seal: "https://cdn.civil.services/us-states/seals/kansas-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/kansas.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/kansas.jpg"
  },
  {
    nickname: "Bluegrass State",
    name: "Kentucky",
    id: "KY",
    capital: "Frankfort",
    image: "https://cdn.civil.services/us-states/flags/kentucky-large.png",
    seal: "https://cdn.civil.services/us-states/seals/kentucky-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/kentucky.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/kentucky.jpg"
  },
  {
    nickname: "Pelican State",
    name: "Louisiana",
    id: "LA",
    capital: "Baton Rouge",
    image: "https://cdn.civil.services/us-states/flags/louisiana-large.png",
    seal: "https://cdn.civil.services/us-states/seals/louisiana-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/louisiana.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/louisiana.jpg"
  },
  {
    nickname: "Pine Tree State",
    name: "Maine",
    id: "ME",
    capital: "Augusta",
    image: "https://cdn.civil.services/us-states/flags/maine-large.png",
    seal: "https://cdn.civil.services/us-states/seals/maine-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/maine.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/maine.jpg"
  },
  {
    nickname: "Old Line State",
    name: "Maryland",
    id: "MD",
    capital: "Annapolis",
    image: "https://cdn.civil.services/us-states/flags/maryland-large.png",
    seal: "https://cdn.civil.services/us-states/seals/maryland-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/maryland.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/maryland.jpg"
  },
  {
    nickname: "Bay State",
    name: "Massachusetts",
    id: "MA",
    capital: "Boston",
    image: "https://cdn.civil.services/us-states/flags/massachusetts-large.png",
    seal: "https://cdn.civil.services/us-states/seals/massachusetts-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/massachusetts.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/massachusetts.jpg"
  },
  {
    nickname: "Great Lakes State",
    name: "Michigan",
    id: "MI",
    capital: "Lansing",
    image: "https://cdn.civil.services/us-states/flags/michigan-large.png",
    seal: "https://cdn.civil.services/us-states/seals/michigan-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/michigan.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/michigan.jpg"
  },
  {
    nickname: "Land of 10,000 Lakes",
    name: "Minnesota",
    id: "MN",
    capital: "Saint Paul",
    image: "https://cdn.civil.services/us-states/flags/minnesota-large.png",
    seal: "https://cdn.civil.services/us-states/seals/minnesota-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/minnesota.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/minnesota.jpg"
  },
  {
    nickname: "Magnolia State",
    name: "Mississippi",
    id: "MS",
    capital: "Jackson",
    image: "https://cdn.civil.services/us-states/flags/mississippi-large.png",
    seal: "https://cdn.civil.services/us-states/seals/mississippi-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/mississippi.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/mississippi.jpg"
  },
  {
    nickname: "Show Me State",
    name: "Missouri",
    id: "MO",
    capital: "Jefferson City",
    image: "https://cdn.civil.services/us-states/flags/missouri-large.png",
    seal: "https://cdn.civil.services/us-states/seals/missouri-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/missouri.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/missouri.jpg"
  },
  {
    nickname: "Treasure State",
    name: "Montana",
    id: "MT",
    capital: "Helena",
    image: "https://cdn.civil.services/us-states/flags/montana-large.png",
    seal: "https://cdn.civil.services/us-states/seals/montana-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/montana.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/montana.jpg"
  },
  {
    nickname: "Cornhusker State",
    name: "Nebraska",
    id: "NE",
    capital: "Lincoln",
    image: "https://cdn.civil.services/us-states/flags/nebraska-large.png",
    seal: "https://cdn.civil.services/us-states/seals/nebraska-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/nebraska.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/nebraska.jpg"
  },
  {
    nickname: "The Silver State",
    name: "Nevada",
    id: "NV",
    capital: "Carson City",
    image: "https://cdn.civil.services/us-states/flags/nevada-large.png",
    seal: "https://cdn.civil.services/us-states/seals/nevada-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/nevada.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/nevada.jpg"
  },
  {
    nickname: "Granite State",
    name: "New Hampshire",
    id: "NH",
    capital: "Concord",
    image: "https://cdn.civil.services/us-states/flags/new-hampshire-large.png",
    seal: "https://cdn.civil.services/us-states/seals/new-hampshire-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/new-hampshire.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/new-hampshire.jpg"
  },
  {
    nickname: "Garden State",
    name: "New Jersey",
    id: "NJ",
    capital: "Trenton",
    image: "https://cdn.civil.services/us-states/flags/new-jersey-large.png",
    seal: "https://cdn.civil.services/us-states/seals/new-jersey-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/new-jersey.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/new-jersey.jpg"
  },
  {
    nickname: "Land of Enchantment",
    name: "New Mexico",
    id: "NM",
    capital: "Santa Fe",
    image: "https://cdn.civil.services/us-states/flags/new-mexico-large.png",
    seal: "https://cdn.civil.services/us-states/seals/new-mexico-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/new-mexico.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/new-mexico.jpg"
  },
  {
    nickname: "Empire State",
    name: "New York",
    id: "NY",
    capital: "Albany",
    image: "https://cdn.civil.services/us-states/flags/new-york-large.png",
    seal: "https://cdn.civil.services/us-states/seals/new-york-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/new-york.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/new-york.jpg"
  },
  {
    nickname: "Old North State",
    name: "North Carolina",
    id: "NC",
    capital: "Raleigh",
    image:
      "https://cdn.civil.services/us-states/flags/north-carolina-large.png",
    seal: "https://cdn.civil.services/us-states/seals/north-carolina-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/north-carolina.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/north-carolina.jpg"
  },
  {
    nickname: "Flickertail State",
    name: "North Dakota",
    id: "ND",
    capital: "Bismarck",
    image: "https://cdn.civil.services/us-states/flags/north-dakota-large.png",
    seal: "https://cdn.civil.services/us-states/seals/north-dakota-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/north-dakota.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/north-dakota.jpg"
  },
  {
    nickname: "Buckeye State",
    name: "Ohio",
    id: "OH",
    capital: "Columbus",
    image: "https://cdn.civil.services/us-states/flags/ohio-large.png",
    seal: "https://cdn.civil.services/us-states/seals/ohio-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/ohio.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/ohio.jpg"
  },
  {
    nickname: "Sooner State",
    name: "Oklahoma",
    id: "OK",
    capital: "Oklahoma City",
    image: "https://cdn.civil.services/us-states/flags/oklahoma-large.png",
    seal: "https://cdn.civil.services/us-states/seals/oklahoma-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/oklahoma.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/oklahoma.jpg"
  },
  {
    nickname: "Beaver State",
    name: "Oregon",
    id: "OR",
    capital: "Salem",
    image: "https://cdn.civil.services/us-states/flags/oregon-large.png",
    seal: "https://cdn.civil.services/us-states/seals/oregon-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/oregon.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/oregon.jpg"
  },
  {
    nickname: "Keystone State",
    name: "Pennsylvania",
    id: "PA",
    capital: "Harrisburg",
    image: "https://cdn.civil.services/us-states/flags/pennsylvania-large.png",
    seal: "https://cdn.civil.services/us-states/seals/pennsylvania-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/pennsylvania.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/pennsylvania.jpg"
  },
  {
    nickname: "The Ocean State",
    name: "Rhode Island",
    id: "RI",
    capital: "Providence",
    image: "https://cdn.civil.services/us-states/flags/rhode-island-large.png",
    seal: "https://cdn.civil.services/us-states/seals/rhode-island-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/rhode-island.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/rhode-island.jpg"
  },
  {
    nickname: "Palmetto State",
    name: "South Carolina",
    id: "SC",
    capital: "Columbia",
    image:
      "https://cdn.civil.services/us-states/flags/south-carolina-large.png",
    seal: "https://cdn.civil.services/us-states/seals/south-carolina-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/south-carolina.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/south-carolina.jpg"
  },
  {
    nickname: "Mount Rushmore State",
    name: "South Dakota",
    id: "SD",
    capital: "Pierre",
    image: "https://cdn.civil.services/us-states/flags/south-dakota-large.png",
    seal: "https://cdn.civil.services/us-states/seals/south-dakota-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/south-dakota.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/south-dakota.jpg"
  },
  {
    nickname: "Volunteer State",
    name: "Tennessee",
    id: "TN",
    capital: "Nashville",
    image: "https://cdn.civil.services/us-states/flags/tennessee-large.png",
    seal: "https://cdn.civil.services/us-states/seals/tennessee-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/tennessee.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/tennessee.jpg"
  },
  {
    nickname: "Lone Star State",
    name: "Texas",
    id: "TX",
    capital: "Austin",
    image: "https://cdn.civil.services/us-states/flags/texas-large.png",
    seal: "https://cdn.civil.services/us-states/seals/texas-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/texas.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/texas.jpg"
  },
  {
    nickname: "The Beehive State",
    name: "Utah",
    id: "UT",
    capital: "Salt Lake City",
    image: "https://cdn.civil.services/us-states/flags/utah-large.png",
    seal: "https://cdn.civil.services/us-states/seals/utah-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/utah.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/utah.jpg"
  },
  {
    nickname: "Green Mountain State",
    name: "Vermont",
    id: "VT",
    capital: "Montpelier",
    image: "https://cdn.civil.services/us-states/flags/vermont-large.png",
    seal: "https://cdn.civil.services/us-states/seals/vermont-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/vermont.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/vermont.jpg"
  },
  {
    nickname: "Old Dominion State",
    name: "Virginia",
    id: "VA",
    capital: "Richmond",
    image: "https://cdn.civil.services/us-states/flags/virginia-large.png",
    seal: "https://cdn.civil.services/us-states/seals/virginia-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/virginia.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/virginia.jpg"
  },
  {
    nickname: "The Evergreen State",
    name: "Washington",
    id: "WA",
    capital: "Olympia",
    image: "https://cdn.civil.services/us-states/flags/washington-large.png",
    seal: "https://cdn.civil.services/us-states/seals/washington-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/washington.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/washington.jpg"
  },
  {
    nickname: "Mountain State",
    name: "West Virginia",
    id: "WV",
    capital: "Charleston",
    image: "https://cdn.civil.services/us-states/flags/west-virginia-large.png",
    seal: "https://cdn.civil.services/us-states/seals/west-virginia-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/west-virginia.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/west-virginia.jpg"
  },
  {
    nickname: "Badger State",
    name: "Wisconsin",
    id: "WI",
    capital: "Madison",
    image: "https://cdn.civil.services/us-states/flags/wisconsin-large.png",
    seal: "https://cdn.civil.services/us-states/seals/wisconsin-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/wisconsin.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/wisconsin.jpg"
  },
  {
    nickname: "Equality State",
    name: "Wyoming",
    id: "WY",
    capital: "Cheyenne",
    image: "https://cdn.civil.services/us-states/flags/wyoming-large.png",
    seal: "https://cdn.civil.services/us-states/seals/wyoming-large.png",
    landscape:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/wyoming.jpg",
    skyline:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/wyoming.jpg"
  }
];

const breweryTypes = [
  {
    id: 1,
    name: "Micro",
    image:
      "https://images.unsplash.com/photo-1557622348-6f09446e64a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
  },
  {
    id: 2,
    name: "Regional",
    image:
      "https://images.unsplash.com/photo-1499187817214-70f75289a676?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
  },
  {
    id: 3,
    name: "Brewpub",
    image:
      "https://images.unsplash.com/photo-1485686531765-ba63b07845a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=747&q=80"
  },
  {
    id: 4,
    name: "Large",
    image:
      "https://images.unsplash.com/photo-1558565851-10a41b286adb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
  },
  {
    id: 5,
    name: "Planning",
    image:
      "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
  },
  {
    id: 6,
    name: "Bar",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80"
  },
  {
    id: 7,
    name: "Contract",
    image:
      "https://images.unsplash.com/photo-1516600164266-f3b8166ae679?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
  },
  {
    id: 8,
    name: "Proprietor",
    image:
      "https://images.unsplash.com/photo-1506362489888-115b3ad74715?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
  }
];

export default data;
export { usaStates, breweryTypes };
