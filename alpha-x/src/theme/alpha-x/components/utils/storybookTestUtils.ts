import { expect, fn, userEvent } from 'storybook/test';
import { within } from '@testing-library/react';
import { ButtonStyleType, StandardSizeType } from '../types/fields.js';

// Helper function to validate button size padding
export const validateButtonPadding = (button: HTMLElement, sizeClass: StandardSizeType) => {
  const computedPaddingMap = {
    small: '12px 20px',
    medium: '16px 24px',
    large: '20px 32px',
  };
  expect(button).toHaveStyle({ '--hsElevate--button__padding': computedPaddingMap[sizeClass] });
};

// Utility function to test button rendering and appearance
export const testButtonRendering = async (
  canvasElement: HTMLElement,
  expectedText: string,
  styleClass: ButtonStyleType,
  sizeClass: StandardSizeType = 'medium'
) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('link');

  await expect(button).toBeInTheDocument();
  await expect(button).toHaveTextContent(expectedText);
  await expect(button).toHaveClass('hs-elevate-button');
  await expect(button).toHaveClass(`hs-elevate-button--${styleClass}`);

  // Validate the correct computed padding is applied
  validateButtonPadding(button, sizeClass);

  return button;
};

// Sets up a click event listener with preventDefault for testing
export const setupClickTest = (element: HTMLElement) => {
  const handler = fn();

  element.addEventListener('click', event => {
    event.preventDefault();
    handler(event);
  });

  return handler;
};

// Keyboard key constants for consistent usage across tests
export const keys = {
  ENTER: '{Enter}',
  SPACE: '{Space}',
  SPACEBAR: ' ',
  ARROW_UP: '{ArrowUp}',
  ARROW_DOWN: '{ArrowDown}',
  ARROW_LEFT: '{ArrowLeft}',
  ARROW_RIGHT: '{ArrowRight}',
  ESCAPE: '{Escape}',
  TAB: '{Tab}',
} as const;

type KeyboardActivationKey = (typeof keys)[keyof typeof keys];

// Tests keyboard activation (space/enter) on an element
export const testKeyboardActivation = async (element: HTMLElement, user: ReturnType<typeof userEvent.setup>, key: KeyboardActivationKey = keys.SPACEBAR) => {
  const handler = setupClickTest(element);

  await user.keyboard(key);
  await expect(handler).toHaveBeenCalledTimes(1);

  return handler;
};
