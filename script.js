// script.js
const possibleHeadlines = [
  // Include your list of 100 potential headlines here (positive, negative, and neutral).
  // Example:
  "World's First Floating City to Open, Solving Overpopulation Crisis",
"Breakthrough Study Reveals Cure for Alzheimer's Disease Within Reach",
"Australia Surpasses Renewable Energy Target, Becomes Green Energy Leader",
"Historic Middle East Peace Accord Signed, Ending Decades of Conflict",
"Indian Space Agency Announces Manned Mission to Mars in 5 Years",
"Global Plastic Waste Reduced by 50% Through International Ban",
"France Launches Ambitious Plan to Combat Climate Change and Reduce Emissions",
"World Stock Markets Reach Record High Amid Global Economic Boom",
"China's Giant Pandas No Longer Endangered, Conservation Efforts Succeed",
"Japanese Scientists Develop Revolutionary Clean Fusion Energy Technology",
"Violent Crime Rates in Chicago Drop to Lowest Level in a Decade",
"New Coral Reef Discovered, Holds Promise for Marine Biodiversity",
"Breakthrough in Nanotechnology Leads to Cancer-Fighting Nanobots",
"UK Reports Significant Drop in Childhood Obesity Rates",
"Hollywood's First Carbon-Neutral Film Wins Big at the Oscars",
"Israeli-Palestinian Peace Camp Gains Momentum, Bridging Divide",
"Canada's Free College Education Initiative Boosts Enrollment Rates",
"Boston Becomes First Major US City to Achieve Zero Waste Goal",
"African Union Launches Massive Reforestation Project for the Continent",
"Global Tiger Population Doubles After Intensive Conservation Efforts",
"NASA's Robotic Mission Discovers Water on Mars",
"Ocean Cleanup Initiative Successfully Removes Millions of Tons of Plastic",
"Australian Researchers Create Breakthrough Malaria Vaccine",
"International Coalition Commits to Ending Child Labor Worldwide",
"Indian Economy Soars, Named Fastest-Growing Major Economy",
"Worldwide Ban on Single-Use Plastics Implemented, Reducing Pollution",
"Solar-Powered Desalination Plant Solves Water Scarcity in the Negev",
"Canada's Indigenous Languages Revival Flourishes in Schools",
"Boston Launches Green Transportation Initiative, Introduces Electric Buses",
"African Union Announces Major Investment in Renewable Energy Projects",
"Global Efforts Reduce Deforestation Rates by Half",
"NASA's James Webb Space Telescope Sends Stunning Images from Deep Space",
"Worldwide Ban on Harmful Pesticides Saves Pollinators from Extinction",
"Global Efforts Achieve Significant Reduction in Greenhouse Gas Emissions",
"Breakthrough Stem Cell Therapy Offers Hope for Spinal Cord Injuries",
"Global Literacy Rates Reach Record High, Education Initiatives Succeed",
"Indian Startups Lead the Way in Sustainable Technology Innovations",
"Worldwide Collaboration Aims to Combat Emerging Infectious Diseases",
"Japan Introduces Universal Basic Income, Boosting Economic Security",
"Chicago's New Urban Parks Transform Cityscape, Improve Air Quality",
"Australian Indigenous Art Market Flourishes, Supporting Communities",
"Innovative AI Technology Assists in Disaster Relief and Recovery",
"Global Efforts Reduce Air Pollution, Improving Urban Air Quality",
"Global Efforts Successfully Eradicate a Major Infectious Disease",
"Japan's Space Agency to Collaborate with NASA on Lunar Exploration",
"Chicago's New Green Buildings Set a Standard for Sustainable Architecture",
"Australian Rainforest Restoration Efforts Show Promising Results",
"Global Humanitarian Aid Surpasses All-Time High, Reaching Vulnerable Populations",
"UK's Renewable Energy Sector Creates Thousands of New Jobs",
"California Implements Universal Healthcare, Improving Public Health",
"Historic Interfaith Conference Promotes Peace and Understanding",
"Canada's Universal Childcare Program Benefits Families Nationwide",
"Boston Becomes First City to Completely Phase Out Single-Use Plastics",
"African Union Launches Satellite Program to Improve Internet Connectivity",
"World's Largest Marine Sanctuary Established to Protect Ocean Life",
"NASA's Voyager 1 Reaches Interstellar Space, Sending New Data",
"Global Efforts Reduce Plastic Pollution in Oceans",
"Australian Indigenous Artists Honored Globally for Their Work",
"UK's Green Transportation Revolution: Electric Car Sales Overtake Gasoline Vehicles",
"Groundbreaking Medical Research Paves the Way for Personalized Cancer Treatment",
"Canada Ranks First in World Happiness Index, Celebrates National Unity",
"Boston's Urban Farming Initiative Reduces Food Insecurity in Underserved Areas",
"African Union Unveils Ambitious Plan for Green Energy Infrastructure",
"New Technology Offers Hope for Severe Coral Bleaching Recovery",
"NASA Announces New Space Telescope to Search for Exoplanets",
"Global Initiative Successfully Reduces Plastic Pollution in Oceans",
"Australian Innovators Develop Breakthrough Water Filtration System",
"Global Efforts Lead to Rehabilitation of Degraded Land",
"Canada's Indigenous Communities Launch Innovative Eco-Tourism Initiatives",
"Worldwide Push for Gender Equality Leads to Significant Progress",
"Kenya's Conservation Efforts Result in Record Elephant Population",
"International Collaboration Creates Free Online Education for All",
"India's Rural Electrification Initiative Transforms Lives of Millions",
"Record-Breaking Renewable Energy Output Powers Entire Island Nation",
"Global Efforts Reduce Air Pollution and Improve Respiratory Health",
  // ...and so on...
];

function displayRandomHeadline() {
  const randomIndex = Math.floor(Math.random() * possibleHeadlines.length);
  const generatedHeadline = possibleHeadlines[randomIndex];
  document.getElementById("headline").innerText = generatedHeadline;
}

// Display the first headline immediately
displayRandomHeadline();

// Set interval to display a new headline every 10 minutes (600,000 milliseconds)
setInterval(displayRandomHeadline, 6000);
