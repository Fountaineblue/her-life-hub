// ---------- Helpers ----------
function getData(key, fallback) {
  const saved = localStorage.getItem(key);

  if (saved === null) {
    return fallback;
  }

  try {
    return JSON.parse(saved);
  } catch {
    return fallback;
  }
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function formatMoney(amount) {
  return `$${Number(amount || 0).toLocaleString()}`;
}

function hashString(text) {
  let hash = 0;

  for (let i = 0; i < text.length; i++) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash);
}

// ---------- Default Data ----------
const defaultLinks = [
  {
    id: 1,
    name: "Amazon",
    url: "https://www.amazon.ca/"
  },
  {
    id: 2,
    name: "Prime Video",
    url: "https://www.primevideo.com/"
  },
  {
    id: 3,
    name: "YouTube",
    url: "https://www.youtube.com/"
  },
  {
    id: 4,
    name: "Netflix",
    url: "https://www.netflix.com/"
  },
  {
    id: 5,
    name: "Disney+",
    url: "https://www.disneyplus.com/"
  },
  {
    id: 6,
    name: "TSN",
    url: "https://www.tsn.ca/"
  },
  {
    id: 7,
    name: "Sportsnet",
    url: "https://www.sportsnet.ca/"
  },
  {
    id: 8,
    name: "DAZN",
    url: "https://www.dazn.com/"
  }
];

const defaultPhotos = [
  {
    id: 101,
    image: "photos/IMG_3813.JPEG",
    caption: "Dressed up and glowing together."
  },
  {
    id: 102,
    image: "photos/IMG_3870.JPEG",
    caption: "A sky full of clouds, and still my favorite view is you."
  },
  {
    id: 103,
    image: "photos/IMG_4031.JPEG",
    caption: "The way we look at each other says everything."
  },
  {
    id: 104,
    image: "photos/IMG_4290.JPEG",
    caption: "Cold city, warm hearts."
  },
  {
    id: 105,
    image: "photos/IMG_7379.JPEG",
    caption: "Paris nights and the prettiest smile."
  },
  {
    id: 106,
    image: "photos/IMG_7506.JPEG",
    caption: "Silly little coffee date memories."
  },
  {
    id: 107,
    image: "photos/IMG_7678.JPEG",
    caption: "Museum days feel better with you."
  },
  {
    id: 108,
    image: "photos/IMG_8126.JPEG",
    caption: "Sunshine, gardens, and us."
  },
  {
    id: 109,
    image: "photos/IMG_8650.JPEG",
    caption: "Canal kisses and happy moments."
  },
  {
    id: 110,
    image: "photos/IMG_0509.JPEG",
    caption: "Snowy nights, cozy love."
  },
  {
    id: 111,
    image: "photos/IMG_1238.JPEG",
    caption: "Grand Canyon, tiny us, huge love."
  },
  {
    id: 112,
    image: "photos/IMG_1240.JPEG",
    caption: "Adventure looks good on us."
  },
  {
    id: 113,
    image: "photos/IMG_2602.JPEG",
    caption: "Sunny smiles in the city."
  },
  {
    id: 114,
    image: "photos/IMG_2609.JPEG",
    caption: "A picture-perfect day together."
  },
  {
    id: 115,
    image: "photos/IMG_2617.JPEG",
    caption: "Big monument, bigger smiles."
  },
  {
    id: 116,
    image: "photos/IMG_3547.JPEG",
    caption: "Train rides and little love stories."
  }
];

