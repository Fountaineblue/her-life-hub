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
  return "$" + Number(amount || 0).toLocaleString();
}

function hashString(text) {
  let hash = 0;

  for (let i = 0; i < text.length; i++) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash);
}

const defaultLinks = [
  { id: 1, name: "Amazon", url: "https://www.amazon.ca/" },
  { id: 2, name: "Prime Video", url: "https://www.primevideo.com/" },
  { id: 3, name: "YouTube", url: "https://www.youtube.com/" },
  { id: 4, name: "Netflix", url: "https://www.netflix.com/" },
  { id: 5, name: "Disney+", url: "https://www.disneyplus.com/" },
  { id: 6, name: "TSN", url: "https://www.tsn.ca/" },
  { id: 7, name: "Sportsnet", url: "https://www.sportsnet.ca/" },
  { id: 8, name: "DAZN", url: "https://www.dazn.com/" }
];

const defaultPhotos = [
  { id: 101, image: "photos/IMG_3813.JPEG", caption: "Dressed up and glowing together." },
  { id: 102, image: "photos/IMG_3870.JPEG", caption: "A sky full of clouds, and still my favorite view is you." },
  { id: 103, image: "photos/IMG_4031.JPEG", caption: "The way we look at each other says everything." },
  { id: 104, image: "photos/IMG_4290.JPEG", caption: "Cold city, warm hearts." },
  { id: 105, image: "photos/IMG_7379.JPEG", caption: "Paris nights and the prettiest smile." },
  { id: 106, image: "photos/IMG_7506.JPEG", caption: "Silly little coffee date memories." },
  { id: 107, image: "photos/IMG_7678.JPEG", caption: "Museum days feel better with you." },
  { id: 108, image: "photos/IMG_8126.JPEG", caption: "Sunshine, gardens, and us." },
  { id: 109, image: "photos/IMG_8650.JPEG", caption: "Canal kisses and happy moments." },
  { id: 110, image: "photos/IMG_0509.JPEG", caption: "Snowy nights, cozy love." },
  { id: 111, image: "photos/IMG_1238.JPEG", caption: "Grand Canyon, tiny us, huge love." },
  { id: 112, image: "photos/IMG_1240.JPEG", caption: "Adventure looks good on us." },
  { id: 113, image: "photos/IMG_2602.JPEG", caption: "Sunny smiles in the city." },
  { id: 114, image: "photos/IMG_2609.JPEG", caption: "A picture-perfect day together." },
  { id: 115, image: "photos/IMG_2617.JPEG", caption: "Big monument, bigger smiles." },
  { id: 116, image: "photos/IMG_3547.JPEG", caption: "Train rides and little love stories." }
];

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
  "You are stronger than today's stress.",
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

