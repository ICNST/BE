const router = require('express').Router()
const Country = require('../country/countries-model');

router.get('/', async (req, res) => {
  try {
    const countries = await Country.get();
    return res.status(200).json(countries)
  }
  catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Sorry about that! We encountered an issue getting the list of countries for you"
    })
  }
})

router.put('./:id', async (req, res) => {
  const { id } = req.params;
  const updates = {
    isAdmin: true,
  }

  try {
    const updatedCountry = await userDb.updateCountry(id, updates);
    if (updatedCountry) {
      delete updatedCountry.password;
      res.status(200).json(updatedCountry);
    } else {
      res.status(404).json({ message: 'ID does not exist'});
    }
  } catch (error) {
    res.status(500).json({ message: 'Error approving'});
  }
})

router.get('/active', async (req, res) => {
  const countryCode = req.accessCountry
  try {
    const countries = await Country.getActive(countryCode);
    if (!countries) {
      return res.status(404).json({
        message: "It appears that there are currently no active countries"
      })
    }
    return res.status(200).json(countries)
  }
  catch (e) {
    console.log(e)
    return res.status(500).json({
      message: "Sorry! We encountered an error getting the list of active countries"
    })
  }
})

module.exports = router;