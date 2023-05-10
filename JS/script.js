var card = document.createElement("div");
card.classList.add("card");

var photo = document.createElement("div");
photo.classList.add("photo");

var img = document.createElement("img");
img.setAttribute("src", "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80");
photo.appendChild(img);

card.appendChild(photo);

var aux = document.getElementById("aux");
aux.appendChild(card);

