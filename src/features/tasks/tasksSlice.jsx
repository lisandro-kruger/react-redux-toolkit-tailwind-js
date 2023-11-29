import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {
        id: "e7b94a3f-1609-4bc8-bf57-a45333fbdca0",
        title: "Compra de comestibles",
        description: "Realizar una lista de los alimentos y productos que necesitas para la semana y buscar el supermercado más cercano para comprarlos.",
        completed: false,
      },
      {
        id: "7c24d15c-118c-404e-aba1-e929b4b2840d",
        title: "Limpieza del hogar",
        description: "Dedicar tiempo a limpiar la casa. Barrer y trapear los pisos, limpiar las ventanas, ordenar las habitaciones, etc.",
        completed: false,
      },
];

const userSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers:{
        addTask: (state, action) => {
            state.push(action.payload);
        },
        editTask: (state, action) => {
            const {id, title, description} = action.payload;
            const foundTask = state.find((task) => task.id === id);
            if(foundTask){
                foundTask.title = title;
                foundTask.description = description;
            }
        },
        deleteTask: (state, action) => {
            const foundTask = state.find((task) => task.id === action.payload);
            if(foundTask) {
                state.splice(state.indexOf(foundTask), 1);
            }
        },
    },
});

export const {addTask, editTask, deleteTask} = userSlice.actions;
export default userSlice.reducer;