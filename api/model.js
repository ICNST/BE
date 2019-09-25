const db = require("../data/data-config.js");

module.exports = function (dbName) {
    function find() {
	    return db(dbName);	
    }
    function findById(id) {
	    return db(dbName).where({id}).first()
    }
    function add(json) {
	    return db(dbName).insert(json, "id").then(([id]) => {
	        return findById(id);
	    }) 
    }
    function update(id, changes) {
        return db(dbName).where({id}).update(changes).then(count => {
            if (count > 0) return findById(id);
            if (count < 0) return null;
        });
    }
    function remove(id) {
	    return db(dbName).where({id}).del();
    }
    return {
        find,
        findById,
        add,
        update,
        remove
    };
}
