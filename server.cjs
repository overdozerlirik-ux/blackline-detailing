const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

app.post('/api/booking', async (req, res) => {
  try {
    const { name, phone, car, service } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: 'Заполни имя и телефон' });
    }

    const message = `
🚗 НОВАЯ ЗАЯВКА BLACKLINE

👤 Имя: ${name}
📞 Телефон: ${phone}
🚘 Автомобиль: ${car || 'Не указан'}
🛠 Услуга: ${service || 'Не указана'}
`;

    const response = await fetch(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: process.env.CHAT_ID,
          text: message,
        }),
      }
    );

    const result = await response.json();

    if (!result.ok) {
      throw new Error('Telegram не принял сообщение');
    }

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Не удалось отправить заявку' });
  }
});

app.listen(PORT, () => {
  console.log(`BLACKLINE server running: http://localhost:${PORT}`);
});