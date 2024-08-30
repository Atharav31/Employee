const { emp } = require("../model/emp");

exports.addemp = async (req, res) => {
  const { name, email, code, joiningDate, status, address } = req.body;
  try {
    const existingemp = await emp.findOne({ email });

    if (existingemp) {
      return res.json({ alert: "Email already exists." });
    }

    const Employee = await emp.create({
      name,
      email,
      code,
      joiningDate,
      status,
      address,
    });
    console.log("Employee Created:", Employee);
    // return res.status(201).json({ message: "Employee Created" });
    const Employees = await emp.find({});
    return res.render("list", { Employees });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Server error." });
  }
};

exports.filter = async (req, res) => {
  try {
    const status = req.body.status;
    console.log("status", status);

    const filter = await emp.find({ status });
    console.log("filter", filter);
    return res.render("list", { Employees: filter });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Server error." });
  }
};
