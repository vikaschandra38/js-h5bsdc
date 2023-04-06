// Import stylesheets
import './style.css';

let indoorItems = [
  'Balconies',
  'Bathrooms',
  'Cabinetry',
  'Ceilings',
  'Closets',
  'Concepts Indoor',
  'Fireplaces Indoor',
  'Folding Doors',
  'Ligting Indoor',
  'Kitchens',
  'Room Additions',
  'Safe Rooms',
  'Staircases',
  'Walls',
  'Waterfalls Indoor',
  'Windows',
  'Wine Cellars',
]
  .sort()
  .map((item) => {
    return { value: item, type: 'indoor' };
  });

let outdoorItems = [
  'Backyards',
  'Benches',
  "BB-Q's",
  'Concepts Outdoor',
  'Driveways',
  'Fireplaces Indoor',
  'Fountains',
  'Hardscapes',
  'Landscape',
  'Lighting Outdoor',
  'Patio Decks',
  'Pavers',
  'Pools',
  'Pool Houses',
  'Raised Pool Floor',
  'Retaining Walls',
  'Spas',
  'Turf',
  'Waterfalls Outdoor',
  'Walkways',
]
  .sort()
  .map((item) => {
    return { value: item, type: 'outdoor' };
  });

let houseItems = [
  'Construction',
  'Design',
  'Drafting',
  'Existing Construction',
  'Floor Plans',
  'Guest Houses',
  "J-ADU's",
  'New Construction',
  'Office Spaces',
]
  .sort()
  .map((item) => {
    return { value: item, type: 'house' };
  });

let allItems = [...indoorItems, ...outdoorItems, ...houseItems].sort((a, b) =>
  a.value.localeCompare(b.value)
);

const selectedItem = document.querySelector('.selected-item');
const showAll = document.querySelector('.showAll');
const outdoor = document.querySelector('.outdoor');
const indoor = document.querySelector('.indoor');
const house = document.querySelector('.house');

const displayItems = (event, items) => {
  selectedItem.innerHTML = '';
  showAll.classList.remove('d-none');
  items.forEach((item) => {
    const button = document.createElement('button');
    button.textContent = item.value;
    button.classList.add(item.type);
    selectedItem.appendChild(button);
  });
};

showAll.addEventListener('click', ($event) =>
  displayItems($event, allItems, '')
);
outdoor.addEventListener('click', ($event) =>
  displayItems($event, outdoorItems)
);
indoor.addEventListener('click', ($event) => displayItems($event, indoorItems));
house.addEventListener('click', ($event) => displayItems($event, houseItems));
