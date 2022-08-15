import { FlatList, Text, TouchableOpacity } from "react-native"
import { IListTasks } from "../../interfaces/IListTasks"
import { styles } from "./styles"
import React from 'react';

export const TaskList = (props: IListTasks) => {
    return (
        <FlatList
            data={props.tasks}
            renderItem={({ item }) => (
                <TouchableOpacity key={item.id} style={styles.buttonTask}>
                    <Text style={styles.textTask}>{item.title}</Text>
                </TouchableOpacity>
            )}
        />
    )
}