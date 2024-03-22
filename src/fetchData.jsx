import { supabase } from "./lib/helper/supabaseClient";

export const fetchData = async (setToDos) => {
    try {
        const { data } = await supabase
            .from('Todo_list')
            .select('*');
        setToDos(data);
        console.log(data); // Log fetched data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export default fetchData
