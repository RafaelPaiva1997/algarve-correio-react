const config = require("./config.json");

const fetch_body = (lib, action, data) => {
  return {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      lib,
      action,
      data,
      auth: {
        id: global.user._id,
        user: global.user
      }
    })
  };
};

exports.post = (lib, action, data, callbak) => {
  fetch(config.url, fetch_body(lib, action, data))
    .then(res => res.json())
    .then(callbak);
};

exports.post_code = (lib, action, data, callbak) => {
  fetch(config.url, fetch_body(lib, action, data)).then(callbak);
};

exports.login = (username, password, callbak) => {
  fetch(config.login, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data: { login: { username, password } } })
  })
    .then(res => res.json())
    .then(callbak);
};
