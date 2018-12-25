// in posts.js
import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput, LongTextInput, DateInput,BooleanInput,BooleanField,ImageField,ImageInput,SelectInput,NumberInput  } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';


export const ProjetList = (props) => (
    
    <List {...props}>
   
        <Datagrid>
        
            
            <TextField source="titre" />
           
            <TextField source="date_de_fin" />
            
           <BooleanField  source="principal"/>
            <EditButton basePath="/projet" />
        </Datagrid>
    </List>
);

const ProjetTitle = ({ record }) => {
    return <span> {record ? `${record.titre}` : ''}</span>;
};

    const toolbar= [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
  
      ["link", "image", "video"],
      [{ color: [] }, { background: [] }],
  
      ["clean"],
      [
        { align: "" },
        { align: "center" },
        { align: "right" },
        { align: "justify" }
      ]
    ]
  
export const ProjetEdit = (props) => (
    <Edit title={<ProjetTitle />} {...props}>
        <SimpleForm>
            
            <TextInput source="titre" style = {{width: "100%"}} />
            <BooleanInput source="principal" style = {{width: "100%"}} />
            <TextInput source="sous_titre" style = {{width: "100%"}} options={{ multiLine: true }}/>
            <TextInput source="mini_description" style = {{width: "100%"}} options={{ multiLine: true }} /> 
            <RichTextInput source="long_description"  toolbar={toolbar}  />
            <TextInput  style = {{width: "100%"}}  source="image" options={{ multiLine: true }} /> 
            <DateInput source="date_de_fin" />
            <SelectInput source="etat" choices={[
                { id: 'En cours', name: 'En cours' },
                { id: 'Terminé', name: 'Terminé' }
            ]} />
            <NumberInput source="nombre_de_dons"  />
            <NumberInput source="objectif"  />
            <NumberInput source="argent_accumule"  />



            
            
        </SimpleForm>
    </Edit>
);

export const ProjetCreate = (props) => (
    <Create title="Creation d'un projet" {...props}>
        <SimpleForm>
        <TextInput source="titre" style = {{width: "100%"}} />
            <BooleanInput source="principal" style = {{width: "100%"}} />
            <TextInput source="sous_titre" style = {{width: "100%"}} options={{ multiLine: true }}/>
            <TextInput source="mini_description" style = {{width: "100%"}} options={{ multiLine: true }} /> 
            <RichTextInput source="long_description"  toolbar={toolbar}  />
            <TextInput  style = {{width: "100%"}}  source="image" options={{ multiLine: true }} /> 
            <DateInput source="date_de_fin" />
            <SelectInput source="etat" choices={[
                { id: 'En cours', name: 'En cours' },
                { id: 'Terminé', name: 'Terminé' }
            ]} />
            <NumberInput source="nombre_de_dons"  />
            <NumberInput source="objectif"  />
            <NumberInput source="argent_accumule"  />
            
        </SimpleForm>
    </Create>
);