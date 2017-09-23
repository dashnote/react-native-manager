import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import AlbumList from './components/AlbumList';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth" initial >
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>
      <Scene key="albumList" component={AlbumList} title="Album List" />
      <Scene key="main" >
        <Scene
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
          key="employeeList"
          component={EmployeeList}
          title="Employee"
        />
        <Scene key='employeeCreate' component={EmployeeCreate} title="Create Employee" />
        <Scene key='employeeEdit' component={EmployeeEdit} title="Employee Edit" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