const foodIdeas = [
  {
    name: "Bibimbap",
    category: "Korean",
    vibe: "A colorful rice bowl with veggies, egg, meat, and spicy gochujang. Cozy but still balanced."
  },
  {
    name: "Tteokbokki",
    category: "Korean",
    vibe: "Spicy, chewy rice cakes for when she wants comfort food with a little drama."
  },
  {
    name: "Korean Fried Chicken",
    category: "Korean",
    vibe: "Crispy, saucy, sweet, spicy, and perfect for a treat-yourself meal."
  },
  {
    name: "Kimchi Fried Rice",
    category: "Korean",
    vibe: "Easy, flavorful, and perfect with a fried egg on top."
  },
  {
    name: "Kimbap",
    category: "Korean",
    vibe: "Cute little rice rolls that feel like a snack and a meal at the same time."
  },
  {
    name: "Bulgogi Rice Bowl",
    category: "Korean",
    vibe: "Sweet-savory beef over rice with veggies. A perfect comfort bowl."
  },
  {
    name: "Japchae",
    category: "Korean",
    vibe: "Glass noodles, veggies, and sweet-savory flavor. Light but satisfying."
  },
  {
    name: "Kimchi Stew",
    category: "Korean",
    vibe: "Warm, spicy, and cozy for a cold or lazy day."
  },
  {
    name: "Soondubu Jjigae",
    category: "Korean",
    vibe: "Soft tofu stew that feels warm, spicy, and comforting."
  },
  {
    name: "Korean Corn Dog",
    category: "Korean",
    vibe: "Fun, cheesy, crispy, and perfect when she wants a snacky meal."
  },
  {
    name: "Jajangmyeon",
    category: "Korean",
    vibe: "Noodles with black bean sauce. Savory, rich, and very comforting."
  },
  {
    name: "Spicy Pork Rice Bowl",
    category: "Korean",
    vibe: "Bold, spicy, filling, and perfect with rice."
  },

  {
    name: "Chicken Katsu",
    category: "Japanese",
    vibe: "Crispy chicken cutlet with rice and sauce. Simple, crunchy, and satisfying."
  },
  {
    name: "Japanese Curry",
    category: "Japanese",
    vibe: "Warm curry over rice. Cozy, filling, and perfect for a chill night."
  },
  {
    name: "Ramen",
    category: "Japanese",
    vibe: "Noodles, broth, toppings, and comfort in one bowl."
  },
  {
    name: "Sushi Bowl",
    category: "Japanese",
    vibe: "All the sushi flavors without needing to roll anything."
  },
  {
    name: "Onigiri",
    category: "Japanese",
    vibe: "Cute rice balls with filling. Perfect for a small meal or snack."
  },
  {
    name: "Udon Noodle Soup",
    category: "Japanese",
    vibe: "Thick noodles in warm broth. Soft, cozy, and easy."
  },
  {
    name: "Teriyaki Chicken Bowl",
    category: "Japanese",
    vibe: "Sweet-savory chicken over rice with veggies. Always a safe choice."
  },
  {
    name: "Tempura",
    category: "Japanese",
    vibe: "Light, crispy, and perfect when she wants something fun."
  },
  {
    name: "Gyoza",
    category: "Japanese",
    vibe: "Pan-fried dumplings that are always a good idea."
  },
  {
    name: "Poke Bowl",
    category: "Japanese-Inspired",
    vibe: "Fresh, customizable, and perfect when she wants something lighter."
  },

  {
    name: "Momo",
    category: "Nepali",
    vibe: "Juicy dumplings with spicy achar. Basically happiness in bite-sized form."
  },
  {
    name: "Jhol Momo",
    category: "Nepali",
    vibe: "Momo in a spicy, tangy soup. Cozy and full of flavor."
  },
  {
    name: "Chicken Chow Mein",
    category: "Nepali",
    vibe: "Stir-fried noodles that are quick, flavorful, and satisfying."
  },
  {
    name: "Veg Chow Mein",
    category: "Nepali",
    vibe: "Noodles with veggies and big takeout energy."
  },
  {
    name: "Thukpa",
    category: "Nepali",
    vibe: "Warm noodle soup for a cozy, feel-better meal."
  },
  {
    name: "Dal Bhat",
    category: "Nepali",
    vibe: "Comforting rice, lentils, and sides. Simple and nourishing."
  },
  {
    name: "Chicken Sekuwa",
    category: "Nepali",
    vibe: "Smoky, spiced grilled chicken that feels special."
  },
  {
    name: "Chatpate",
    category: "Nepali",
    vibe: "Crunchy, spicy, tangy snack mix for when she wants something fun."
  },
  {
    name: "Pani Puri",
    category: "Nepali / South Asian",
    vibe: "Crispy, tangy, spicy little bites that are impossible to eat sadly."
  },
  {
    name: "Samosa Chaat",
    category: "South Asian",
    vibe: "Crunchy, saucy, spicy, and perfect for a snacky dinner."
  },
  {
    name: "Aloo Paratha",
    category: "South Asian",
    vibe: "Stuffed flatbread with potato. Cozy, filling, and perfect with yogurt."
  },
  {
    name: "Butter Chicken Rice Bowl",
    category: "South Asian",
    vibe: "Creamy, cozy, and perfect when she wants something rich."
  },

  {
    name: "Chipotle Chicken Bowl",
    category: "Chipotle-Style",
    vibe: "Rice, beans, chicken, salsa, corn, cheese, and guac if she deserves extra happiness."
  },
  {
    name: "Steak Burrito Bowl",
    category: "Chipotle-Style",
    vibe: "A filling bowl with steak, rice, beans, veggies, and all the toppings."
  },
  {
    name: "Sofritas Bowl",
    category: "Chipotle-Style",
    vibe: "A plant-based bowl that is spicy, saucy, and satisfying."
  },
  {
    name: "Chicken Burrito",
    category: "Chipotle-Style",
    vibe: "A classic wrap-it-all-up meal when she wants something filling."
  },
  {
    name: "Quesadilla",
    category: "Chipotle-Style",
    vibe: "Cheesy, crispy, and perfect with salsa and sour cream."
  },
  {
    name: "Taco Bowl",
    category: "Chipotle-Style",
    vibe: "All the taco flavors in bowl form. Easy and customizable."
  },
  {
    name: "Loaded Nachos",
    category: "Chipotle-Style",
    vibe: "Crunchy chips, melty cheese, salsa, protein, and cozy chaos."
  },
  {
    name: "Veggie Burrito Bowl",
    category: "Chipotle-Style",
    vibe: "Rice, beans, fajita veggies, salsa, corn, lettuce, and guac."
  },

  {
    name: "Pho",
    category: "Cozy Takeout",
    vibe: "Warm broth, noodles, herbs, and comfort. Perfect for a tired day."
  },
  {
    name: "Pad Thai",
    category: "Cozy Takeout",
    vibe: "Sweet, tangy, noodly, and always a good option."
  },
  {
    name: "Drunken Noodles",
    category: "Cozy Takeout",
    vibe: "Spicy noodles with big flavor and takeout-night energy."
  },
  {
    name: "Thai Green Curry",
    category: "Cozy Takeout",
    vibe: "Creamy, spicy, and amazing over rice."
  },
  {
    name: "Dumplings",
    category: "Quick Bites",
    vibe: "Steam them, fry them, dip them, love them."
  },
  {
    name: "Spring Rolls",
    category: "Quick Bites",
    vibe: "Fresh, crunchy, and perfect with peanut sauce."
  },
  {
    name: "Fried Rice",
    category: "Quick Meal",
    vibe: "Easy, fast, and great for using whatever is in the fridge."
  },
  {
    name: "Lo Mein",
    category: "Cozy Takeout",
    vibe: "Saucy noodles that always feel like a comfort meal."
  },
  {
    name: "Orange Chicken",
    category: "Cozy Takeout",
    vibe: "Crispy chicken with sweet citrus sauce. Easy happiness."
  },
  {
    name: "Shawarma Bowl",
    category: "Rice Bowl",
    vibe: "Rice, chicken, garlic sauce, veggies, and cozy Mediterranean flavor."
  },
  {
    name: "Falafel Wrap",
    category: "Quick Meal",
    vibe: "Crunchy, fresh, saucy, and easy to grab."
  },
  {
    name: "Chicken Caesar Wrap",
    category: "Quick Meal",
    vibe: "Simple, fresh, and good when she wants something easy."
  },
  {
    name: "Avocado Toast with Egg",
    category: "Quick Meal",
    vibe: "Cute cafe energy at home."
  },
  {
    name: "Grilled Cheese and Tomato Soup",
    category: "Comfort Food",
    vibe: "Classic, cozy, and perfect for a soft day."
  },
  {
    name: "Mac and Cheese",
    category: "Comfort Food",
    vibe: "Cheesy comfort for when the day needs to be easier."
  },
  {
    name: "Loaded Fries",
    category: "Comfort Food",
    vibe: "Crispy fries with toppings. Not healthy, but emotionally correct."
  },
  {
    name: "Chicken Alfredo Pasta",
    category: "Comfort Food",
    vibe: "Creamy pasta for when she wants something rich and cozy."
  },
  {
    name: "Pesto Pasta",
    category: "Quick Meal",
    vibe: "Fresh, easy, and cute dinner energy."
  },
  {
    name: "Breakfast for Dinner",
    category: "Comfort Food",
    vibe: "Eggs, toast, hash browns, pancakes, or whatever feels fun."
  },
  {
    name: "Boba and Snack Run",
    category: "Treat",
    vibe: "Not exactly dinner, but sometimes the heart wants boba."
  },
  {
    name: "Smoothie Bowl",
    category: "Light Meal",
    vibe: "Fresh, pretty, and good for a lighter craving."
  },
  {
    name: "Acai Bowl",
    category: "Light Meal",
    vibe: "Cold, fruity, and cute cafe vibes."
  },
  {
    name: "Chicken Noodle Soup",
    category: "Comfort Food",
    vibe: "Soft, warm, and perfect when she needs comfort."
  },
  {
    name: "Rice Bowl with Egg and Avocado",
    category: "Quick Meal",
    vibe: "Simple, filling, and easy to make with pantry basics."
  }
];

