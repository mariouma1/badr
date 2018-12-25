import React, { Component } from 'react';

import { render } from 'react-dom';
import { Admin, Resource, fetchUtils } from 'react-admin';
import restProvider from 'ra-data-simple-rest';

import { PostList, PostEdit, PostCreate } from './posts';
import { ProjetList, ProjetEdit, ProjetCreate} from './projets';


const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  options.headers.set('X-Custom-Header', 'foobar');
  return fetchUtils.fetchJson(url, options);
}

class Administrateur extends Component {
  
  render() {
  
    return (
     
      <Admin dataProvider={restProvider('http://localhost:8080', httpClient)}>
        <Resource name="membre" list={PostList}   edit={PostEdit}
        create={PostCreate} />

<Resource name="projet" list={ProjetList}   edit={ProjetEdit}
        create={ProjetCreate} />
    </Admin>
    );
  }
}

export default Administrateur;