const foodIdeas = [
  { name: "Bibimbap with Chicken", category: "Korean", vibe: "A colorful rice bowl with veggies, egg, chicken, and spicy gochujang." },
  { name: "Veggie Bibimbap", category: "Korean", vibe: "Colorful, cozy, and full of veggies with rice and egg." },
  { name: "Tteokbokki", category: "Korean", vibe: "Spicy, chewy rice cakes for a cozy comfort-food craving." },
  { name: "Rose Tteokbokki", category: "Korean", vibe: "Creamy, spicy, and extra cozy." },
  { name: "Korean Fried Chicken", category: "Korean", vibe: "Crispy, saucy, sweet, spicy, and perfect for a treat-yourself meal." },
  { name: "Soy Garlic Korean Chicken", category: "Korean", vibe: "Crispy chicken with a sweet garlic glaze." },
  { name: "Kimchi Fried Rice", category: "Korean", vibe: "Easy, flavorful, and perfect with a fried egg on top." },
  { name: "Kimbap", category: "Korean", vibe: "Cute rice rolls that feel like a snack and a meal." },
  { name: "Tuna Kimbap", category: "Korean", vibe: "Simple, filling, and perfect for a quick Korean-style bite." },
  { name: "Veggie Kimbap", category: "Korean", vibe: "Fresh, colorful, and easy to eat." },
  { name: "Japchae", category: "Korean", vibe: "Glass noodles, veggies, and sweet-savory flavor." },
  { name: "Kimchi Stew", category: "Korean", vibe: "Warm, spicy, and cozy for a lazy day." },
  { name: "Soondubu Jjigae", category: "Korean", vibe: "Soft tofu stew that feels warm and comforting." },
  { name: "Korean Corn Dog", category: "Korean", vibe: "Fun, cheesy, crispy, and snacky." },
  { name: "Jajangmyeon", category: "Korean", vibe: "Noodles with rich black bean sauce. Savory and comforting." },
  { name: "Spicy Chicken Rice Bowl", category: "Korean", vibe: "Bold, spicy, filling, and perfect with rice." },
  { name: "Korean BBQ Chicken Bowl", category: "Korean", vibe: "Sweet, savory, saucy chicken over rice." },
  { name: "Dakgalbi", category: "Korean", vibe: "Spicy stir-fried chicken with cabbage, rice cakes, and big comfort energy." },
  { name: "Korean Egg Rice", category: "Korean", vibe: "Simple rice, egg, sesame oil, and soy sauce. Easy and cozy." },
  { name: "Kimchi Pancake", category: "Korean", vibe: "Crispy, spicy, and perfect for a snacky meal." },
  { name: "Seafood Pancake", category: "Korean", vibe: "Crispy edges, soft middle, and perfect with dipping sauce." },
  { name: "Korean Rice Balls", category: "Korean", vibe: "Cute little rice bites with seaweed and sesame flavor." },
  { name: "Spicy Cold Noodles", category: "Korean", vibe: "Refreshing, spicy, and perfect when she wants something different." },
  { name: "Korean Army Stew with Chicken Sausage", category: "Korean", vibe: "Noodles, kimchi, tofu, and cozy spicy soup energy." },

  { name: "Chicken Katsu", category: "Japanese", vibe: "Crispy chicken cutlet with rice and sauce." },
  { name: "Japanese Curry with Chicken", category: "Japanese", vibe: "Warm curry over rice. Cozy and filling." },
  { name: "Japanese Curry with Veggies", category: "Japanese", vibe: "Soft potatoes, carrots, rice, and cozy curry sauce." },
  { name: "Ramen", category: "Japanese", vibe: "Noodles, broth, toppings, and comfort in one bowl." },
  { name: "Spicy Miso Ramen", category: "Japanese", vibe: "Warm, spicy, savory, and perfect for noodle cravings." },
  { name: "Chicken Ramen", category: "Japanese", vibe: "Cozy broth, noodles, chicken, egg, and toppings." },
  { name: "Veggie Ramen", category: "Japanese", vibe: "Noodles, broth, mushrooms, corn, greens, and comfort." },
  { name: "Sushi Bowl", category: "Japanese", vibe: "All the sushi flavors without needing to roll anything." },
  { name: "Salmon Sushi Bowl", category: "Japanese", vibe: "Fresh salmon, rice, cucumber, avocado, and spicy mayo." },
  { name: "California Roll Bowl", category: "Japanese", vibe: "Crab, avocado, cucumber, rice, and sushi vibes." },
  { name: "Onigiri", category: "Japanese", vibe: "Cute rice balls with filling." },
  { name: "Tuna Mayo Onigiri", category: "Japanese", vibe: "A classic little rice snack that feels cute and filling." },
  { name: "Udon Noodle Soup", category: "Japanese", vibe: "Thick noodles in warm broth." },
  { name: "Yaki Udon", category: "Japanese", vibe: "Stir-fried udon noodles with veggies and sauce." },
  { name: "Teriyaki Chicken Bowl", category: "Japanese", vibe: "Sweet-savory chicken over rice with veggies." },
  { name: "Salmon Teriyaki", category: "Japanese", vibe: "Sweet-savory salmon with rice and veggies." },
  { name: "Tempura", category: "Japanese", vibe: "Light, crispy, and fun." },
  { name: "Shrimp Tempura Bowl", category: "Japanese", vibe: "Crispy shrimp, rice, sauce, and cozy crunch." },
  { name: "Gyoza", category: "Japanese", vibe: "Pan-fried dumplings that are always a good idea." },
  { name: "Chicken Gyoza", category: "Japanese", vibe: "Crispy-bottom dumplings with juicy chicken filling." },
  { name: "Veggie Gyoza", category: "Japanese", vibe: "Light, crispy, and perfect with dipping sauce." },
  { name: "Poke Bowl", category: "Japanese-Inspired", vibe: "Fresh, customizable, and lighter." },
  { name: "Okonomiyaki", category: "Japanese", vibe: "A savory pancake that feels fun and filling." },
  { name: "Takoyaki", category: "Japanese", vibe: "Little crispy-soft snack balls with sauce." },
  { name: "Omurice", category: "Japanese", vibe: "Fluffy egg over fried rice. Cute and comforting." },
  { name: "Miso Soup with Rice", category: "Japanese", vibe: "Simple, warm, and gentle." },

  { name: "Momo", category: "Nepali", vibe: "Juicy dumplings with spicy achar." },
  { name: "Chicken Momo", category: "Nepali", vibe: "Classic dumplings with spicy sauce and cozy happiness." },
  { name: "Veg Momo", category: "Nepali", vibe: "Soft dumplings packed with veggies and flavor." },
  { name: "Jhol Momo", category: "Nepali", vibe: "Momo in a spicy, tangy soup." },
  { name: "C Momo", category: "Nepali", vibe: "Saucy, spicy, and full of flavor." },
  { name: "Fried Momo", category: "Nepali", vibe: "Crispy dumplings with spicy achar." },
  { name: "Chicken Chow Mein", category: "Nepali", vibe: "Stir-fried noodles that are flavorful and satisfying." },
  { name: "Veg Chow Mein", category: "Nepali", vibe: "Noodles with veggies and takeout energy." },
  { name: "Thukpa", category: "Nepali", vibe: "Warm noodle soup for a cozy meal." },
  { name: "Chicken Thukpa", category: "Nepali", vibe: "Warm noodle soup with chicken and veggies." },
  { name: "Veg Thukpa", category: "Nepali", vibe: "Cozy noodle soup with vegetables and spice." },
  { name: "Dal Bhat", category: "Nepali", vibe: "Comforting rice, lentils, and sides." },
  { name: "Chicken Sekuwa", category: "Nepali", vibe: "Smoky, spiced grilled chicken." },
  { name: "Paneer Sekuwa", category: "Nepali", vibe: "Smoky, spiced paneer with big flavor." },
  { name: "Chatpate", category: "Nepali", vibe: "Crunchy, spicy, tangy snack mix." },
  { name: "Pani Puri", category: "South Asian", vibe: "Crispy, tangy, spicy little bites." },
  { name: "Samosa Chaat", category: "South Asian", vibe: "Crunchy, saucy, spicy, and snacky." },
  { name: "Aloo Paratha", category: "South Asian", vibe: "Stuffed flatbread with potato." },
  { name: "Butter Chicken Rice Bowl", category: "South Asian", vibe: "Creamy, cozy, and rich." },
  { name: "Paneer Butter Masala", category: "South Asian", vibe: "Creamy, saucy paneer with rice or naan." },
  { name: "Chicken Biryani", category: "South Asian", vibe: "Spiced rice, chicken, and big comfort energy." },
  { name: "Veg Biryani", category: "South Asian", vibe: "Fragrant rice, vegetables, and warm spices." },
  { name: "Chicken Tikka Masala", category: "South Asian", vibe: "Creamy, saucy, and perfect with naan." },
  { name: "Chana Masala", category: "South Asian", vibe: "Chickpeas in spicy sauce. Cozy and filling." },
  { name: "Palak Paneer", category: "South Asian", vibe: "Spinach, paneer, and warm comforting flavor." },
  { name: "Dosa", category: "South Asian", vibe: "Crispy, light, and perfect with chutney." },
  { name: "Masala Dosa", category: "South Asian", vibe: "Crispy dosa filled with spiced potatoes." },

  { name: "Chipotle Chicken Bowl", category: "Chipotle-Style", vibe: "Rice, beans, chicken, salsa, corn, cheese, and guac." },
  { name: "Chicken Burrito", category: "Chipotle-Style", vibe: "A classic wrap-it-all-up meal." },
  { name: "Chicken Quesadilla", category: "Chipotle-Style", vibe: "Cheesy, crispy, and perfect with salsa." },
  { name: "Cheese Quesadilla", category: "Chipotle-Style", vibe: "Simple, cheesy, crispy comfort." },
  { name: "Sofritas Bowl", category: "Chipotle-Style", vibe: "Plant-based, spicy, saucy, and satisfying." },
  { name: "Veggie Burrito Bowl", category: "Chipotle-Style", vibe: "Rice, beans, veggies, salsa, lettuce, and guac." },
  { name: "Chicken Taco Bowl", category: "Chipotle-Style", vibe: "All the taco flavors in bowl form." },
  { name: "Chicken Tacos", category: "Chipotle-Style", vibe: "Simple, cute, and easy to eat." },
  { name: "Loaded Chicken Nachos", category: "Chipotle-Style", vibe: "Crunchy chips, melty cheese, salsa, and chicken." },
  { name: "Bean and Cheese Burrito", category: "Chipotle-Style", vibe: "Simple, filling, and cozy." },
  { name: "Guac and Chips Dinner", category: "Chipotle-Style", vibe: "Not a full meal, but emotionally valid." },
  { name: "Chicken Salad Bowl", category: "Chipotle-Style", vibe: "Fresh, filling, and still fun." },

  { name: "Pho Ga", category: "Cozy Takeout", vibe: "Vietnamese chicken pho with warm broth, noodles, and herbs." },
  { name: "Veggie Pho", category: "Cozy Takeout", vibe: "Warm broth, noodles, herbs, and comfort." },
  { name: "Pad Thai", category: "Cozy Takeout", vibe: "Sweet, tangy, noodly, and always good." },
  { name: "Chicken Pad Thai", category: "Cozy Takeout", vibe: "Sweet, tangy noodles with chicken and peanuts." },
  { name: "Tofu Pad Thai", category: "Cozy Takeout", vibe: "Tangy noodles with tofu and cozy takeout energy." },
  { name: "Drunken Noodles", category: "Cozy Takeout", vibe: "Spicy noodles with big flavor." },
  { name: "Thai Green Curry with Chicken", category: "Cozy Takeout", vibe: "Creamy, spicy, and amazing over rice." },
  { name: "Thai Red Curry with Tofu", category: "Cozy Takeout", vibe: "Creamy curry with tofu, veggies, and rice." },
  { name: "Dumplings", category: "Quick Bites", vibe: "Steam them, fry them, dip them, love them." },
  { name: "Chicken Dumplings", category: "Quick Bites", vibe: "Juicy dumplings with cozy dipping sauce." },
  { name: "Veggie Dumplings", category: "Quick Bites", vibe: "Light, tasty, and snacky." },
  { name: "Spring Rolls", category: "Quick Bites", vibe: "Fresh, crunchy, and perfect with peanut sauce." },
  { name: "Chicken Fried Rice", category: "Quick Meal", vibe: "Easy, fast, and customizable." },
  { name: "Veg Fried Rice", category: "Quick Meal", vibe: "Simple, filling, and full of veggies." },
  { name: "Shrimp Fried Rice", category: "Quick Meal", vibe: "Quick rice with shrimp and lots of flavor." },
  { name: "Lo Mein", category: "Cozy Takeout", vibe: "Saucy noodles that always feel comforting." },
  { name: "Chicken Lo Mein", category: "Cozy Takeout", vibe: "Noodles, chicken, veggies, and takeout happiness." },
  { name: "Orange Chicken", category: "Cozy Takeout", vibe: "Crispy chicken with sweet citrus sauce." },
  { name: "General Tso's Chicken", category: "Cozy Takeout", vibe: "Sweet, spicy, crispy chicken for a treat meal." },
  { name: "Sesame Chicken", category: "Cozy Takeout", vibe: "Saucy, sweet, and perfect with rice." },
  { name: "Shawarma Chicken Bowl", category: "Rice Bowl", vibe: "Rice, chicken, garlic sauce, and veggies." },
  { name: "Falafel Wrap", category: "Quick Meal", vibe: "Crunchy, fresh, saucy, and easy." },
  { name: "Chicken Caesar Wrap", category: "Quick Meal", vibe: "Simple, fresh, and easy." },
  { name: "Avocado Toast with Egg", category: "Quick Meal", vibe: "Cute cafe energy at home." },
  { name: "Grilled Cheese and Tomato Soup", category: "Comfort Food", vibe: "Classic, cozy, and soft-day approved." },
  { name: "Mac and Cheese", category: "Comfort Food", vibe: "Cheesy comfort for when the day needs to be easier." },
  { name: "Loaded Fries", category: "Comfort Food", vibe: "Crispy fries with toppings. Emotionally correct." },
  { name: "Chicken Alfredo Pasta", category: "Comfort Food", vibe: "Creamy pasta for something rich and cozy." },
  { name: "Pesto Pasta", category: "Quick Meal", vibe: "Fresh, easy, and cute dinner energy." },
  { name: "Breakfast for Dinner", category: "Comfort Food", vibe: "Eggs, toast, hash browns, pancakes, or whatever feels fun." },
  { name: "Boba and Snack Run", category: "Treat", vibe: "Not exactly dinner, but sometimes the heart wants boba." },
  { name: "Smoothie Bowl", category: "Light Meal", vibe: "Fresh, pretty, and lighter." },
  { name: "Acai Bowl", category: "Light Meal", vibe: "Cold, fruity, and cute cafe vibes." },
  { name: "Chicken Noodle Soup", category: "Comfort Food", vibe: "Soft, warm, and comforting." },
  { name: "Rice Bowl with Egg and Avocado", category: "Quick Meal", vibe: "Simple, filling, and easy." },
  { name: "Tuna Melt", category: "Quick Meal", vibe: "Warm, cheesy, and easy." },
  { name: "Egg Salad Sandwich", category: "Quick Meal", vibe: "Simple, soft, and filling." },
  { name: "Crispy Chicken Sandwich", category: "Comfort Food", vibe: "Crunchy, saucy, and perfect for a craving." },
  { name: "Fish Tacos", category: "Quick Meal", vibe: "Fresh, bright, and fun." },
  { name: "Shrimp Tacos", category: "Quick Meal", vibe: "Light, fresh, and tasty." },
  { name: "Chicken Pita Wrap", category: "Quick Meal", vibe: "Easy, saucy, and filling." },
  { name: "Mediterranean Chicken Bowl", category: "Rice Bowl", vibe: "Chicken, rice, cucumber, tomato, hummus, and garlic sauce." },
  { name: "Hummus Plate", category: "Light Meal", vibe: "Hummus, pita, veggies, and snacky dinner energy." },
  { name: "Margherita Pizza", category: "Comfort Food", vibe: "Simple, cheesy, and always a safe pick." },
  { name: "Veggie Pizza", category: "Comfort Food", vibe: "Cheesy pizza with colorful veggies." },
  { name: "Chicken Pesto Pizza", category: "Comfort Food", vibe: "Cheesy, herby, and a little fancy." }
];

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