// ---------- App State ----------
let currentDate = new Date();

let todos = getData("todos", []);
let events = getData("events", []);
let links = getData("links", defaultLinks);
let budget = getData("budget", {
  income: 0,
  expenses: 0,
  savings: 0
});
let wishlist = getData("wishlist", []);
let photos = getData("photos", defaultPhotos);

if (localStorage.getItem("links") === null) {
  saveData("links", links);
}

if (localStorage.getItem("photos") === null) {
  saveData("photos", photos);
}

// ---------- Tabs ----------
const navButtons = document.querySelectorAll(".nav-btn");
const tabs = document.querySelectorAll(".tab");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabName = button.dataset.tab;

    navButtons.forEach((btn) => btn.classList.remove("active"));
    tabs.forEach((tab) => tab.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(tabName).classList.add("active");
  });
});

// ---------- Today Card ----------
const affirmations = [
  "You are loved more than you know.",
  "You are doing better than you think.",
  "Today is lucky to have you in it.",
  "You are beautiful, capable, and strong.",
  "Small steps still count.",
  "You make life sweeter.",
  "You deserve peace, joy, and a really good day.",
  "The world is better with you in it.",
  "You are my favorite person.",
  "You are allowed to rest and still be amazing.",
  "You make ordinary days feel special.",
  "You are the sweetest part of my day.",
  "You are magic in human form.",
  "You are enough, exactly as you are.",
  "You deserve a soft, happy, beautiful day.",
  "You are stronger than today’s stress.",
  "You make everything feel warmer.",
  "You are allowed to take things one step at a time.",
  "You bring light into every room you enter.",
  "You are worthy of love, comfort, and good things.",
  "You are doing amazing, even on the hard days.",
  "Your smile is one of my favorite things in the world.",
  "You deserve a day that feels gentle and kind.",
  "You are capable of handling whatever today brings.",
  "You are deeply loved, always.",
  "You are my favorite hello and my hardest goodbye.",
  "You make the little moments feel big.",
  "You are more than enough.",
  "You deserve to feel proud of yourself today.",
  "You are beautiful inside and out.",
  "The best part of my day is anything with you in it.",
  "You are a blessing in my life.",
  "You are allowed to slow down and breathe.",
  "You have such a good heart.",
  "You are loved on your productive days and your tired days.",
  "You are my peace.",
  "You turn normal days into memories.",
  "You deserve flowers, snacks, and zero stress.",
  "You are the cutest part of this website.",
  "You are the reason this little hub exists."
];

