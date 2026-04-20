import patient from "../models/patient.js";

const insertPatient = async (req, res) => {
  try {

//   const { pid, name, age } = req.body;

    // 🔹 Direct access
    const pid = req.body.pid;
    const name = req.body.name;
    const age = req.body.age;

    // 🔹 Optional chaining (safe check)
    if (!req?.body?.pid || !req?.body?.name || !req?.body?.age) {
      return res.status(400).json({
        message: "All fields (pid, name, age) are required"
      });
    }

    // 🔹 Insert into MongoDB
    const newPatient = await patient.create({
      pid,
      name,
      age
    });

    res.status(201).json({
      message: "Patient inserted successfully",
      data: newPatient
    });

  } catch (error) {
    res.status(500).json({
      message: "Error inserting patient",
      error: error.message
    });
  }
};

export default insertPatient;