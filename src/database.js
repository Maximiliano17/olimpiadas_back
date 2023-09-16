import mongoose from "mongoose";

const username = "JuampaVLB";
const password = "TlThRUmQWNVA785n";

const URI = `mongodb+srv://${username}:${password}@cluster0.ktoxf8e.mongodb.net/hospital?retryWrites=true&w=majority`;

mongoose
  .connect(URI)
  .then((res) => console.log("Database is Connected!"))
  .catch((err) => console.log(err));
