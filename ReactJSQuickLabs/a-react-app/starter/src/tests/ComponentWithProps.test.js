import react from 'react';
import {create} from 'react-test-renderer';
import ComponentWithProps from '../ComponentWithProps';

test('it should render the correct heading prop when a heading prop is provided', () => {
    const testHeader = "Test Header";
    const testRenderer = create(<ComponentWithProps header={testHeader} />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType('h1').children[0]).toBe(testHeader);
});

test('it should render the correct content prop when a content prop is provided', () => {
    const testContent = "Test Content";
    const testRenderer = create(<ComponentWithProps content={testContent} />);
    const testInstance = testRenderer.root;
    const renderedParagraph = testInstance.findAllByType('p');
    expect(renderedParagraph[0].children).toContain(testContent);
});

test('it should render the correct number prop when a number prop is provided', () => {
    const testNumber = 50;
    const testRenderer = create(<ComponentWithProps number={testNumber} />);
    const testInstance = testRenderer.root;
    const renderedParagraph = testInstance.findAllByType('p');
    expect(renderedParagraph[1].children).toContain(testNumber.toString());
});