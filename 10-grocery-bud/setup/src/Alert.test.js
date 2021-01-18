import React from 'react';
import ReactDOM from 'react-dom';
import Alert from './Alert';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

// This test runs just to confirm the Alert component renders without crashing and ensures that the element is being rendered as a paragraph (<p>) JSX tag. The reason we create a div element is so that we can see that the contents of the Alert component can be nested within a div tag
it("renders without crashing", () => {
    const p = document.createElement("div");
    ReactDOM.render(<Alert />, p);
});

// This is to confirm the component renders correctly. It only looks for the ID of the component that we passed in the data-testid property. We want to say that whatever we passed as the msg prop is being displayed properly when accessed. Create-react-app also comes pre-installed with cleanup, performs similarly to the cleanup function inside a useEffect hook. It cleans up the test on a single component or data-testid so that if you have multiple tests running on that single component/data-testid they will run asynchronously and wont run into any errors. 
it("renders first Alert component", () => {
    const { getByTestId } = render(<Alert msg="message is displayed" />);
    expect(getByTestId('alert')).toHaveTextContent("message is displayed")
});

// Create-react-apps integrated cleanup function allows you to run multiple tests on the <Alert data-testid="alert"/> component since it cleans up the test after its complete allowing it to run another test on the same component. 
it("renders second Alert component", () => {
    const { getByTestId } = render(<Alert msg="save" />);
    expect(getByTestId('alert')).toHaveTextContent("save")
});

// It will look for a folder called snapshot with a file called alert.test.js.snap and will dump the entire JSON object in that file if the file doesn't exist. 
it("mathes snapshot", () => {
    const tree = renderer.create(<Alert msg="save" />).toJSON();
    expect(tree).toMatchSnapshot();
})