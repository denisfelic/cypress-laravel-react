import React from "react";
import PageLayout from "../../common/layout/page";

const Home = (props: any) => {
   console.log(props);
  return (
    <PageLayout title={props.title}>
      {props.name && <div>Welcome, {props.name}!</div>}
      Environment: {props.environment}
    </PageLayout>
  );
};

export default Home;
