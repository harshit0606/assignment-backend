const Company = require("../model/company");

exports.getParams = (req, res, next) => {
  Company.findById(req.params.companyId).exec((err, company) => {
    if (err || !company) {
      return res.json({ message: "Company Not Found" });
    }
    req.company = company;
    next();
  });
};

exports.addCompany = (req, res) => {
  Company.create(req.body, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
};

exports.getCompany = (req, res) => {
  Company.find().exec((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
};

exports.editCompany = async (req, res) => {
  console.log(`${JSON.stringify(req.company)} , ${JSON.stringify(req.body)}`);
  let company;
  try {
    company = await Company.findByIdAndUpdate(
      req.params.companyId,
      {
        $set: {
          name: req.body.name ? req.body.name : req.company.name,
          email: req.body.email ? req.body.email : req.company.email,
          location: req.body.location ? req.body.location : req.company.location,
          contactNo: req.body.contactNo? req.body.contactNo: req.company.contactNo
        },
      },
      { new: true }
    );
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({ company });
};

exports.deleteCompany = async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.companyId);
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({ message: "Company DELETED!" });
};
