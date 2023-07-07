import db from '../../config/dbconfig.js';

const taskService = {
    createTask: async (content) => {
        try{
            // db에 추가
            const result = await db.query("INSERT INTO tasks (content) VALUES (?)", [content]);
            // 생성된 task 반환
            const createdTask = {
                id: result.insertId,
                content: content,
            };

            return createdTask;
        } catch (err) {
            throw err;
        }
    },
};

export {taskService};