function renderTodayCard() {
  const today = new Date();
  const todayString = today.toISOString().split("T")[0];

  document.getElementById("todayDate").textContent = today.toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    }
  );

  const dailyIndex = hashString(todayString) % affirmations.length;
  document.getElementById("affirmationText").textContent =
    affirmations[dailyIndex];

  const todayEvents = events.filter((event) => event.date === todayString);
  const todayEventsList = document.getElementById("todayEvents");

  todayEventsList.innerHTML = "";

  if (todayEvents.length === 0) {
    todayEventsList.innerHTML = "<li>No events today. Enjoy the calm.</li>";
    return;
  }

  todayEvents.forEach((event) => {
    const li = document.createElement("li");
    li.textContent = event.text;
    todayEventsList.appendChild(li);
  });
}

// ---------- Calendar ----------
const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("monthYear");

function renderCalendar() {
  calendar.innerHTML = "";

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const startDay = firstDay.getDay();
  const totalDays = lastDay.getDate();

  monthYear.textContent = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });

  for (let i = 0; i < startDay; i++) {
    const emptyDay = document.createElement("div");
    emptyDay.classList.add("day", "empty");
    calendar.appendChild(emptyDay);
  }

  for (let day = 1; day <= totalDays; day++) {
    const dayBox = document.createElement("div");
    dayBox.classList.add("day");

    const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;

    const todayString = new Date().toISOString().split("T")[0];

    if (dateString === todayString) {
      dayBox.classList.add("today");
    }

    const dayNumber = document.createElement("div");
    dayNumber.classList.add("day-number");
    dayNumber.textContent = day;
    dayBox.appendChild(dayNumber);

    const dayEvents = events.filter((event) => event.date === dateString);

    dayEvents.forEach((event) => {
      const eventPill = document.createElement("div");
      eventPill.classList.add("event-pill");
      eventPill.textContent = event.text;
      eventPill.title = "Click to delete";

      eventPill.addEventListener("click", (e) => {
        e.stopPropagation();
        events = events.filter((item) => item.id !== event.id);
        saveData("events", events);
        renderCalendar();
        renderTodayCard();
      });

      dayBox.appendChild(eventPill);
    });

    dayBox.addEventListener("click", () => {
      document.getElementById("eventDate").value = dateString;
      document.getElementById("eventText").focus();
    });

    calendar.appendChild(dayBox);
  }
}

