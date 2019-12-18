import * as Yup from 'yup'; // o YUP segue o schema validation
import { Op } from 'sequelize';

import Student from '../models/Student';

class StudentsController {
  async index(req, res) {
    const { name, page, perPage } = req.query;

    if (!name) {
      const studentsAll = await Student.findAll({
        order: ['name'],
        limit: perPage,
        offset: (page - 1) * perPage,
      });
      return res.json(studentsAll);
    }

    const students = await Student.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      order: ['name'],
      limit: perPage > 0 ? perPage : 10,
      offset: perPage > 0 ? (page - 1) * perPage : 0,
    });

    return res.json(students);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number()
        .required()
        .positive()
        .integer(),
      weight: Yup.number()
        .round()
        .required(),
      height: Yup.number()
        .round()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation is fails' });
    }

    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'Student already exists' });
    }

    const { id, name, email } = await Student.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      age: Yup.number().integer(),
      student_weight: Yup.number(),
      student_height: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email } = req.body;
    const student = await Student.findByPk(req.params.id);

    // check student exists
    if (!student) {
      return res.status(400).json({ error: 'Student does not exists' });
    }

    // check unique email in an existing student
    if (email !== student.email) {
      const studentExists = await Student.findOne({ where: { email } });
      if (studentExists) {
        return res.status(400).json({ error: 'Email already registered.' });
      }
    }

    const {
      id,
      name,
      age,
      student_weight,
      student_height,
    } = await student.update(req.body);

    return res.json({
      id,
      name,
      email,
      age,
      student_weight,
      student_height,
    });
  }

  async delete(req, res) {
    const student = await Student.findByPk(req.params.id);
    // check student exist
    if (!student) {
      return res.status(400).json({ error: 'Student does not exist' });
    }

    const { id, name, age, student_weight, student_height } = student;

    await student.destroy();

    return res.json({ id, name, age, student_weight, student_height });
  }
}

export default new StudentsController();
