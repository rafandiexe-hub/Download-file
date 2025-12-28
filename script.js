const input = document.getElementById("repo");
const filesDiv = document.getElementById("files");

async function loadFiles() {
  const repo = input.value.trim();
  if (!repo) {
    filesDiv.innerHTML = "⚠️ Repo kosong";
    return;
  }

  filesDiv.innerHTML = "⏳ Loading...";

  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/contents`);
    const data = await res.json();

    if (!Array.isArray(data)) {
      filesDiv.innerHTML = "❌ Repo tidak ditemukan";
      return;
    }

    filesDiv.innerHTML = "";

    data.forEach(file => {
      if (file.type === "file") {
        filesDiv.innerHTML += `
          <div class="file">
            <div class="file-name">📄 ${file.name}</div>
            <a href="${file.download_url}" target="_blank">Download</a>
          </div>
        `;
      }
    });
  } catch {
    filesDiv.innerHTML = "❌ Error ambil data";
  }
}

/* 🔥 AUTO LOAD DARI URL */
const params = new URLSearchParams(window.location.search);
const autoRepo = params.get("repo");
if (autoRepo) {
  input.value = autoRepo;
  loadFiles();
}
