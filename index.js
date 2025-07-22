<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Inspire Journal</title>
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(to right, #1e1f26, #2a2b38);
      color: #e5e7eb;
    }

    header {
      text-align: center;
      padding: 30px 20px 20px;
      background: linear-gradient(to right, #0f2027, #2c5364);
    }

    header h1 {
      font-size: 42px;
      color: #ffffff;
      margin: 0;
      font-weight: 800;
    }

    main {
      display: flex;
      justify-content: space-between;
      gap: 30px;
      max-width: 1200px;
      margin: 30px auto;
      padding: 0 20px;
      flex-wrap: wrap;
    }

    .journal-form {
      flex: 1;
      min-width: 350px;
      max-width: 500px;
      background: linear-gradient(to bottom right, #2e3440, #3b4252);
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      height: fit-content;
    }

    .input-block {
      margin-bottom: 20px;
    }

    .input-block input,
    .input-block textarea {
      width: 100%;
      padding: 14px 16px;
      font-size: 16px;
      border: 2px solid #4c566a;
      border-radius: 10px;
      background: #434c5e;
      color: #eceff4;
      transition: all 0.3s ease;
    }

    .input-block input:focus,
    .input-block textarea:focus {
      border-color: #88c0d0;
      box-shadow: 0 0 5px #88c0d099;
      outline: none;
      background: #2e3440;
    }

    .submit-btn {
      background: linear-gradient(to right, #8fbcbb, #5e81ac);
      color: white;
      padding: 14px;
      border: none;
      border-radius: 10px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      width: 100%;
      box-shadow: 0 4px 10px rgba(94, 129, 172, 0.4);
      transition: all 0.3s ease;
    }

    .submit-btn:hover {
      background: linear-gradient(to right, #81a1c1, #88c0d0);
      transform: scale(1.02);
    }

    .entries-list {
      flex: 2;
      min-width: 400px;
    }

    .entry-card {
      background: linear-gradient(to top left, #3b4252, #434c5e);
      padding: 22px 26px;
      margin-bottom: 25px;
      border-radius: 14px;
      border-left: 5px solid #81a1c1;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .entry-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
    }

    .entry-card h2 {
      margin: 0 0 10px;
      font-size: 24px;
      color: #eceff4;
    }

    .entry-card p {
      margin: 0;
      font-size: 16px;
      color: #d8dee9;
      line-height: 1.6;
    }

    @media (max-width: 900px) {
      main {
        flex-direction: column;
      }

      .journal-form,
      .entries-list {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>🌌 Inspire Journal</h1>
  </header>

  <main>
    <section class="journal-form">
      <div class="input-block">
        <input type="text" id="entryTitle" placeholder="What's your thought today?">
      </div>
      <div class="input-block">
        <textarea id="entryContent" rows="6" placeholder="Share your inspiration..."></textarea>
      </div>
      <button class="submit-btn" onclick="submitEntry()">Post Thought</button>
    </section>

    <section class="entries-list" id="entryFeed">
      <!-- Journal entries appear here -->
    </section>
  </main>

  <script>
    function submitEntry() {
      const entryTitle = document.getElementById('entryTitle').value.trim();
      const entryContent = document.getElementById('entryContent').value.trim();
      if (entryTitle && entryContent) {
        const newEntry = document.createElement('div');
        newEntry.className = 'entry-card';
        newEntry.innerHTML = `<h2>${entryTitle}</h2><p>${entryContent}</p>`;
        document.getElementById('entryFeed').prepend(newEntry);
        document.getElementById('entryTitle').value = '';
        document.getElementById('entryContent').value = '';
      }
    }
  </script>
</body>
</html>
