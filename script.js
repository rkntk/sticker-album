body {
  font-family: Arial, sans-serif;
  padding: 20px;
}

#album-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.sticker-card {
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  background: #f9f9f9;
}

.sticker-card img {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 8px;
}

.sticker-card h3 {
  margin: 0 0 5px 0;
  font-size: 14px;
}

.sticker-card p {
  margin: 0;
  font-size: 12px;
  color: #555;
}
