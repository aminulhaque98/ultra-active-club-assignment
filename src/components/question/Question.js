import React from 'react';

const Question = () => {
    return (
        <div className='container  border border-primary'>
            <h3>How does react work?</h3>
            <h5>
                React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. React has a few different kinds of components, but we'll start with React.Component subclasses: class ShoppingList extends React.
            </h5>

            <h3>Props and state with different?</h3>
            <h5>

                Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.

            </h5>

            <h3>UseEffect data load and what does another work?</h3>
            <h5>

                useEffect(callback, dependencies) is the hook that manages the side-effects in functional components. callback argument is a function to put the side-effect logic. dependencies is a list of dependencies of your side-effect: being props or state values.

            </h5>
        </div>
    );
};

export default Question;