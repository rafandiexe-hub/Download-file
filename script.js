* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, Arial, sans-serif;
  background: #f1f4f8;
}

.container {
  width: 100%;
  max-width: 420px;
  margin: auto;
  padding: 20px;
}

.header {
  font-size: 22px;
  font-weight: bold;
  color: #1e88e5;
  text-align: center;
  margin-bottom: 6px;
}

.subtitle {
  text-align: center;
  color: #555;
  margin-bottom: 20px;
  font-size: 14px;
}

input {
  width: 100%;
  padding: 14px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 12px;
}

button {
  width: 100%;
  padding: 14px;
  font-size: 16px;
  background: #1e88e5;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
}

button:active {
  opacity: 0.85;
}

#files {
  margin-top: 20px;
}

.file {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,.05);
}

.file-name {
  font-size: 15px;
  margin-bottom: 8px;
  word-break: break-all;
}

.file a {
  display: inline-block;
  padding: 8px 14px;
  background: #1e88e5;
  color: white;
  border-radius: 6px;
  font-size: 14px;
  text-decoration: none;
}
