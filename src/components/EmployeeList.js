import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    // const ds = new ListView.DataSource({
    //   rowHasChanged: (r1, r2) => r1 !== r2
    // });
    // this.dataSource = ds.clonWithRows(this.props.employees);
    this.creatDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be render with
    // this.props is still the old set of props
    this.creatDataSource(nextProps);
  }

  creatDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }
  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
      // <View>
      //   // {this.props.employee}
      //   <Text>Employee List</Text>
      //   <Text>Employee List</Text>
      //   <Text>Employee List</Text>
      //   <Text>Employee List</Text>
      //   <Text>Employee List</Text>
      // </View>
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => { return { ...val, uid }; });
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
