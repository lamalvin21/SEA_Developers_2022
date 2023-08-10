import React from "react";
import {create} from "react-test-renderer";
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
    });
});