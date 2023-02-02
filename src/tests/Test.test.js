import { render, screen } from '@testing-library/react';
import Test from '../components/Test';

test('empty span', () => {
  render(<Test />);
  expect(screen.getByTestId('empty')).toBeEmptyDOMElement();
});
test('empty span not', () => {
  render(<Test />);
  expect(screen.getByTestId('not-empty')).not.toBeEmptyDOMElement()
});
test('not.toBeVisible', () => {
  render(<Test />);
  expect(screen.getByTestId('zero-opacity')).not.toBeVisible();
});
test('toBeVisible', () => {
  render(<Test />);
  expect(screen.getByTestId('visible')).toBeVisible()
});
test('toContainElement', () => {
  render(<Test />);
  const ancestor = screen.getByTestId('ancestor')
  const descendant = screen.getByTestId('descendant')
  const therd = screen.getByTestId('therd')
  const nonExistantElement = screen.getByTestId('does-not-exist')
  expect(ancestor).toContainElement(descendant)
  expect(ancestor).toContainElement(therd)
  expect(descendant).not.toContainElement(ancestor)
  expect(ancestor).not.toContainElement(nonExistantElement)
});
test('toContainHTML', () => {
  render(<Test />);
  expect(screen.getByTestId('parent')).toContainHTML('<span data-testid="child"></span>');
});
test('toHaveAttribute', () => {
  render(<Test />);
  const button = screen.getByTestId('ok-button')
  expect(button).toHaveAttribute('disabled')
  expect(button).toHaveAttribute('type', 'submit')
  expect(button).not.toHaveAttribute('type', 'button')
});
test('toHaveClass', () => {
  render(<Test />);
  const deleteButton = screen.getByTestId('delete-button')
  const noClasses = screen.getByTestId('no-classes')
  expect(deleteButton).toHaveClass('btn')
  expect(deleteButton).toHaveClass('btn-danger xs')
  expect(deleteButton).toHaveClass('btn xs btn-danger', {exact: true})
  expect(deleteButton).not.toHaveClass('btn xs btn-danger2', {exact: true})
  expect(noClasses).not.toHaveClass()
});
