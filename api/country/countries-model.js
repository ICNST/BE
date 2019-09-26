const db = require('../../data/data-config.js');

const get = () => {
  return db("country");
};

async function updateCountry(id, changes) {
  return db('country').where({ id }).update(changes).then(() => findCountryBy({ id }));
}


const getActive = countryCode => {
  if (countryCode) {
    return db("country AS cn")
      .select("cn.id as id", "cn.name AS country")
      .count("cm.id AS communities")
      .leftOuterJoin("communities AS cm", { "cm.country_id": "cn.id" })
      .groupBy("cn.id")
      .orderBy("communities", "desc")
      .where({ "cn.code": countryCode });
  }
  return db("country AS cn")
    .select("cn.id as id", "cn.name AS country")
    .count("cm.id AS communities")
    .join("communities AS cm", { "cm.country_id": "cn.id" })
    .groupBy("cn.id")
    .orderBy("communities", "desc");
};

module.exports = {
  get,
  getActive
};
