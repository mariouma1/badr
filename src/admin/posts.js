// in posts.js
import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput, LongTextInput, DateInput } from 'react-admin';


export const PostList = (props) => (
    
    <List {...props}>
   
        <Datagrid>
            
            <TextField source="name" />
            <TextField source="price" />
            <TextField source="qty" />
           
            <EditButton basePath="/product" />
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="qty" /> 
            <TextInput source="price" options={{ multiLine: true }} />
            
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="price" options={{ multiLine: true }} />
            
            <TextInput source="qty" />
        </SimpleForm>
    </Create>
);