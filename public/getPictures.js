


async function getData() {
  const response = await fetch("/api");
  const data = await response.json();

  return data // 😵‍💫 return a promise
}

function render(data) {

  for (item of data) {

    let template = `<div>
    <h1>{{mood}}</h1>
    <img src="{{image64}}">
    <p>{{timestamp}}</p>
    `
    for (let [key, value] of Object.entries(item)) {
      console.log(key);
      if (key == "timestamp") value = new Date(value).toLocaleString();
      template = template.replace(`{{${key}}}`, value);
    }
    document.querySelector(".grid").insertAdjacentHTML("beforeend", template)
    // const root = document.createElement("div");
    // const mood = document.createElement("h1");
    // const date = document.createElement("p");
    // const image = document.createElement("img");

    // mood.textContent = `name: ${item.mood}`;
    
    // const dateString = new Date(item.timestamp).toLocaleString();
    // date.textContent = dateString;
    
    // image.src = item.image64;

    // root.append(mood, image, date);
    // document.querySelector(".grid").insertAdjacentElement("beforeend", root)
  }
  console.table(data);
}

const data = getData();
data.then(render)