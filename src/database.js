import mongoose from "mongoose";

const username = "JuampaVLB";
const password = "TlThRUmQWNVA785n";

const URI = `mongodb+srv://${username}:${password}@cluster0.ktoxf8e.mongodb.net/hospital?retryWrites=true&w=majority`;


// mongodb+srv://${username}:${password}@cluster0.ktoxf8e.mongodb.net/hospital?retryWrites=true&w=majority

// mongodb://0.0.0.0:27017/hospital

mongoose
  .connect(URI)
  .then((res) => console.log("Database is Connected!"))
  .catch((err) => console.log(err));