document.getElementById("prevMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

document.getElementById("nextMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

document.getElementById("eventForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const date = document.getElementById("eventDate").value;
  const text = document.getElementById("eventText").value.trim();

  if (!date || !text) return;

  events.push({
    id: Date.now(),
    date,
    text
  });

  saveData("events", events);

  document.getElementById("eventForm").reset();

  renderCalendar();
  renderTodayCard();
});

// ---------- To-Do List ----------
function renderTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";

  if (todos.length === 0) {
    todoList.innerHTML =
      "<li>No tasks yet. Add something cute or productive.</li>";
    return;
  }

  todos.forEach((todo) => {
    const li = document.createElement("li");

    if (todo.done) {
      li.classList.add("done");
    }

    const span = document.createElement("span");
    span.textContent = todo.text;

    span.addEventListener("click", () => {
      todo.done = !todo.done;
      saveData("todos", todos);
      renderTodos();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", () => {
      todos = todos.filter((item) => item.id !== todo.id);
      saveData("todos", todos);
      renderTodos();
    });

    li.appendChild(span);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

document.getElementById("todoForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.getElementById("todoInput");
  const text = input.value.trim();

  if (!text) return;

  todos.push({
    id: Date.now(),
    text,
    done: false
  });

  saveData("todos", todos);
  input.value = "";

  renderTodos();
});

// ---------- Useful Links ----------
function renderLinks() {
  const linksList = document.getElementById("linksList");
  linksList.innerHTML = "";

  if (links.length === 0) {
    linksList.innerHTML = "<p>No links added yet.</p>";
    return;
  }

  links.forEach((link) => {
    const card = document.createElement("div");
    card.classList.add("mini-card");

    card.innerHTML = `
      <h3>${link.name}</h3>
      <a href="${link.url}" target="_blank">${link.url}</a>
      <br><br>
      <button class="delete-btn">Delete</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      links = links.filter((item) => item.id !== link.id);
      saveData("links", links);
      renderLinks();
    });

    linksList.appendChild(card);
  });
}

document.getElementById("linkForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("linkName").value.trim();
  const url = document.getElementById("linkUrl").value.trim();

  if (!name || !url) return;

  links.push({
    id: Date.now(),
    name,
    url
  });

  saveData("links", links);
  e.target.reset();

  renderLinks();
});

// ---------- Budget ----------
function renderBudget() {
  document.getElementById("incomeInput").value = budget.income || "";
  document.getElementById("expenseInput").value = budget.expenses || "";
  document.getElementById("savingsInput").value = budget.savings || "";

  const leftover =
    Number(budget.income) - Number(budget.expenses) - Number(budget.savings);

  document.getElementById("incomeDisplay").textContent = formatMoney(
    budget.income
  );
  document.getElementById("expenseDisplay").textContent = formatMoney(
    budget.expenses
  );
  document.getElementById("savingsDisplay").textContent = formatMoney(
    budget.savings
  );
  document.getElementById("leftoverDisplay").textContent =
    formatMoney(leftover);
}

document.getElementById("saveBudget").addEventListener("click", () => {
  budget = {
    income: Number(document.getElementById("incomeInput").value || 0),
    expenses: Number(document.getElementById("expenseInput").value || 0),
    savings: Number(document.getElementById("savingsInput").value || 0)
  };

  saveData("budget", budget);
  renderBudget();
});

// ---------- Wishlist ----------
function renderWishlist() {
  const wishlistItems = document.getElementById("wishlistItems");
  wishlistItems.innerHTML = "";

  if (wishlist.length === 0) {
    wishlistItems.innerHTML = "<p>No wishlist items yet.</p>";
    return;
  }

  wishlist.forEach((wish) => {
    const card = document.createElement("div");
    card.classList.add("mini-card");

    card.innerHTML = `
      <h3>${wish.name}</h3>
      <p><strong>Price:</strong> ${
        wish.price ? formatMoney(wish.price) : "Not added"
      }</p>
      <p><strong>Priority:</strong> ${wish.priority}</p>
      ${wish.url ? `<a href="${wish.url}" target="_blank">View Item</a>` : ""}
      <br><br>
      <button class="delete-btn">Delete</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      wishlist = wishlist.filter((item) => item.id !== wish.id);
      saveData("wishlist", wishlist);
      renderWishlist();
    });

    wishlistItems.appendChild(card);
  });
}

