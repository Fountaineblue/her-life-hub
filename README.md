I am building a GitHub Pages website called “Her Life Hub” for my girlfriend.

The site is a simple static website with three files:
- index.html
- styles.css
- app.js

It is hosted on GitHub Pages at:
https://fountaineblue.github.io/her-life-hub/

The site uses browser localStorage, not a backend, so user-added data saves in that browser.

Current features:
1. Home tab
   - Today card
   - Daily affirmation
   - Today’s calendar events
   - Monthly calendar
   - To-do list

2. Useful Links tab
   - Preloaded legal links:
     - Amazon: https://www.amazon.ca/
     - Prime Video
     - YouTube
     - Netflix
     - Disney+
     - TSN
     - Sportsnet
     - DAZN
   - User can add/delete links

3. Budget tab
   - Monthly income
   - Monthly expenses
   - Savings goal
   - Leftover amount
   - Saves to localStorage

4. Wishlist tab
   - Item name
   - Price
   - Link
   - Priority
   - Saves to localStorage

5. Photo Gallery tab
   - Preloaded photos from a GitHub repo folder called /photos
   - Photo paths use filenames like photos/IMG_3813.JPEG, photos/IMG_3870.JPEG, etc.
   - User can add more photos from the site
   - Saves added photos to localStorage

6. What to Eat tab
   - Button says “Pick for me 💕”
   - Randomly generates a food idea
   - Food options include Korean, Japanese, Nepali, South Asian, Chipotle-style, cozy takeout, quick meals, comfort food, and light meals
   - No beef options because she does not eat beef
   - Default message says: Perfect for when Jharu says, “What to eat?”

Design:
- Cute pink theme
- Sidebar navigation
- Rounded cards
- Mobile-friendly layout
- Uses plain HTML/CSS/JavaScript only

Important context:
- I am editing files directly in GitHub, not locally.
- When giving me code changes, provide the full replacement file when possible.
- Be careful not to mix app.js code into index.html.
- index.html should start with <!DOCTYPE html>
- app.js should start with function getData(key, fallback)
- styles.css should contain the pink dashboard styling.

I want help making future updates to this existing site. Please keep the current features and only modify what I ask for.
