import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

// Настройка приложения Express
const app = express();
const PORT = 5000;

// Настройка базы данных MongoDB
mongoose.connect('mongodb://localhost:27017/blogs', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Проверка подключения
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Модель блога
const Blog = mongoose.model('Blog', new mongoose.Schema({
  title: String,
  excerpt: String,
  content: String,
}));

// Middleware
app.use(cors({
  origin: 'http://localhost:3001', // Разрешаем запросы только с фронтенда на порту 3001
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Разрешаем только эти методы
  allowedHeaders: ['Content-Type'], // Разрешаем только Content-Type заголовки
}));
app.use(bodyParser.json());

// Маршруты для работы с блогами

// Получить все блоги
app.get('/blogs', async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

// Получить конкретный блог
app.get('/blogs/:id', async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).send('Post not found');
  res.json(blog);
});

// Добавить новый блог
app.post('/blogs', async (req, res) => {
  const { title, excerpt, content } = req.body;
  const blog = new Blog({ title, excerpt, content });
  await blog.save();
  res.status(201).json(blog);
});

// Обновить блог
app.put('/blogs/:id', async (req, res) => {
  const { title, excerpt, content } = req.body;
  const blog = await Blog.findByIdAndUpdate(req.params.id, { title, excerpt, content }, { new: true });
  if (!blog) return res.status(404).send('Post not found');
  res.json(blog);
});

// Удалить блог
app.delete('/blogs/:id', async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (!blog) return res.status(404).send('Post not found');
  res.json({ message: 'Blog deleted successfully' });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
