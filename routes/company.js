const express = require("express");
const route = express.Router();
const {
  addCompany,
  getCompany,
  getParams,
  editCompany,
  deleteCompany,
} = require("../controllers/company");
route.get("/", (req, res) => {
  res.json("HEllo");
});
route.post("/addcompany", addCompany);
route.get("/getcompany", getCompany);
// route.param("noteId", getParams);
route.patch("/editcompany/:companyId", getParams, editCompany);
route.delete("/deletecompany/:companyId", getParams, deleteCompany);
module.exports = route;
