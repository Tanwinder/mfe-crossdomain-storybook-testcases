const prefix = 'sessionAccessId-';

function getId(data) {
  let id;

  if (data && data.id && ~data.id.indexOf(prefix)) {
    id = data.id;
  }

  return id;
}

module.exports = getId;
