const CITIES = [
  {
    id: '1',
    imageUrl: 'https://cdn.pixabay.com/photo/2019/12/31/17/49/skopje-4732418_1280.jpg',
    name: 'Skopje',
    description: 'The city of Skopje is the capital of North Macedonia and a political, economic and cultural centre of the country. The city inhabited since 4000 years B.C. is located in the heart of Balkan Peninsula, about halfway between Athens and Belgrade. Today it is a modern city with a population of almost 550,000 people. ',
    population: '506,926'
  },
  {
    id: '2',
    imageUrl: 'https://macedonia-timeless.com/wp-content/uploads/2018/08/prilep-grad.jpg',
    name: 'Prilep',
    description: 'Prilep is a city in Macedonia, located in the northern part of Pelagonia Valley, in the southwestern part of the Republic of Macedonia. It can be reached by the main road A3 and it is located 128km southwest of the capital Skopje. It is known as "the city beneath Marko_s Towers" because of its proximity to the towers of the legendary hero, King Marko. ',
    population: '76,768'
  },
  {
    id: '3',
    imageUrl: 'https://res.cloudinary.com/keystone-demo/image/upload/c_fill,h_550,w_1000/y3jmko69lirtamhyq79g.jpg',
    name: 'Vinica',
    description: 'Vinica is a town in Macedonia, in the eastern region of the country. The town of Vinica is the seat of Vinica Municipality. The town is located under the mountain of Plackovica, in the southeastern part of the Kocani valley. It covers the northern part of the river Bregalnica sinks. Town is known for its historic Roman fortress, Vinicko Kale, situated on a hill overlooking the modern town.',
    population: '10,863'
  }

];

export const getCities = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CITIES);
    }, 100)
  })
};

export const getCity = (id) => {
  const city = CITIES.filter(city => city.id == id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(city[0]);
    }, 100)
  })
};

export const getCitiesIds = () => {
  const ids = CITIES.map(city => {
    return {
      params:
        { id: city.id }
    }
  })
  // console.log(ids)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ids);
    }, 100)
  })
};