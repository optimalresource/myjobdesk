import * as axios from "axios";

const BASE_URL = "https://api.myjobdesk.com/api/register/step-2";

function upload(formData) {
  const url = `${BASE_URL}`;
  return (
    axios
      .post(url, formData)
      // get data
      .then(x => x.data)
      // add url field
      .then(x =>
        x.map(img => Object.assign({}, img, { url: `${BASE_URL}${img.id}` }))
      )
  );
}

export { upload };