const navButtons = document.querySelectorAll(".nav-btn");
const tabs = document.querySelectorAll(".tab");

navButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const tabName = button.dataset.tab;

    navButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    tabs.forEach(function (tab) {
      tab.classList.remove("active");
    });

    button.classList.add("active");
    document.getElementById(tabName).classList.add("active");
  });
});

function renderTodayCard() {
  const today = new Date();
  const todayString = today.toISOString().split("T")[0];

  document.getElementById("todayDate").textContent = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  const dailyIndex = hashString(todayString) % affirmations.length;
  document.getElementById("affirmationText").textContent = affirmations[dailyIndex];

  const todayEvents = events.filter(function (event) {
    return event.date === todayString;
  });

  const todayEventsList = document.getElementById("todayEvents");
  todayEventsList.innerHTML = "";

  if (todayEvents.length === 0) {
    todayEventsList.innerHTML = "<li>No events today. Enjoy the calm.</li>";
    return;
  }

  todayEvents.forEach(function (event) {
    const li = document.createElement("li");
    li.textContent = event.text;
    todayEventsList.appendChild(li);
  });
}

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

    const dateString =
      year +
      "-" +
      String(month + 1).padStart(2, "0") +
      "-" +
      String(day).padStart(2, "0");

    const todayString = new Date().toISOString().split("T")[0];

    if (dateString === todayString) {
      dayBox.classList.add("today");
    }

    const dayNumber = document.createElement("div");
    dayNumber.classList.add("day-number");
    dayNumber.textContent = day;
    dayBox.appendChild(dayNumber);

    const dayEvents = events.filter(function (event) {
      return event.date === dateString;
    });

    dayEvents.forEach(function (event) {
      const eventPill = document.createElement("div");
      eventPill.classList.add("event-pill");
      eventPill.textContent = event.text;
      eventPill.title = "Click to delete";

      eventPill.addEventListener("click", function (e) {
        e.stopPropagation();

        events = events.filter(function (item) {
          return item.id !== event.id;
        });

        saveData("events", events);
        renderCalendar();
        renderTodayCard();
      });

      dayBox.appendChild(eventPill);
    });

    dayBox.addEventListener("click", function () {
      document.getElementById("eventDate").value = dateString;
      document.getElementById("eventText").focus();
    });

    calendar.appendChild(dayBox);
  }
}

