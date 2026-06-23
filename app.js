// ---------- Helpers ----------
function getData(key, fallback) {
  return JSON.parse(localStorage.getItem(key)) || fallback;
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function formatMoney(amount) {
  return `$${Number(amount || 0).toLocaleString()}`;
}

// ---------- App State ----------
let currentDate = new Date();

let todos = getData("todos", []);
let events = getData("events", []);
let links = getData("links", []);
let budget = getData("budget", {
  income: 0,
  expenses: 0,
  savings: 0
});
let wishlist = getData("wishlist", []);
let photos = getData("photos", []);

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
  "You are allowed to rest and still be amazing."
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

  const dailyIndex = today.getDate() % affirmations.length;
  document.getElementById("affirmationText").textContent = affirmations[dailyIndex];

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

    const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
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
    todoList.innerHTML = "<li>No tasks yet. Add something cute or productive.</li>";
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

  const leftover = Number(budget.income) - Number(budget.expenses) - Number(budget.savings);

  document.getElementById("incomeDisplay").textContent = formatMoney(budget.income);
  document.getElementById("expenseDisplay").textContent = formatMoney(budget.expenses);
  document.getElementById("savingsDisplay").textContent = formatMoney(budget.savings);
  document.getElementById("leftoverDisplay").textContent = formatMoney(leftover);
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
      <p><strong>Price:</strong> ${wish.price ? formatMoney(wish.price) : "Not added"}</p>
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

// ---------- Initial Render ----------
renderTodayCard();
renderCalendar();
renderTodos();
renderLinks();
renderBudget();
renderWishlist();
renderPhotos();
