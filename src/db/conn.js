const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/olmpyics",{

}).then(() => {
    console.log("Connection is successful");
})
.catch((e) => {
    console.error("Connection is not established: ", e);
});