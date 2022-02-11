// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  let city = req.body.city;
  await fetch(`https://api.waqi.info/feed/${city}/?token=1901f5c95020ad8ac45e5226f8d10b19c8279ff7`, {
    method: 'GET'
  }).then(response => response.json())
    .then(data => { res.status(200).json({ aqi: data.data.aqi }) })
};