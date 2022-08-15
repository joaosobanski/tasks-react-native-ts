import { FlatList, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import React from 'react';
import { TasksContext } from "../../context/TasksContext";
import { ITask } from "../../interfaces/ITasks";

export const TaskList = () => {
    const { tasks } = React.useContext(TasksContext);
    return (
        <FlatList
            data={tasks as unknown as ITask[]}
            renderItem={({ item }) => (
                <TouchableOpacity key={item.id} style={styles.buttonTask}>
                    <Text style={styles.textTask}>{item.title}</Text>
                </TouchableOpacity>
            )}
        />
    )
}