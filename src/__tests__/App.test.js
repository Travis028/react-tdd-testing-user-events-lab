import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  render(<App />);
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />);
  const reactCheckbox = screen.getByLabelText(/react/i);
  const javascriptCheckbox = screen.getByLabelText(/javascript/i);
  const nodejsCheckbox = screen.getByLabelText(/node.js/i);
  expect(reactCheckbox).toBeInTheDocument();
  expect(javascriptCheckbox).toBeInTheDocument();
  expect(nodejsCheckbox).toBeInTheDocument();
});

test("the checkboxes are initially unchecked", () => {
  render(<App />);
  const reactCheckbox = screen.getByLabelText(/react/i);
  const javascriptCheckbox = screen.getByLabelText(/javascript/i);
  const nodejsCheckbox = screen.getByLabelText(/node.js/i);
  
  expect(reactCheckbox).not.toBeChecked();
  expect(javascriptCheckbox).not.toBeChecked();
  expect(nodejsCheckbox).not.toBeChecked();
});

// Newsletter Form - Adding Responses
import userEvent from '@testing-library/user-event';

test("the page shows information the user types into the name and email address form fields", async () => {
  render(<App />);
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  
  await userEvent.type(nameInput, 'John Doe');
  await userEvent.type(emailInput, 'john@example.com');
  
  expect(nameInput).toHaveValue('John Doe');
  expect(emailInput).toHaveValue('john@example.com');
});

test("checked status of checkboxes changes when user clicks them", async () => {
  render(<App />);
  const reactCheckbox = screen.getByLabelText(/react/i);
  const javascriptCheckbox = screen.getByLabelText(/javascript/i);
  
  await userEvent.click(reactCheckbox);
  await userEvent.click(javascriptCheckbox);
  
  expect(reactCheckbox).toBeChecked();
  expect(javascriptCheckbox).toBeChecked();
  
  await userEvent.click(reactCheckbox);
  expect(reactCheckbox).not.toBeChecked();
});

test("a message is displayed when the user clicks the Submit button", async () => {
  render(<App />);
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const reactCheckbox = screen.getByLabelText(/react/i);
  const submitButton = screen.getByRole('button', { name: /subscribe/i });
  
  await userEvent.type(nameInput, 'John');
  await userEvent.type(emailInput, 'john@example.com');
  await userEvent.click(reactCheckbox);
  await userEvent.click(submitButton);
  
  expect(screen.getByText(/thank you, john/i)).toBeInTheDocument();
  expect(screen.getByText(/you're interested in react/i)).toBeInTheDocument();
});
