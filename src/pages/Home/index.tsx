import React, { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TaskList } from '../../components/TaskList';
import { TasksContext } from '../../context/TasksContext';
import { ITask } from '../../interfaces/ITasks';
import { styles } from './styles';


export const Home = () => {
    const [newTask, setNewTask] = useState('');
    const { addTask } = React.useContext(TasksContext);

    const handleAddPress = () => {
        const data = {
            id: Number(new Date().getMilliseconds()),
            title: newTask ? newTask : 'Task empty'
        }
        addTask(data);
        setNewTask('');
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.text}>adoaskdksaodk</Text>
                <TextInput style={styles.input} onChangeText={setNewTask} value={newTask} placeholder="New Task..." />
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.5}
                    onPress={handleAddPress}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>

                <Text style={styles.text}>My Tasks</Text>

                <TaskList />

            </View>
        </SafeAreaView>
    );
};

