const knex = require("../knex");
async function routes(fastify, options) {
  fastify.post("/newEntry", async (request, reply) => {
    knex("tbl_opd_register")
      .insert(request.body)
      .then((result) => {
        reply.status(200).send(result);
      })
      .catch((error) => {
        reply.status(400).send(error);
      });
  });
  fastify.post("/getEntries", async (request, reply) => {
    let filter = {};
    console.log(request.body.department,request.body.report_type);
    let query = `SELECT id,patient_name,DATE_FORMAT(transaction_date, '%Y-%m-%d') as created,DATE_FORMAT(transaction_date, '%Y-%m-%d') as transaction_date,entry_by,`;
    if (request.body.report_type == "lab") {
      query += `lab as amount`;
    } else if (request.body.report_type == "registration") {
      query += `(registration + consultation) as amount`;
    } else if (request.body.report_type == "medicine") {
      query += `(dispensary +bio_chemic + mother_tincher) as amount`;
    } else if (request.body.report_type == "other") {
      query += `(minor_dressing + major_dressing + first_stiches + other_stiches + injection + ecg) as amount`;
    } else {
      query += `total as amount`;
    }
    query += ` from tbl_opd_register`;
    query += ` where transaction_date between '${request.body.from_date}' and '${request.body.to_date}'`;
    if (request.body.department != "all") {
      query += ` and department = '${request.body.department}' HAVING amount > 0`;
    }
    console.log(query);
    await knex
      .raw(query)
      .then((result) => {
       
      // console.log(result[0]);
        reply.status(200).send(result[0]);
      })
      .catch((error) => {
        reply.status(400).send(error);
      });
  });
  fastify.get("/getEntry/:id", async (request, reply) => {
    knex("tbl_opd_register")
      .select()
      .where({ id: request.params.id })
      .then((result) => {
        reply.status(200).send(result[0]);
      })
      .catch((error) => {
        reply.status(400).send(error);
      });
  });
}
module.exports = routes;
