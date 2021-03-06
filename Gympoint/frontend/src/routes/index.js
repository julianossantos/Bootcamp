import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SingUp';

import Students from '../pages/Students';
import StudentUpdate from '../pages/Students/updateStudent';
import StudentAdd from '../pages/Students/addStudent';
import Plans from '../pages/Plans';
import PlanAdd from '../pages/Plans/addPlan';
import PlanUpdate from '../pages/Plans/updatePlan';
import Enrollments from '../pages/Enrollments';
import EnrollmentAdd from '../pages/Enrollments/addEnrollment';
import EnrollmentUpdate from '../pages/Enrollments/updateEnrollment';
import HelpOrders from '../pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/students" component={Students} isPrivate />
      <Route path="/updateStudent/:name" component={StudentUpdate} isPrivate />
      <Route path="/addStudent" component={StudentAdd} isPrivate />

      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/addplan" component={PlanAdd} isPrivate />
      <Route path="/updateplan/:id" component={PlanUpdate} isPrivate />

      <Route path="/enrollments" component={Enrollments} isPrivate />
      <Route path="/addEnrollment" component={EnrollmentAdd} isPrivate />
      <Route
        path="/updateEnrollment/:id"
        component={EnrollmentUpdate}
        isPrivate
      />
      <Route path="/help-orders" component={HelpOrders} isPrivate />
      <Route path="/signUp" component={SignIn} />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
