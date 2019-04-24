const path=require('path');


const Sequelize= require("sequelize");

const options = {logging: false};

const sequelize = new Sequelize("sqlite:quiz.sqlite", options);

sequelize.import(path.join(__dirname, 'quiz'));

sequelize.sync() // Syncronize DB and seed if needed
    .then(() => sequelize.models.quiz.count())
    .then(count => {
        if (count === 0) {
            return sequelize.models.quiz.bulkCreate([
                {question: "Capital of Italy", answer: "Rome"},
                {question: "Capital of France", answer: "Paris"},
                {question: "Capital of Spain", answer: "Madrid"},
                {question: "Capital of Portugal", answer: "Lisbon"}
            ])
                .then(c => console.log(`DB filled with ${c.length} quizzes.`));
        } else {
            console.log(`DB exists & has ${count} quizzes.`);
        }
    })
    .catch(err => console.log(`   ${err}`));

 module.exports= sequelize;