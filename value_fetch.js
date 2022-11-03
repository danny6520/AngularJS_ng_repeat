fetch("image_values.json")
.then(response => response.json())
.then(data => showInfo(data));

function showInfo(data) {
  console.table(data.langs);
}