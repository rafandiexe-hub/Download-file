async function loadFiles() {
  const repo = document.getElementById("repo").value;
  const filesDiv = document.getElementById("files");
  filesDiv.innerHTML = "Loading...";

  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/contents`);
    const data = await res.json();

    filesDiv.innerHTML = "";

    data.forEach(file => {
      if (file.type === "file") {
        filesDiv.innerHTML += `
          <div class="file">
            📄 ${file.name}<br>
            <a href="${file.download_url}" target="_blank">Download</a>
          </div>
        `;
      }
    });
  } catch {
    filesDiv.innerHTML = "Repo tidak ditemukan!";
  }
}