document.getElementById("wishlistForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("wishName").value.trim();
  const price = document.getElementById("wishPrice").value;
  const url = document.getElementById("wishUrl").value.trim();
  const priority = document.getElementById("wishPriority").value;

  if (!name) return;

  wishlist.push({
    id: Date.now(),
    name,
    price,
    url,
    priority
  });

  saveData("wishlist", wishlist);
  e.target.reset();

  renderWishlist();
});

// ---------- Photo Gallery ----------
function renderPhotos() {
  const photoGallery = document.getElementById("photoGallery");
  photoGallery.innerHTML = "";

  if (photos.length === 0) {
    photoGallery.innerHTML = "<p>No photos yet. Add a memory.</p>";
    return;
  }

  photos.forEach((photo) => {
    const card = document.createElement("div");
    card.classList.add("photo-card");

    card.innerHTML = `
      <img src="${photo.image}" alt="${photo.caption || "Memory photo"}" />
      <p>${photo.caption || "A sweet memory"}</p>
      <br>
      <button class="delete-btn">Delete</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      photos = photos.filter((item) => item.id !== photo.id);
      saveData("photos", photos);
      renderPhotos();
    });

    photoGallery.appendChild(card);
  });
}

document.getElementById("photoForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const fileInput = document.getElementById("photoInput");
  const caption = document.getElementById("photoCaption").value.trim();
  const file = fileInput.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function () {
    photos.push({
      id: Date.now(),
      image: reader.result,
      caption
    });

    saveData("photos", photos);
    e.target.reset();

    renderPhotos();
  };

  reader.readAsDataURL(file);
});

// ---------- What to Eat ----------
function renderRandomFood() {
  const randomIndex = Math.floor(Math.random() * foodIdeas.length);
  const food = foodIdeas[randomIndex];

  const foodResult = document.getElementById("foodResult");

  foodResult.innerHTML = `
    <p class="small-label">Today's pick</p>
    <h3>${food.name}</h3>
    <span class="food-category">${food.category}</span>
    <p>${food.vibe}</p>
  `;
}

const pickFoodBtn = document.getElementById("pickFoodBtn");

if (pickFoodBtn) {
  pickFoodBtn.addEventListener("click", renderRandomFood);
}

// ---------- Initial Render ----------
renderTodayCard();
renderCalendar();
renderTodos();
renderLinks();
renderBudget();
renderWishlist();
renderPhotos();
