import { FlatList, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import React from 'react';
import { TasksContext } from "../../context/TasksContext";
import { ITask } from "../../interfaces/ITasks";

export const TaskList = () => {
    const { tasks, removeTask } = React.useContext(TasksContext);

    const handleRemovePress = (id: number) => {
        removeTask(id);
    }

    return (
        <FlatList
            data={tasks as unknown as ITask[]}
            renderItem={({ item }) => (
                <TouchableOpacity key={item.id} style={styles.buttonTask} activeOpacity={0.5} onPress={() => handleRemovePress(item.id)}>
                    <Text style={styles.textTask}>{item.title}</Text>
                </TouchableOpacity>
            )}
        />
    )
}