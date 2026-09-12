# 🧱 Dev Stack Builder

A responsive React + TypeScript web app that lets developers explore a curated
catalog of frontend, backend, database, language, styling, and DevOps
technologies, and build their own "ideal stack" by adding and removing cards
from a live sidebar.

## 🚀 Technologies Used
- React.js (TypeScript)
- Vite
- Tailwind CSS
- React-Toastify
- JSON (local technology data)

## ✨ Features
1. **Interactive stack builder** — add or remove technologies from a live
   sidebar with instant toast feedback for every action.
2. **Duplicate protection** — a technology already in the stack shows a
   disabled "✓ Added to Stack" button and a warning toast if adding is
   attempted again.
3. **Fully responsive UI** — a 3-column technology grid that adapts to 1 and
   2 columns on mobile/tablet, plus a mobile hamburger navbar.

---
1. What is JSX, and why is it used in React?

Answer:
JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes React code easier to read and helps us create UI easily.

2. What is the difference between props and state?

Answer:
Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change inside a component.

3. What does the useState hook do, and where did you use it in this project?

Answer:
useState is a React Hook used to create and manage changing data. In this project, I used it to manage the selected technologies in the Your Stack section.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

Answer:
useEffect is used to perform side effects in a React component. I used it to load the technology data from the local JSON file when the component loads.

5. Why does every item in a .map() list need a unique key prop?

Answer:
A unique key helps React identify each item in a list. It helps React efficiently update, add, or remove items when the list changes.

Example:

{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
6. What is conditional rendering? Show one place you used it.

Answer:
Conditional rendering means showing different UI based on a condition. I used it in the Your Stack section to show an empty message when no technology is selected.

Example:

{stack.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  // selected technologies
)}
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Answer:
A parent passes data to a child using props. A child can send information back to the parent by calling a function that the parent passes as a prop.

Example:

<TechnologyCard
  technology={technology}
  onAdd={handleAdd}
/>

