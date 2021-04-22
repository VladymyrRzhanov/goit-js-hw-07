const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
    },
];

const imagesEl = document.querySelector('#gallery')
imagesEl.classList.add('gallery')
const imagesGalleryListEl = images.map(image => {
    const ListItemEl = document.createElement('li');
    ListItemEl.classList.add('gallery__item')
    const itemImageEl = document.createElement('img');
    itemImageEl.src = image.url;
    itemImageEl.alt = image.alt;
    itemImageEl.width = 400;
    itemImageEl.height = 250;
    itemImageEl.classList.add('gallery__image')
    ListItemEl.appendChild(itemImageEl)
    imagesEl.insertAdjacentElement('beforeend', ListItemEl )
})

