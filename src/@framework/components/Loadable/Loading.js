import React from "react";
const Loading = props => {
  if (props.error) {
    return <h2>Something went wrong</h2>;
  } else if (props.timedOut) {
    return <h2 className="text-20 mb-16">Taking a long time...</h2>;
  } else if (props.pastDelay) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center">
        <h2 className="text-20 mb-16" color="textSecondary">
          Loading...
        </h2>
        {/* <LinearProgress className="w-xs" color="secondary" /> */}
      </div>
    );
  } else {
    return null;
  }
};

export default Loading;
