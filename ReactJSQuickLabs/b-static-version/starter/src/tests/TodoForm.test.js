import React from "react";
import {create, act} from "react-test-renderer";
import TodoForm from "../Components/TodoForm";

jest.mock("../Components/utils/DateCreated", () => {
    return function MockDateCreated() {
        return <span testid="dateCreated">Date Created Component</span>;
    }
});

describe("TodoForm test suite", () => {
    describe("Date Created Component", () => {
        test("Date Created Component is rendered", () => {
            const component = create(<TodoForm />);
            const rootInstance = component.root;
            const dateCreated = rootInstance.find(
                el => el.type === `span` && el.props.testid === `dateCreated`
            )
            expect(dateCreated).toBeTruthy();
            expect(dateCreated.children).toContain("Date Created Component");
        });

        test("It should render the new value in the input when todoDescrption onChange is activated", () => {
            const testValue = "Test";
            const testRenderer = create(<TodoForm />);
            const testInstance = testRenderer.root;
            const descInput = testInstance.findByProps({name: "todoDescription"});
            expect(descInput.props.value).toBe("");
            act(() => descInput.props.onChange({target: {value: testValue}}));
            expect(descInput.props.value).toBe(testValue);
        });

        test("It should render the new value in the input when todoCompleted onChange is activated", () => {
            const testValue = true;
            const testRenderer = create(<TodoForm />);
            const testInstance = testRenderer.root;
            const completedInput = testInstance.findByProps({name: "todoCompleted"});
            expect(completedInput.props.checked).toBe(false);
            act(() => completedInput.props.onChange({target: {checked: testValue}}));
            expect(completedInput.props.checked).toBe(testValue);
        });

        test("should enable the submit button when todoDescription is not empty", () => {
            const testRenderer = create(<TodoForm />);
            const testInstance = testRenderer.root;
            const submitButton = testInstance.findByProps({value: "Submit"});
            expect(submitButton.props.disabled).toBe(true);
            const descInput = testInstance.findByProps({name: "todoDescription"});
            act(() => descInput.props.onChange({target: {value: "Test"}}));
            expect(submitButton.props.disabled).toBe(false);
            expect(submitButton.props.className).toContain("btn-primary");
        });
    });
});