async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  return resp;
}

const btn = document.getElementById("btn-random");
const img = document.getElementById("img-profile");
const pname = document.getElementById("p-name");
const paddress = document.getElementById("p-address");
const pemail = document.getElementById("p-email");
const icon = document.getElementById("span-gender-icon");
const divload = document.getElementById("div-loading-card");

divload.style.display = "none";

btn.onclick = async () => {
  btn.innerText = "Loading Profile ..";
  btn.disabled = true;
  divload.style.display = "none";

  const resp = await axios.get("https://randomuser.me/api/");
  console.log(resp.data.results[0]);

  img.src = resp.data.results[0].picture.large;
  pname.innerText =
    resp.data.results[0].name.first + " " + resp.data.results[0].name.last;
  paddress.innerText =
    resp.data.results[0].location.city +
    " " +
    resp.data.results[0].location.state +
    " " +
    resp.data.results[0].location.country +
    " " +
    resp.data.results[0].location.postcode;
  pemail.innerText = resp.data.results[0].email;

  if (resp.data.results[0].gender === "male") {
    icon.innerText = "👨";
  } else {
    icon.innerText = "👩";
  }

  btn.innerText = "Generate more ..";
  btn.disabled = false;
};
