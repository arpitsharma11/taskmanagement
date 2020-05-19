import axios from 'axios';

export default {
    async fetchAllTask(){
        try {
            const response = await axios.get('http://localhost:8080/tasks/');
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    async fetchTaskByid(id){
        try {
            const response = await axios.get(`http://localhost:8080/tasks/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    async createTask(body){
        try {
            const response = await axios.post('http://localhost:8080/tasks/',body );
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}