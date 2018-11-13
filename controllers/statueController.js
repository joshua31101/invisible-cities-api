const firebase = require('./firebaseController');

exports.search = (req, res) => {
  const query = req.query.q;
  const searchCategory = req.query.searchCategory;
  const isAdminUser = req.session.isAdminUser;

  firebase.searchStatues(query, searchCategory, (statues) => {
    firebase.getMaps((maps) => {
      res.render('statueList', {
        statues: statues,
        query,
        searchCategory,
        isAdminUser,
        maps: maps,
      });
    });
  });
};

exports.statueCardGet = (req, res) => {
  const sId = req.params.id;
  const isAdminUser = req.session.isAdminUser;

  firebase.getStatue(sId, (statue) => {
    res.render('partials/statueCard', {
      statueId: sId,
      statue,
      isAdminUser,
      map: null,
    });
  });
};

exports.statueRemove = (req, res) => {
  const statueId = req.body.statueId;
  firebase.removeStatue(statueId);
  if (req.xhr) {
    return res.status(200).send({ statueId: statueId });
  }
  return res.redirect('/');
};

exports.statueFlagPost = (req, res) => {
  const isFlagged = JSON.parse(req.body.isFlagged);
  const statueId = req.body.statueId;
  firebase.toggleStatueFlag(statueId, isFlagged);
  if (req.xhr) {
    return res.status(200).send({ isFlagged: !isFlagged, statueId: statueId });
  }
  return res.redirect('/');
};

exports.statuePrivatePost = (req, res) => {
  const isPrivate = JSON.parse(req.body.isPrivate);
  const statueId = req.body.statueId;
  firebase.toggleStatuePrivate(statueId, isPrivate);
  if (req.xhr) {
    return res.status(200).send({ isPrivate: !isPrivate, statueId: statueId });
  }
  return res.redirect('/');
};
