import "dotenv/config";
import { app } from "./src/app.js";

const PORT = process.env.SERVER_PORT || 5001;

app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다. z http://localhost:${PORT}`);
});
