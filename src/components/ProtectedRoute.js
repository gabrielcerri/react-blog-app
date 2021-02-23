import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...rest} {...props} />;
        } else {
          <Redirect to={{ pathname: "/" }} />;
        }
      }}
    />
  );
};

//agregar un path /Unauthorized
