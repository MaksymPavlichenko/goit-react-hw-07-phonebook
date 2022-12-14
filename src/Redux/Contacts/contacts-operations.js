import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://63345e5c90a73d0feded795e.mockapi.io/';

const getContacts = createAsyncThunk('contacts/get', async () => {
    try {
        const { data } = await axios.get('/contacts');
        return data;
    } catch (error) {
        return error;
    }
});

const addContacts = createAsyncThunk('/contacts/add', async contact =>{
    try {
        const { data } = await axios.post('/contacts', contact);
        return data;
    } catch (error) {
        return error;
    }
});

const deleteContacts = createAsyncThunk('/contacts/delete', async id => {
    try {
        await axios.delete(`/contacts/${id}`);
        return id;
    } catch (error) {
        return error;
    }
});

export { getContacts, addContacts, deleteContacts };