document.getElementById("prevMonth").addEventListener("click", function () {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

document.getElementById("nextMonth").addEventListener("click", function () {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

document.getElementById("eventForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const date = document.getElementById("eventDate").value;
  const text = document.getElementById("eventText").value.trim();

  if (!date || !text) {
    return;
  }

  events.push({
    id: Date.now(),
    date: date,
    text: text
  });

  saveData("events", events);
  document.getElementById("eventForm").reset();

  renderCalendar();
  renderTodayCard();
});

function renderTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";

  if (todos.length === 0) {
    todoList.innerHTML = "<li>No tasks yet. Add something cute or productive.</li>";
    return;
  }

  todos.forEach(function (todo) {
    const li = document.createElement("li");

    if (todo.done) {
      li.classList.add("done");
    }

    const span = document.createElement("span");
    span.textContent = todo.text;

    span.addEventListener("click", function () {
      todo.done = !todo.done;
      saveData("todos", todos);
      renderTodos();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", function () {
      todos = todos.filter(function (item) {
        return item.id !== todo.id;
      });

      saveData("todos", todos);
      renderTodos();
    });

    li.appendChild(span);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

document.getElementById("todoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("todoInput");
  const text = input.value.trim();

  if (!text) {
    return;
  }

  todos.push({
    id: Date.now(),
    text: text,
    done: false
  });

  saveData("todos", todos);
  input.value = "";

  renderTodos();
});

function renderLinks() {
  const linksList = document.getElementById("linksList");
  linksList.innerHTML = "";

  if (links.length === 0) {
    linksList.innerHTML = "<p>No links added yet.</p>";
    return;
  }

  links.forEach(function (link) {
    const card = document.createElement("div");
    card.classList.add("mini-card");

    card.innerHTML =
      "<h3>" +
      link.name +
      "</h3>" +
      '<a href="' +
      link.url +
      '" target="_blank">' +
      link.url +
      "</a><br><br>" +
      '<button class="delete-btn">Delete</button>';

    card.querySelector("button").addEventListener("click", function () {
      links = links.filter(function (item) {
        return item.id !== link.id;
      });

      saveData("links", links);
      renderLinks();
    });

    linksList.appendChild(card);
  });
}

document.getElementById("linkForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("linkName").value.trim();
  const url = document.getElementById("linkUrl").value.trim();

  if (!name || !url) {
    return;
  }

  links.push({
    id: Date.now(),
    name: name,
    url: url
  });

  saveData("links", links);
  e.target.reset();

  renderLinks();
});

function renderBudget() {
  document.getElementById("incomeInput").value = budget.income || "";
  document.getElementById("expenseInput").value = budget.expenses || "";
  document.getElementById("savingsInput").value = budget.savings || "";

  const leftover =
    Number(budget.income) - Number(budget.expenses) - Number(budget.savings);

  document.getElementById("incomeDisplay").textContent = formatMoney(budget.income);
  document.getElementById("expenseDisplay").textContent = formatMoney(budget.expenses);
  document.getElementById("savingsDisplay").textContent = formatMoney(budget.savings);
  document.getElementById("leftoverDisplay").textContent = formatMoney(leftover);
}

document.getElementById("saveBudget").addEventListener("click", function () {
  budget = {
    income: Number(document.getElementById("incomeInput").value || 0),
    expenses: Number(document.getElementById("expenseInput").value || 0),
    savings: Number(document.getElementById("savingsInput").value || 0)
  };

  saveData("budget", budget);
  renderBudget();
});

function renderWishlist() {
  const wishlistItems = document.getElementById("wishlistItems");
  wishlistItems.innerHTML = "";

  if (wishlist.length === 0) {
    wishlistItems.innerHTML = "<p>No wishlist items yet.</p>";
    return;
  }

  wishlist.forEach(function (wish) {
    const card = document.createElement("div");
    card.classList.add("mini-card");

    let html = "<h3>" + wish.name + "</h3>";
    html += "<p><strong>Price:</strong> " + (wish.price ? formatMoney(wish.price) : "Not added") + "</p>";
    html += "<p><strong>Priority:</strong> " + wish.priority + "</p>";

    if (wish.url) {
      html += '<a href="' + wish.url + '" target="_blank">View Item</a>';
    }

    html += '<br><br><button class="delete-btn">Delete</button>';

    card.innerHTML = html;

    card.querySelector("button").addEventListener("click", function () {
      wishlist = wishlist.filter(function (item) {
        return item.id !== wish.id;
      });

      saveData("wishlist", wishlist);
      renderWishlist();
    });

    wishlistItems.appendChild(card);
  });
}

document.getElementById("wishlistForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("wishName").value.trim();
  const price = document.getElementById("wishPrice").value;
  const url = document.getElementById("wishUrl").value.trim();
  const priority = document.getElementById("wishPriority").value;

  if (!name) {
    return;
  }

  wishlist.push({
    id: Date.now(),
    name: name,
    price: price,
    url: url,
    priority: priority
  });

  saveData("wishlist", wishlist);
  e.target.reset();

  renderWishlist();
});

function renderPhotos() {
  const photoGallery = document.getElementById("photoGallery");
  photoGallery.innerHTML = "";

  if (photos.length === 0) {
    photoGallery.innerHTML = "<p>No photos yet. Add a memory.</p>";
    return;
  }

  photos.forEach(function (photo) {
    const card = document.createElement("div");
    card.classList.add("photo-card");

    card.innerHTML =
      '<img src="' +
      photo.image +
      '" alt="' +
      (photo.caption || "Memory photo") +
      '" />' +
      "<p>" +
      (photo.caption || "A sweet memory") +
      "</p><br>" +
      '<button class="delete-btn">Delete</button>';

    card.querySelector("button").addEventListener("click", function () {
      photos = photos.filter(function (item) {
        return item.id !== photo.id;
      });

      saveData("photos", photos);
      renderPhotos();
    });

    photoGallery.appendChild(card);
  });
}

document.getElementById("photoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fileInput = document.getElementById("photoInput");
  const caption = document.getElementById("photoCaption").value.trim();
  const file = fileInput.files[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.onload = function () {
    photos.push({
      id: Date.now(),
      image: reader.result,
      caption: caption
    });

    saveData("photos", photos);
    e.target.reset();

    renderPhotos();
  };

  reader.readAsDataURL(file);
});

function renderRandomFood() {
  const randomIndex = Math.floor(Math.random() * foodIdeas.length);
  const food = foodIdeas[randomIndex];

  const foodResult = document.getElementById("foodResult");

  foodResult.innerHTML =
    '<p class="small-label">Today&apos;s pick</p>' +
    "<h3>" +
    food.name +
    "</h3>" +
    '<span class="food-category">' +
    food.category +
    "</span>" +
    "<p>" +
    food.vibe +
    "</p>";
}

document.getElementById("pickFoodBtn").addEventListener("click", renderRandomFood);

renderTodayCard();
renderCalendar();
renderTodos();
renderLinks();
renderBudget();
renderWishlist();
renderPhotos();
