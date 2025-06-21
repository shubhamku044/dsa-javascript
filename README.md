# 🚀 DSA Learning Hub – Namaste DSA Companion

Welcome to **DSA Learning Hub**, a modern and interactive frontend reference built while learning from the [Namaste DSA course](https://namastedev.com/learn/namaste-dsa) by [Akshay Saini](https://twitter.com/akshaymarch7).  
This project helps me revise and practice Data Structures & Algorithms anywhere, with beautifully rendered markdown notes and live code modules.

> 🧠 Built with 💜 using React, Vite, TailwindCSS, Highlight.js and ⚡️ dynamic `import.meta.glob` magic.

---

## 📸 Preview

![screenshot](https://github.com/shubhamku044/dsa-javascript/assets/preview.png)

---

## ✨ Features

- 📘 Handwritten markdown notes for each topic/subtopic.
- 💡 Syntax-highlighted code examples.
- ⚡️ Auto-executing TypeScript DSA snippets.
- 🧭 Smooth navigation by hash-based routing.
- 🎯 Powered by [`import.meta.glob`](https://vitejs.dev/guide/features.html#glob-import) for zero-config file loading.

---

## 📂 Project Structure

```bash
.
├── dsa/
│   ├── warm-up/
│   │   ├── README.md
│   │   ├── second-largest/
│   │   │   └── index.ts
│   │   ├── star-pattern/
│   │   │   └── index.ts
│   │   └── ...
│   └── ...
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
├── App.tsx
└── ...
```

> 📁 Each topic and subtopic has its own `README.md` and `index.ts` file for separation of concern.

---

## 🛠️ Local Development

Follow these steps to set up the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/shubhamku044/dsa-javascript.git

# 2. Navigate to the project folder
cd dsa-javascript

# 3. Install dependencies
pnpm install

# 4. Run the dev server
pnpm dev
```

Now open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧑‍💻 Contributing

Whether you want to fix a typo, add a new DSA topic, or improve the UI — all contributions are welcome!

### 🔧 Add a New Subtopic

1. Create a new folder under the correct topic:

   ```bash
   mkdir -p dsa/warm-up/my-new-topic
   ```

2. Add:

   - `README.md` – your explanation or notes
   - `index.ts` – your working TypeScript DSA code

3. Update the `subtopics` object in `App.tsx` to include your new entry.

4. Submit a pull request 💜

---

## 📜 Credits

- 👨‍🏫 [Akshay Saini](https://twitter.com/akshaymarch7) – for the fantastic [Namaste DSA course](https://namastedev.com/learn/namaste-dsa)
- ⚛️ [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 💡 [highlight.js](https://highlightjs.org/)
- ✍️ [Marked](https://marked.js.org/)

---

## 📣 Connect

Feel free to ⭐️ the repo if you found it useful, and [follow me on GitHub](https://github.com/shubhamku044) or [LinkedIn](https://www.linkedin.com/in/shubham-sharma-044) to stay updated!

---

Made with ❤️ for the dev community.
