// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  let city = req.body.city;
  await fetch(`https://api.waqi.info/feed/${city}/?token=`, {
    method: 'GET'
  }).then(response => response.json())
    .then(data => { res.status(200).json({ aqi: data.data.aqi }) })
};
