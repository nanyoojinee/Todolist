const cors = require("cors");
const express = require('express');
const app = express();


app.use(cors());

app.get('/', (req, res)=>{
    res.send('유진은석의 투두')
})



const PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다.  http://localhost:${PORT}`);
});