import 'react-native';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Home } from '../../src/pages/Home';
import { renderHook, act } from '@testing-library/react-hooks';
import { TasksProvider, useTaskList } from '../../src/context/TasksContext';

describe('Home Page', () => {
    it('renders correctly', () => {
        const { getByPlaceholderText } = render(<Home />);
        const inputNewText = getByPlaceholderText('New Task...');
        expect(inputNewText).toBeDefined();
        expect(inputNewText.props.placeholder).toBeTruthy();
    });

    // add item in list
    it('verify push item in task list ', async () => {
        //get hook and instance the provider
        const { result } = renderHook(() => useTaskList(), {
            wrapper: TasksProvider,
        });

        //implementation
        const data = { id: 1, title: 'Task01' };

        await act(() => result.current.addTask(data));

        expect(result.current.tasks).toBeTruthy();

    });

    it('verify if touch button add item in task list ', async () => {
        const { getByPlaceholderText, getByTestId } = render(<Home />, {
            wrapper: TasksProvider,
        });

        const { result } = renderHook(() => useTaskList(), {
            wrapper: TasksProvider,
        });

        const inputNewTask = getByPlaceholderText('New Task...');
        const button = getByTestId('addButton');

        const data = { id: result.current.tasks.length + 1, title: 'Task01' };

        // fireevent pass param input and value
        act(() => fireEvent.changeText(inputNewTask, data.title));

        // action prass button
        await act(async () => {
            await fireEvent.press(button);
        });

        expect(result.current.tasks).toBeTruthy();
    });
});